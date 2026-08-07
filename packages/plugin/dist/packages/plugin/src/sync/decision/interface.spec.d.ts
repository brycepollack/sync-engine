import { FileStat, FolderStat, RecordStatsMap, Stat, StatsMap } from "../../types.spec.js";
import { BaseTask, TaskNames } from "../tasks/interface.spec.js";
import AddRecord from "../tasks/AddRecord.spec.js";
import CreateRemoteDir from "../tasks/CreateRemoteDir.spec.js";
import Download from "../tasks/Download.spec.js";
import MoveLocal from "../tasks/MoveLocal.spec.js";
import MoveRemote from "../tasks/MoveRemote.spec.js";
import RemoveLocal from "../tasks/RemoveLocal.spec.js";
import RemoveRecord from "../tasks/RemoveRecord.spec.js";
import RemoveRemote from "../tasks/RemoveRemote.spec.js";
import ResolveConflict from "../tasks/ResolveConflict.spec.js";
import Upload from "../tasks/Upload.spec.js";
import CreateLocalDir from "../tasks/CreateLocalDir.spec.js";
//#region src/sync/decision/interface.d.ts
type TaskOptions = {
  key: string;
  remote?: Stat;
  local?: Stat;
};
type OptionsWithRemoteFileStat = {
  remote: FileStat;
} & TaskOptions;
type OptionsWithLocalFileStat = {
  local: FileStat;
} & TaskOptions;
type OptionsWithRemoteFolderStat = {
  remote: FolderStat;
} & TaskOptions;
type OptionsWithLocalFolderStat = {
  local: FolderStat;
} & TaskOptions;
type OptionsWithLocalStat = {
  local: Stat;
} & TaskOptions;
type OptionsWithRemoteStat = {
  remote: Stat;
} & TaskOptions;
type OptionsWithBothStats = {
  local: Stat;
  remote: Stat;
} & TaskOptions;
type OptionsWithBothFileStats = {
  local: FileStat;
  remote: FileStat;
} & TaskOptions;
type OptionsWithLocalStatAndOldKey = {
  local: Stat;
  oldKey: string;
} & TaskOptions;
type OptionsWithRemoteStatAndOldKey = {
  remote: Stat;
  oldKey: string;
} & TaskOptions;
type TaskOptionsMap = {
  download: OptionsWithRemoteFileStat;
  upload: OptionsWithLocalFileStat;
  resolveConflict: OptionsWithBothFileStats;
  removeLocal: OptionsWithLocalStat;
  removeRemote: OptionsWithRemoteStat;
  createLocalDir: OptionsWithRemoteFolderStat;
  createRemoteDir: OptionsWithLocalFolderStat;
  removeRecord: TaskOptions;
  addRecord: OptionsWithBothStats;
  moveLocal: OptionsWithRemoteStatAndOldKey;
  moveRemote: OptionsWithLocalStatAndOldKey;
};
declare const taskMap: {
  readonly addRecord: typeof AddRecord;
  readonly createLocalDir: typeof CreateLocalDir;
  readonly createRemoteDir: typeof CreateRemoteDir;
  readonly download: typeof Download;
  readonly moveLocal: typeof MoveLocal;
  readonly moveRemote: typeof MoveRemote;
  readonly removeLocal: typeof RemoveLocal;
  readonly removeRecord: typeof RemoveRecord;
  readonly removeRemote: typeof RemoveRemote;
  readonly resolveConflict: typeof ResolveConflict;
  readonly upload: typeof Upload;
};
type TaskFactory = <N extends TaskNames>(name: N, options: TaskOptionsMap[N]) => InstanceType<(typeof taskMap)[N]>;
type Decider = (input: DeciderInput) => Array<BaseTask>;
type DeciderInput = {
  localStats: StatsMap;
  remoteStats: StatsMap;
  records: RecordStatsMap;
  taskFactory: TaskFactory;
  logger: (log: string) => void;
};
//#endregion
export { Decider, DeciderInput, OptionsWithBothFileStats, OptionsWithBothStats, OptionsWithLocalFileStat, OptionsWithLocalFolderStat, OptionsWithLocalStat, OptionsWithLocalStatAndOldKey, OptionsWithRemoteFileStat, OptionsWithRemoteFolderStat, OptionsWithRemoteStat, OptionsWithRemoteStatAndOldKey, TaskFactory, TaskOptions, TaskOptionsMap, taskMap };