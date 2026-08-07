import { Stat as Stat$1, TogglableValue } from "../types.spec.js";
import { BatchOptimizer } from "../fs/interface.spec.js";
import { DatabaseSync } from "../../../../node_modules/.bun/uni-kv@.._.._uni-kv.tgz/node_modules/uni-kv/dist/interface.spec.js";
import { Dispatch, On } from "./EventBus.spec.js";
import { ObsidianLanguageCode, Translate, TranslationResource } from "./I18n.spec.js";
import { FileTreeTranslations } from "../components/file-tree/index.spec.js";
import { HeadersEditorTranslations } from "../components/HeadersEditorModal.spec.js";
import { ModuleEditorTranslations } from "../components/ModuleEditorModal.spec.js";
import { UnknownModuleTranslations } from "../components/UnknownModuleModal.spec.js";
import { ControlsSettingTranslations } from "../settings/controls.spec.js";
import { DevelopmentSettingTranslations } from "../settings/development.spec.js";
import { FeaturesSettingTranslations } from "../settings/features.spec.js";
import { FilterSettingTranslations } from "../settings/filter.spec.js";
import { HeadSettingTranslations } from "../settings/head.spec.js";
import { MiscellaneousSettingTranslations } from "../settings/miscellaneous.spec.js";
import { Events, Translations } from "../index.spec.js";
import { ConflictResolverEntry, DeciderEntry, FsWrapperEntry, LocalRequestMiddlewareEntry, OptimizerEntry, RemoteFsEntry, RemoteListerEntry, RemoteRequestMiddlewareEntry, SettingEntry } from "./Registrar.spec.js";
import "../fs/index.spec.js";
import { App } from "obsidian";
//#region src/modules/Bootstrap.d.ts
type CustomHeaders = Array<{
  type: 'plaintext' | 'secret';
  value: string;
  key: string;
}>;
type ExistingMemoryDB = DatabaseSync<{
  localContext20000: Stat$1;
  remoteContext10000: Stat$1;
  remoteContext20000: Stat$1;
}, {
  localContext20000Marker: string;
  remoteContext10000Marker: string;
  remoteContext20000Marker: string;
}>;
declare class Bootstrap {
  private readonly ctx;
  private readonly cleanupCallbacks;
  private readonly memoryStates;
  private isCancelled?;
  private readonly localPool;
  private readonly remotePool;
  private localFs?;
  private remoteFs?;
  readonly i18n: {
    bidirectional: string;
    latestSurvive: string;
    keepLocal: string;
    keepRemote: string;
    renameAndKeepBoth: string;
    skip: string;
  } & ControlsSettingTranslations & DevelopmentSettingTranslations & FeaturesSettingTranslations & FilterSettingTranslations & HeadSettingTranslations & MiscellaneousSettingTranslations & HeadersEditorTranslations & UnknownModuleTranslations & ModuleEditorTranslations & FileTreeTranslations;
  readonly settings: {
    maxMemoryConsumption: TogglableValue;
    maxRequestConcurrency: TogglableValue;
    minRequestInterval: TogglableValue;
    realtimeSyncFastMode: boolean;
    asymmetricStorage: boolean;
    customHeaders: CustomHeaders;
  };
  constructor(ctx: {
    app: App;
    registerI18n: (code: ObsidianLanguageCode, resource: TranslationResource) => void;
    on: On<Events>;
    dispatch: Dispatch<Events>;
    memoryDB: ExistingMemoryDB;
    registerDecider: (id: string, entry: DeciderEntry) => void;
    registerLocalFsWrapper: (entry: FsWrapperEntry) => void;
    registerRemoteFs: (id: string, entry: RemoteFsEntry) => void;
    registerRemoteFsWrapper: (entry: FsWrapperEntry) => void;
    translate: Translate<Translations>;
    optimizeLocal: BatchOptimizer;
    optimizeRemote: BatchOptimizer;
    registerLocalOptimizer: (optimizer: OptimizerEntry) => void;
    registerRemoteOptimizer: (optimizer: OptimizerEntry) => void;
    registerRemoteLister: (entry: RemoteListerEntry) => () => boolean;
    registerSetting: (entry: SettingEntry) => () => boolean;
    registerConflictResolver: (id: string, entry: ConflictResolverEntry) => void;
    registerRemoteRequestMiddleware: (entry: RemoteRequestMiddlewareEntry) => void;
    registerLocalRequestMiddleware: (entry: LocalRequestMiddlewareEntry) => void;
  });
  readonly start: () => void;
  readonly dispose: () => void;
}
//#endregion
export { CustomHeaders, ExistingMemoryDB, Bootstrap as default };