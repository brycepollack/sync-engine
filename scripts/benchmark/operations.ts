import type { Commands } from './executor';

export function create(key: string, size: number) {
	return `obsidian create path="${key}" content="${'0'.repeat(size)}" overwrite`;
}

export function mkdir(key: string) {
	return `obsidian eval code="app.vault.adapter.mkdir('${key}')"`;
}

export function append(key: string, size: number) {
	return `obsidian append path="${key}" content="${'0'.repeat(size)}"`;
}

export function del(key: string) {
	return `obsidian eval code="app.vault.adapter.trashLocal('${key}')"`;
}

export function move(oldKey: string, newKey: string) {
	return `obsidian eval code="app.vault.adapter.rename('${oldKey}', '${newKey}')"`;
}

function beforeFirstSlash(str: string) {
	const idx = str.indexOf('/');
	return idx === -1 ? str : str.slice(0, idx);
}
export function clear(): Commands {
	const delList: Array<string> = [];
	const handleCommands = async (p: Bun.$.ShellPromise) => {
		const text = await p.text();
		const set = new Set<string>();
		text.split('\n').forEach((line) => {
			const root = beforeFirstSlash(line).trim();
			if (root) set.add(root);
		});
		delList.push(...set.values().map((path) => del(path)));
	};
	return [
		[
			{ callback: handleCommands, command: 'obsidian files' },
			{ callback: handleCommands, command: 'obsidian folders' },
		],
		delList,
	];
}

export function waitForApproval() {
	return 'read -r -p "Press Enter to continue..."';
}
