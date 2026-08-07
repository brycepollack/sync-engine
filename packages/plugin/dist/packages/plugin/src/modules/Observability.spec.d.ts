import { Progress } from "../types.spec.js";
import { Ref } from "../../../../node_modules/.bun/synthkernel@._synthkernel.tgz/node_modules/synthkernel/dist/reactive.spec.js";
import { Dispatch, On } from "./EventBus.spec.js";
import { Translate } from "./I18n.spec.js";
import { SyncTerminateReason, TaskInfo } from "./Sync.spec.js";
import { Events, Translations } from "../index.spec.js";
import { App, Command, IconName } from "obsidian";
//#region src/modules/Observability.d.ts
type SyncStage = 'none' | 'walkingRemote' | 'awaitingConfirmation' | 'executing' | 'completed' | 'completedNoop' | 'cancelled' | 'failed';
type AddRibbonIcon = (icon: IconName, title: string, callback: (evt: MouseEvent) => void) => HTMLElement;
declare class Observability {
  private readonly ctx;
  private lastSyncTime;
  private readonly sinceLastSyncText;
  private readonly syncStage;
  private readonly walkProgress;
  private readonly executionProgress;
  private readonly cleanupCallbacks;
  private readonly t;
  private readonly progressText;
  readonly settings: {
    noticeStatusOnMobile: boolean;
  };
  readonly i18n: {
    startSync: string;
    startNonInteractiveSync: string;
    stopSync: string;
    showProgress: string;
    exportLogsToFile: string;
    exportLogsFailed: string;
    idle: string;
  };
  constructor(ctx: {
    addStatusBarItem: () => HTMLElement;
    on: On<Events>;
    translate: Translate<Translations>;
    isIdle: Ref<boolean>;
    dispatch: Dispatch<Events>;
    requestSync: (trigger: string) => Promise<SyncTerminateReason>;
    showProgress: () => void;
    addCommand: (command: Command) => Command;
    addRibbonIcon: AddRibbonIcon;
    getLogs: () => string;
    app: App;
  });
  readonly start: () => void;
  private readonly setupCommands;
  private readonly exportLogs;
  readonly dispose: () => void;
  root: {
    executionProgress: Ref<Progress<TaskInfo>>;
    exportLogs: () => Promise<void>;
    syncStage: Ref<SyncStage>;
    walkProgress: Ref<Progress>;
  };
}
//#endregion
export { AddRibbonIcon, SyncStage, Observability as default };