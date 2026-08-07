import { General } from "../test/e2e-utils.spec.js";
//#region src/types.d.ts
type MaybePromise<T> = Promise<T> | T;
type TogglableValue<T = number> = {
  enabled: boolean;
  value: T;
};
type FileStat = {
  isDir: false;
  key: string;
  mtime: number;
  size: number;
  uid: string;
};
type FolderStat = {
  isDir: true;
  key: string;
};
type Stat = FileStat | FolderStat;
type RecordStat = {
  isDir: false;
  local: string;
  remote: string;
} | {
  isDir: true;
};
type StatsMap = Map<string, Stat>;
type RecordStatsMap = Map<string, RecordStat>;
type GlobMatchRule = {
  expr: string;
  caseSensitive: boolean;
};
type Progress<T = string> = {
  total: number;
  completed: number;
  current?: T;
};
type Binary = Uint8Array<ArrayBuffer>;
//#endregion
export { Binary, FileStat, FolderStat, type General, GlobMatchRule, MaybePromise, Progress, RecordStat, RecordStatsMap, Stat, StatsMap, TogglableValue };