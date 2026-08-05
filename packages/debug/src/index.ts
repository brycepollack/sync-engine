import type { Context, Dispatch, Events } from '@hesprs/sync-engine-sdk';
import statFs from './stat-fs';

export default class Debug {
	private readonly log: (str: string) => void;
	private readonly cleanup: Array<() => void> = [];

	constructor(private readonly ctx: Context) {
		const dispatch: Dispatch<Events> = ctx.dispatch;
		this.log = (str: string) => dispatch('logGeneral', str);
	}

	start = () => {
		this.cleanup.push(
			this.ctx.registerLocalFsWrapper({
				apply: (fs) => statFs(fs, this.log),
				priority: 1,
			}),
			this.ctx.registerLocalRequestMiddleware({
				apply: (request) => (params) => {
					if (params.method === 'LIST' || params.method === 'STAT')
						params.headers = { cached: false };
					return request(params);
				},
				priority: 1243,
			}),
		);
	};

	dispose = () => this.cleanup.splice(0).forEach((fn) => fn());
}
