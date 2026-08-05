import { $ } from 'bun';

type MaybePromise<T> = Promise<T> | T;
type Command =
	| string
	| { command: string; callback: (result: $.ShellPromise) => MaybePromise<void> };
export type Commands = Array<Command | Array<Command>>;

function handleCommand(command: Command) {
	if (typeof command === 'string') return $`sh -c ${command}`;
	const commandResult = $`sh -c ${command.command}`;
	return Promise.all([commandResult, command.callback(commandResult)]);
}

export default async function execute(commands: Commands) {
	for (const command of commands)
		await (Array.isArray(command)
			? Promise.all(command.map((subCommand) => handleCommand(subCommand)))
			: handleCommand(command));
}
