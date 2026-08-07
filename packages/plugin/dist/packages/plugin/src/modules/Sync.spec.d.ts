import { GlobMatchRule, Progress, TogglableValue } from "../types.spec.js";
import { Ref } from "../../../../node_modules/.bun/synthkernel@._synthkernel.tgz/node_modules/synthkernel/dist/reactive.spec.js";
import { Dispatch, On } from "./EventBus.spec.js";
import { Translate } from "./I18n.spec.js";
import { BaseTask, ConflictResolver, TaskNames } from "../sync/tasks/interface.spec.js";
import RemoveLocal from "../sync/tasks/RemoveLocal.spec.js";
import { Decider } from "../sync/decision/interface.spec.js";
import "../sync/index.spec.js";
import { Events, Translations } from "../index.spec.js";
import { Infras, RemoteLister } from "./Registrar.spec.js";
//#region src/modules/Sync.d.ts
type SyncTerminateReason = {
  result: 'cancelled';
} | {
  result: 'completed';
} | {
  result: 'failed';
  error: string;
} | {
  result: 'noop';
};
type TaskInfo = {
  name: TaskNames;
  key: string;
  prettyName: string;
  isDir: boolean;
};
type FailedTaskInfo = TaskInfo & {
  error: string;
};
declare class Sync {
  private readonly ctx;
  dispatch: Dispatch<Events>;
  on: On<Events>;
  constructor(ctx: {
    dispatch: Dispatch<Events>;
    initializeSync: () => Infras;
    getDecider: () => Decider;
    on: On<Events>;
    translate: Translate<Translations>;
    listRemote: RemoteLister;
    getConflictResolver: () => ConflictResolver;
  });
  readonly events: {
    syncStarted: {
      isCancelled: Ref<boolean>;
      trigger: string;
    };
    remoteWalkProgress: Progress;
    syncTerminated: SyncTerminateReason;
    requestConfirmDelete: Array<RemoveLocal>;
    requestConfirmTasks: Array<BaseTask>;
    syncCanceled: undefined;
    taskCompleted: TaskInfo;
    taskFailed: FailedTaskInfo;
    executionStarted: Array<BaseTask>;
  };
  readonly settings: {
    maxFileSize: TogglableValue;
    exclusionRules: Array<GlobMatchRule>;
    inclusionRules: Array<GlobMatchRule>;
    confirmDeleteInAutoSync: boolean;
    confirmTasksInSync: boolean;
  };
  private readonly postProcess;
  private readonly confirmTasks;
  private readonly confirmDeletion;
  private readonly executeSync;
  private convertDeleteToUpload;
  root: {
    executeSync: (trigger: string) => Promise<{
      result: 'cancelled';
    } | {
      result: 'completed';
    } | {
      result: 'failed';
      error: string;
    } | {
      result: 'noop';
    }>;
  };
}
//#endregion
export { FailedTaskInfo, SyncTerminateReason, TaskInfo, Sync as default };