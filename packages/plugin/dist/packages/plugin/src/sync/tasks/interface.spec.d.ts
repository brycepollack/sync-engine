import { FileStat, MaybePromise } from "../../types.spec.js";
import { Fs } from "../../fs/interface.spec.js";
import { RecordStore } from "../../modules/Storage.spec.js";
import { TaskOptions } from "../decision/interface.spec.js";
import "../../fs/index.spec.js";
//#region src/sync/tasks/interface.d.ts
type BaseTaskOptions = {
  localFs: Fs;
  remoteFs: Fs;
  record: RecordStore;
};
type TaskNames = 'addRecord' | 'removeRecord' | 'createLocalDir' | 'createRemoteDir' | 'download' | 'resolveConflict' | 'removeLocal' | 'removeRemote' | 'upload' | 'moveLocal' | 'moveRemote';
type ConflictResolverPayload = {
  local: FileStat;
  remote: FileStat;
  key: string;
  localFs: Fs;
  remoteFs: Fs;
  record: RecordStore;
};
type ConflictResolver = (payload: ConflictResolverPayload) => MaybePromise<void>;
declare abstract class BaseTask<T extends TaskOptions = TaskOptions> {
  readonly options: BaseTaskOptions & T;
  constructor(options: BaseTaskOptions & T);
  protected readonly remoteFs: Fs;
  protected readonly localFs: Fs;
  protected readonly record: RecordStore;
  name: TaskNames;
  prettyName: string;
  readonly key: string;
  readonly local: (BaseTaskOptions & T)['local'];
  readonly remote: (BaseTaskOptions & T)['remote'];
  abstract exec(): MaybePromise<void>;
}
//#endregion
export { BaseTask, BaseTaskOptions, ConflictResolver, ConflictResolverPayload, TaskNames };