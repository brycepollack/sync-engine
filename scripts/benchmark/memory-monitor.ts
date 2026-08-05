// oxlint-disable no-console
import { $ } from 'bun';

const OUT = `${import.meta.dir}/result.json`;
const records: Array<{ timestamp: number; usage: number }> = [];
const start = Date.now();

process.on('SIGINT', () => {
	void Bun.write(OUT, JSON.stringify(records, undefined, '\t')).then(() => process.exit());
});

while (true) {
	const text = await $`obsidian eval code="process.memoryUsage().rss"`.text(); // Return like '=> 287920128'
	const rss = Number.parseInt(text.slice(3));
	if (!Number.isNaN(rss)) {
		const ts = Date.now() - start;
		records.push({ timestamp: ts, usage: rss });
        console.debug(rss);
	}
}
