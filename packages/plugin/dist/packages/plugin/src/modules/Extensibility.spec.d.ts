import { General } from "../../test/e2e-utils.spec.js";
import "../types.spec.js";
import { DatabaseAsync } from "../../../../node_modules/.bun/uni-kv@.._.._uni-kv.tgz/node_modules/uni-kv/dist/interface.spec.js";
import { Ref } from "../../../../node_modules/.bun/synthkernel@._synthkernel.tgz/node_modules/synthkernel/dist/reactive.spec.js";
import { Dispatch } from "./EventBus.spec.js";
import { Translate } from "./I18n.spec.js";
import "../../../../index.spec.js";
import { Context, Events, Translations } from "../index.spec.js";
import { App } from "obsidian";
//#region src/modules/Extensibility.d.ts
type ModuleInstance = {
  moduleSettings: object;
  dispose?: () => void;
  start?: () => void;
};
type ModuleCtor = new (ctx: object) => ModuleInstance;
type ModuleMeta = {
  id: string;
  name: string;
  version: string;
  description: string;
  main: string;
  icon?: string;
  minPluginVersion?: string;
  integrity: string;
};
type AugmentedModuleMeta = ModuleMeta & {
  enabled: boolean;
  source: string;
  icon: string;
};
declare class Extensibility {
  private readonly ctx;
  private readonly moduleDir;
  private readonly sourceCache;
  private readonly discoveredModules;
  private readonly loadedModules;
  private readonly moduleStore;
  private autoUpdateTimeout?;
  readonly settings: {
    moduleSources: Array<string>;
    moduleAutoUpdate: boolean;
    modules: Record<string, object>;
  };
  readonly i18n: {
    failedToLoadModule: string;
    failedToDownloadModule: string;
    failedToFetchSource: string;
  };
  readonly events: {
    moduleLoaded: string;
    moduleUnloaded: string;
  };
  constructor(ctx: {
    app: App;
    __addModule__: Context['__addModule__'];
    __getModule__: Context['__getModule__'];
    dispatch: Dispatch<Events>;
    translate: Translate<Translations>;
    allModules: Set<General>;
    isIdle: Ref<boolean>;
    saveSettings: () => Promise<void>;
    indexedDB: DatabaseAsync<Record<string, AugmentedModuleMeta>>;
  });
  readonly start: () => void;
  private readonly createOperationFactory;
  private readonly loadAllModules;
  private readonly loadModule;
  private readonly unloadModule;
  private readonly downloadModule;
  private readonly deleteModule;
  private readonly fetchSources;
  private readonly updateModules;
  private readonly updateModuleMeta;
  private readonly enableModule;
  private readonly disableModule;
  private readonly getModulePath;
  private readonly parseModulePath;
  readonly dispose: () => void;
  readonly root: {
    deleteModule: (id: string) => Promise<void>;
    disableModule: (id: string) => void;
    discoveredModules: Map<string, AugmentedModuleMeta>;
    downloadModule: (meta: AugmentedModuleMeta, waitIdle?: boolean) => Promise<void>;
    enableModule: (id: string) => Promise<void>;
    fetchSources: (manual?: boolean) => Promise<AugmentedModuleMeta[]>;
    loadAllModules: () => Promise<void>;
    loadModule: (meta: AugmentedModuleMeta, start?: boolean, module?: string) => Promise<void>;
    loadedModules: Map<string, ModuleCtor>;
    unloadModule: (id: string) => void;
    updateModuleMeta: (meta: AugmentedModuleMeta) => Promise<void>;
    updateModules: () => Promise<void>;
  };
}
//#endregion
export { AugmentedModuleMeta, ModuleCtor, ModuleInstance, ModuleMeta, Extensibility as default };