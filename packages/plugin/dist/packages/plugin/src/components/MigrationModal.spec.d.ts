import { MaybePromise, Progress } from "../types.spec.js";
import { Dispatch, On } from "../modules/EventBus.spec.js";
import { Translate } from "../modules/I18n.spec.js";
import { SyncTerminateReason } from "../modules/Sync.spec.js";
import { ExistingMemoryDB } from "../modules/Bootstrap.spec.js";
import { Events } from "../index.spec.js";
import { Infras } from "../modules/Registrar.spec.js";
import { App, ToggleComponent } from "obsidian";
//#region src/components/MigrationModal.d.ts
type MigrationModalTranslations = {
  cancel: string;
  remoteMigration: string;
  migrationProcess: string;
  startMigration: string;
  migrationDescription: string;
  migrationPhase1Description: string;
  migrationPhase2Description: string;
  migrationPhase3Description: string;
  toggleWithoutMigration: string;
  migrationFailed: string;
  completed: string;
  hide: string;
  done: string;
};
type MigrationEvents = {
  migrationProgress: Progress;
  migrationFailed: string;
};
type MigrationContext = {
  app: App;
  on: On<MigrationEvents>;
  dispatch: Dispatch<MigrationEvents & Events>;
  translate: Translate<MigrationModalTranslations>;
  requestSync: (trigger: string) => Promise<SyncTerminateReason>;
  initializeSync: () => Infras;
  memoryDB: ExistingMemoryDB;
};
declare function setNeedMigration(ctx: MigrationContext, { toggle, needMigration, content, apply }: {
  toggle: ToggleComponent;
  needMigration?: (value: boolean) => MaybePromise<boolean>;
  content: (value: boolean) => string | DocumentFragment;
  apply: (value: boolean) => MaybePromise<void>;
}): void;
//#endregion
export { MigrationModalTranslations, setNeedMigration as default };