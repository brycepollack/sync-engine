import type { Binary, FileStat, Fs, ListReporter, WrappedFs } from '@hesprs/sync-engine-sdk';
import hash from '@repo/shared/crypto';

const RETRY_COUNT = 10;
const RETRY_INTERVAL = 100;

type Log = (message: string) => void;

const wait = (milliseconds: number) =>
	new Promise<void>((resolve) => {
		window.setTimeout(resolve, milliseconds);
	});

class StatFs implements WrappedFs {
	constructor(
		readonly original: Fs,
		private readonly log: Log,
	) {}

	getUid() {
		return this.original.getUid();
	}

	read(key: string, stat: FileStat) {
		return this.original.read(key, stat);
	}

	readStream(key: string, stat: FileStat) {
		return this.original.readStream(key, stat);
	}

	async write(key: string, value: Binary, stat: FileStat) {
		const uid = await this.original.write(key, value, stat);
		this.probe(key, uid);
		return uid;
	}

	async writeStream(key: string, value: ReadableStream<Binary>, stat: FileStat) {
		const uid = await this.original.writeStream(key, value, stat);
		this.probe(key, uid);
		return uid;
	}

	delete(key: string) {
		return this.original.delete(key);
	}

	move(oldKey: string, newKey: string) {
		return this.original.move(oldKey, newKey);
	}

	mkdir(key: string, recursive?: boolean) {
		return this.original.mkdir(key, recursive);
	}

	stat(key: string) {
		return this.original.stat(key);
	}

	exists(key: string) {
		return this.original.exists(key);
	}

	list(key: string, reporter: ListReporter) {
		return this.original.list(key, reporter);
	}

	private readonly probe = (key: string, uid: string) => {
		if (!uid.endsWith('~0')) return;
		void this.probeStats(key);
	};

	private readonly probeStats = async (key: string) => {
		const obfuscatedKey = hash(key);
		for (let attempt = 1; attempt <= RETRY_COUNT; attempt++) {
			try {
				const stat = await this.original.stat(key);
				this.log(
					`Post-write stat ${attempt}/${RETRY_COUNT}: ${obfuscatedKey} -> ${stat.isDir ? 'dir' : stat.size}`,
				);
			} catch (error) {
				this.log(
					`Post-write stat ${attempt}/${RETRY_COUNT}: ${obfuscatedKey} -> error: ${String(error)}`,
				);
			}
			if (attempt < RETRY_COUNT) await wait(RETRY_INTERVAL);
		}
	};
}

export default function statFs(original: Fs, log: Log): WrappedFs {
	return new StatFs(original, log);
}
