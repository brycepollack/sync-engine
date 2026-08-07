import { Binary, FileStat, FolderStat } from "../src/types.spec.js";
import { Fs, RootFs } from "../src/fs/interface.spec.js";
import { Request, RequestParam } from "../src/modules/Registrar.spec.js";
import "../src/fs/index.spec.js";
//#region test/test-kit.d.ts
type FsCalls = {
  delete: Array<string>;
  exists: Array<string>;
  list: Array<string>;
  mkdir: Array<string>;
  move: Array<[string, string]>;
  read: Array<[string, FileStat]>;
  readStream: Array<[string, FileStat]>;
  stat: Array<string>;
  write: Array<[string, Binary, FileStat]>;
  writeStream: Array<[string, FileStat]>;
};
type FsOptions = {
  control?: Partial<Fs>;
  uid?: string;
};
type FsHarness = {
  calls: FsCalls;
  control: Fs;
  fs: RootFs;
};
type RequestHarness = {
  calls: Array<RequestParam | string>;
  request: Request;
};
declare function bytes(value: string): Binary;
declare function file(key: string, options?: {
  mtime?: number;
  size?: number;
  uid?: string;
}): FileStat;
declare function folder(key: string): FolderStat;
declare function stream(chunks?: Array<string | Binary>): ReadableStream<Binary>;
declare function deferred<T>(): {
  promise: Promise<T>;
  reject: (reason?: unknown) => void;
  resolve: (value: T | PromiseLike<T>) => void;
};
declare function flush(turns?: number): Promise<void>;
declare function request(control: Request): RequestHarness;
declare function fs(options?: FsOptions): FsHarness;
declare const testKit: {
  bytes: typeof bytes;
  deferred: typeof deferred;
  file: typeof file;
  flush: typeof flush;
  folder: typeof folder;
  fs: typeof fs;
  request: typeof request;
  stream: typeof stream;
};
//#endregion
export { testKit as default };