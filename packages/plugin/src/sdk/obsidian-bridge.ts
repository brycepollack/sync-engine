export default function obsidianBridge() {
	return {
		name: 'obsidian-import-bridge',
		renderChunk(code: string) {
			const transformed = code
				.replaceAll(
					/^\s*import\s+(?<name>[A-Za-z_$][\w$]*)\s+from\s+(?<quote>['"])obsidian\k<quote>\s*;?\s*$/gmv,
					(_, name: string) => `const ${name} = window.syncEngineApiBridge;`,
				)
				.replaceAll(
					/^\s*import\s+\*\s+as\s+(?<name>[A-Za-z_$][\w$]*)\s+from\s+(?<quote>['"])obsidian\k<quote>\s*;?\s*$/gmv,
					(_, name: string) => `const ${name} = window.syncEngineApiBridge;`,
				)
				.replaceAll(
					/^\s*import\s+(?!(?:type\b|\*\s+as\s+))(?<name>.+?)\s+from\s+(?<quote>['"])obsidian\k<quote>\s*;?\s*$/gmv,
					(_, name: string) => `const ${name} = window.syncEngineApiBridge;`,
				);
			return transformed === code ? undefined : { code: transformed };
		},
	};
}
