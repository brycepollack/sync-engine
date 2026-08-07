import { Progress } from "../types.spec.js";
import { Ref } from "../../../../node_modules/.bun/synthkernel@._synthkernel.tgz/node_modules/synthkernel/dist/reactive.spec.js";
import { Dispatch, On } from "./EventBus.spec.js";
import { Translate } from "./I18n.spec.js";
import { BaseTask, TaskNames } from "../sync/tasks/interface.spec.js";
import RemoveLocal from "../sync/tasks/RemoveLocal.spec.js";
import "../sync/index.spec.js";
import { TaskInfo } from "./Sync.spec.js";
import { SyncStage } from "./Observability.spec.js";
import { Events, Translations } from "../index.spec.js";
import { App, Modal } from "obsidian";
//#region src/modules/ProgressModal.d.ts
type DeleteConfirmReturn = {
  delete: Array<RemoveLocal>;
  reupload: Array<RemoveLocal>;
};
declare class ProgressModal extends Modal {
  private readonly ctx;
  private readonly moduleCleanupCallbacks;
  private readonly t;
  private opening;
  private readonly modalCleanupCallbacks;
  private readonly dispatch;
  private description?;
  private detailContainer?;
  private controls?;
  constructor(ctx: {
    app: App;
    translate: Translate<Translations>;
    on: On<Events>;
    dispatch: Dispatch<Events>;
    syncStage: Ref<SyncStage>;
    walkProgress: Ref<Progress>;
    executionProgress: Ref<Progress<TaskInfo>>;
  });
  readonly events: {
    tasksConfirmed: Array<BaseTask>;
    deleteConfirmed: DeleteConfirmReturn;
  };
  readonly i18n: {
    syncProgress: string;
    completed: string;
    failedTasksDescription: string;
    confirmDeleteDescription: string;
    confirmTasksDescription: string;
    hide: string;
    confirm: string;
    cancel: string;
    done: string;
    stopSync: string;
  } & Record<TaskNames | SyncStage, string>;
  private readonly renderHideStop;
  private readonly renderConfirmCancel;
  private readonly renderDone;
  private readonly showDetails;
  private readonly hideDetails;
  onOpen(): void;
  root: {
    hideProgress: () => void;
    showProgress: () => void;
  };
  onClose(): void;
  dispose(): void;
}
//#endregion
export { DeleteConfirmReturn, ProgressModal as default };