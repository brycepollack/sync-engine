import { Context as Context$1, MergeSingleKey } from "../../../node_modules/.bun/synthkernel@._synthkernel.tgz/node_modules/synthkernel/dist/context.spec.js";
import EventBus from "./modules/EventBus.spec.js";
import I18n from "./modules/I18n.spec.js";
import Storage from "./modules/Storage.spec.js";
import Sync from "./modules/Sync.spec.js";
import Observability, { AddRibbonIcon } from "./modules/Observability.spec.js";
import Extensibility from "./modules/Extensibility.spec.js";
import Bootstrap from "./modules/Bootstrap.spec.js";
import ModulesModal from "./modules/ModulesModal.spec.js";
import ProgressModal from "./modules/ProgressModal.spec.js";
import Scheduler from "./modules/Scheduler.spec.js";
import Registrar from "./modules/Registrar.spec.js";
import { App, Command, EventRef, Plugin } from "obsidian";
//#region src/index.d.ts
declare const internalModules: readonly [typeof EventBus, typeof I18n, typeof Storage, typeof Extensibility, typeof Registrar, typeof Sync, typeof Observability, typeof Scheduler, typeof ProgressModal, typeof ModulesModal, typeof Bootstrap];
type InternalModules = typeof internalModules;
type MergeKeys = 'settings' | 'root' | 'events' | 'i18n';
type Context = Context$1<InternalModules, MergeKeys, {
  app: App;
  addCommand: (command: Command) => Command;
  registerEvent: (ref: EventRef) => void;
  addRibbonIcon: AddRibbonIcon;
  addStatusBarItem: () => HTMLElement;
  saveSettings: () => Promise<void>;
}>;
type Events = MergeSingleKey<InternalModules, 'events'>;
type Settings = MergeSingleKey<InternalModules, 'settings'>;
type Translations = MergeSingleKey<InternalModules, 'i18n'>;
//#endregion
export { Context, Events, MergeKeys, Settings, Translations };