import { GlobMatchRule, TogglableValue } from "../types.spec.js";
import { Ref } from "../../../../node_modules/.bun/synthkernel@._synthkernel.tgz/node_modules/synthkernel/dist/reactive.spec.js";
import { SyncTerminateReason } from "./Sync.spec.js";
import { SyncStage } from "./Observability.spec.js";
import { App, EventRef } from "obsidian";
//#region src/modules/Scheduler.d.ts
declare class Scheduler {
  private readonly ctx;
  private readonly pendingRequests;
  private isScheduling;
  private realtimeSyncTimer?;
  private scheduledSyncTimer?;
  private startupSyncTimer?;
  constructor(ctx: {
    syncStage: Ref<SyncStage>;
    executeSync: (trigger: string) => Promise<SyncTerminateReason>;
    registerEvent: (ref: EventRef) => void;
    app: App;
    isIdle: Ref<boolean>;
  });
  settings: {
    startupSync: TogglableValue;
    scheduledSync: TogglableValue;
    realtimeSync: TogglableValue;
    exclusionRules: Array<GlobMatchRule>;
    inclusionRules: Array<GlobMatchRule>;
  };
  private readonly requestSync;
  start: () => void;
  dispose: () => void;
  private readonly startScheduledSync;
  private readonly stopScheduledSync;
  private readonly onChange;
  private readonly scheduleFlush;
  private readonly flush;
  root: {
    requestSync: (trigger: string) => Promise<SyncTerminateReason>;
    startScheduledSync: () => void;
    stopScheduledSync: () => void;
  };
}
//#endregion
export { Scheduler as default };