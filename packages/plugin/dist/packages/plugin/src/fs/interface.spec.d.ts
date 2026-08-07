import { Binary, FileStat, MaybePromise, Progress, Stat } from "../types.spec.js";
import { GlobMatchResult } from "../utils/glob-match.spec.js";
//#region src/fs/interface.d.ts
/**
 * All keys use unified format:
 * - root: `/`
 * - file: `note.md`, `folder/note.md`
 * - folder: `folder/`, `folder/nested/`
 */
type RootFs = {
  getUid(): string;
  read(key: string, stat: FileStat): MaybePromise<Binary>;
  readStream(key: string, stat: FileStat): MaybePromise<ReadableStream<Binary>>;
  write(key: string, value: Binary, stat: FileStat): MaybePromise<string>;
  writeStream(key: string, value: ReadableStream<Binary>, stat: FileStat): MaybePromise<string>;
  delete(key: string): MaybePromise<void>;
  move(oldKey: string, newKey: string): MaybePromise<void>;
  mkdir(key: string, recursive?: boolean): MaybePromise<void>;
  stat(key: string): MaybePromise<Stat>;
  exists(key: string): MaybePromise<boolean>;
  list(key: string, reporter: ListReporter): MaybePromise<Array<Stat>>;
};
type ListReporter = (progress: Required<Progress>) => MaybePromise<GlobMatchResult>;
type WrappedFs = RootFs & {
  original: Fs;
};
type Fs = WrappedFs | RootFs;
type WriteAtom = {
  type: 'write';
  key: string;
  execute: () => MaybePromise<string>;
  resolve: (uid: string) => void;
  reject: (err: Error) => void;
};
type DeleteAtom = {
  type: 'delete';
  key: string;
  execute: () => MaybePromise<void>;
  resolve: () => void;
  reject: (err: Error) => void;
};
type MoveAtom = {
  type: 'move';
  oldKey: string;
  newKey: string;
  execute: () => MaybePromise<void>;
  resolve: () => void;
  reject: (err: Error) => void;
};
type MkdirAtom = {
  type: 'mkdir';
  key: string;
  execute: () => MaybePromise<void>;
  resolve: () => void;
  reject: (err: Error) => void;
};
type InputAtom = WriteAtom | DeleteAtom | MoveAtom | MkdirAtom;
type CustomAtom = {
  type: 'custom';
  execute: () => MaybePromise<void>;
};
type OutputAtom = InputAtom | CustomAtom;
type OptimizerInput = {
  atoms: Array<InputAtom>;
  fs: Fs;
  executeAtom: (atom: OutputAtom) => Promise<void | string>;
};
type OptimizerOutput = Array<OutputAtom>;
type BatchOptimizer = (input: OptimizerInput) => OptimizerOutput;
//#endregion
export { BatchOptimizer, CustomAtom, DeleteAtom, Fs, InputAtom, ListReporter, MkdirAtom, MoveAtom, OptimizerInput, OptimizerOutput, OutputAtom, RootFs, WrappedFs, WriteAtom };