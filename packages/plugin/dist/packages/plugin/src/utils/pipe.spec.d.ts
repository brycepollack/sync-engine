import { Binary, FileStat, MaybePromise } from "../types.spec.js";
import { Fs } from "../fs/interface.spec.js";
import "../fs/index.spec.js";
//#region src/utils/pipe.d.ts
declare function pipe({ from, to, stat, key }: {
  from: Fs;
  to: Fs;
  key: string;
  stat: FileStat;
}): Promise<string | undefined>;
declare function readWithSize(fs: Fs, key: string, stat: FileStat): Promise<Binary | ReadableStream<Binary> | undefined>;
declare function writeWithValue(fs: Fs, key: string, value: Binary | ReadableStream<Binary>, stat: FileStat): MaybePromise<string>;
//#endregion
export { pipe, readWithSize, writeWithValue };