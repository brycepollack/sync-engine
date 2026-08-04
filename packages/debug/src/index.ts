import type { Context, Dispatch, Events } from '@hesprs/sync-engine-sdk';
import { isFolder } from '@repo/shared/path';
import { Setting } from 'obsidian';

export default class Debug {
	private readonly log: (str: string) => void;
	private readonly cleanup: Array<() => void> = [];

	constructor(private readonly ctx: Context) {
		const dispatch: Dispatch<Events> = ctx.dispatch;
		this.log = (str: string) => dispatch('logGeneral', str);
	}

	start = () => {
		const time = window.setTimeout(
			() =>
				void this.ctx
					.getRecordStore()
					.keys()
					.then((keys) =>
						this.log(
							keys.length ? `Record has ${keys.length} items.` : 'Record is empty.',
						),
					),
			3000,
		);
		this.cleanup.push(
			this.ctx.registerSetting({
				apply: (el) => {
					new Setting(el).setName('Debug changes and export log').addButton((button) =>
						button.setButtonText('Debug').onClick(async () => {
							await this.compareChanged();
							void this.ctx.exportLogs();
						}),
					);
				},
				priority: 10_000,
			}),
			() => window.clearTimeout(time),
		);
	};

	compareChanged = async () => {
		const [records, local] = await Promise.all([
			this.ctx.getRecordStore().entries(),
			this.ctx
				.createLocalFs()
				.list('/', ({ current }) => (isFolder(current) ? 'advance' : 'include')),
		]);
		const localMap = new Map(local.map((stat) => [stat.key, stat]));
		let hasChanged = false;
		records.forEach(([key, stat]) => {
			if (stat.isDir) return;
			const current = localMap.get(key);
			if (!current) {
				this.log('Current has a file missing.');
				return;
			}
			if (current.isDir) {
				this.log('Current turns to dir.');
				return;
			}
			const recordUid = stat.local;
			const currentUid = current.uid;
			if (recordUid !== currentUid) {
				hasChanged = true;
				this.log(`Current differs: ${recordUid} -> ${currentUid}.`);
			}
		});
		if (!hasChanged) this.log('Nothing changed.');
	};

	dispose = () => this.cleanup.splice(0).forEach((fn) => fn());
}
