import { General } from "../../test/e2e-utils.spec.js";
import { Binary, MaybePromise, RecordStat, Stat as Stat$1 } from "../types.spec.js";
import { BatchOptimizer, Fs, ListReporter, RootFs } from "../fs/interface.spec.js";
import { StoreAsync } from "../../../../node_modules/.bun/uni-kv@.._.._uni-kv.tgz/node_modules/uni-kv/dist/interface.spec.js";
import { On } from "./EventBus.spec.js";
import { RecordStore } from "./Storage.spec.js";
import { ConflictResolver } from "../sync/tasks/interface.spec.js";
import { Decider } from "../sync/decision/interface.spec.js";
import "../sync/index.spec.js";
import { Events } from "../index.spec.js";
import { VaultRequest } from "../fs/vault/request.spec.js";
import "../fs/index.spec.js";
import { App, Plugin, RequestUrlParam } from "obsidian";
//#region src/modules/Registrar.d.ts
type RejectableWrapper<T> = (value: T) => T | undefined;
type OrderedWrapperEntry<T> = {
  priority: number;
  apply: RejectableWrapper<T>;
};
type RemoteRequestMiddlewareEntry = OrderedWrapperEntry<Request>;
type LocalRequestMiddlewareEntry = OrderedWrapperEntry<VaultRequest>;
type FsWrapperEntry = OrderedWrapperEntry<Fs>;
type CheckConnectionResult = {
  success: true;
} | {
  success: false;
  reason: string;
};
type RemoteFsEntry = {
  instantiate: (request: Request) => RootFs;
  prettyName: () => string;
  checkConnection: (request: Request) => MaybePromise<CheckConnectionResult>;
};
type DeciderEntry = {
  decider: Decider;
  prettyName: () => string;
};
type ConflictResolverEntry = {
  prettyName: () => string;
  resolver: ConflictResolver;
};
type GeneralFn = (...args: ReadonlyArray<General>) => unknown;
type RejectableApply<F extends GeneralFn> = (...input: Parameters<F>) => ReturnType<F> | undefined;
type OrderedApplyEntry<F extends GeneralFn> = {
  apply: RejectableApply<F>;
  priority: number;
};
type RemoteLister = (info: Infras & {
  trigger: string;
  reporter: ListReporter;
}) => MaybePromise<Array<Stat$1>>;
type RemoteListerEntry = OrderedApplyEntry<RemoteLister>;
type OptimizerEntry = OrderedApplyEntry<BatchOptimizer>;
type SettingEntry = {
  priority: number;
  apply: (el: HTMLElement) => void;
};
type RequestParam = Omit<RequestUrlParam, 'body'> & {
  body?: string | Binary;
};
type RequestResponse = {
  text: () => string;
  bytes: () => Binary;
  json: () => General;
  headers: Record<string, string>;
  status: number;
};
type Request = (params: RequestParam | string) => Promise<RequestResponse>;
type Infras = {
  localFs: Fs;
  remoteFs: Fs;
  record: RecordStore;
};
declare class Registrar {
  private readonly ctx;
  private settingTab?;
  private readonly cleanupCallbacks;
  private readonly localFsWrapperRegistry;
  private readonly remoteFsWrapperRegistry;
  private readonly localOptimizerRegistry;
  private readonly remoteOptimizerRegistry;
  private readonly remoteListerRegistry;
  private readonly settingRegistry;
  private readonly remoteRequestMiddlewareRegistry;
  private readonly localRequestMiddlewareRegistry;
  private readonly remoteFsRegistry;
  private readonly deciderRegistry;
  private readonly conflictResolverRegistry;
  readonly settings: {
    remoteFs: string;
    decider: string;
    conflictResolver: string;
  };
  constructor(ctx: {
    app: App;
    on: On<Events>;
    getRecordStore: (namespace?: string) => StoreAsync<RecordStat>;
  });
  private readonly getVaultRequest;
  private readonly createLocalFs;
  private readonly createRemoteFs;
  private readonly getRequest;
  private readonly getCheckConnection;
  private readonly getDecider;
  private readonly optimizeLocal;
  private readonly optimizeRemote;
  private readonly listRemote;
  private readonly getConflictResolver;
  private readonly getNamespace;
  private readonly initializeSync;
  private readonly addSettingTab;
  private readonly rerenderSettingTab;
  root: {
    addSettingTab: (plugin: Plugin) => void;
    conflictResolverRegistry: Map<string, ConflictResolverEntry>;
    createLocalFs: () => Fs;
    createRemoteFs: (remoteFs?: string) => RootFs;
    deciderRegistry: Map<string, DeciderEntry>;
    getCheckConnection: (remoteFs?: string) => () => MaybePromise<CheckConnectionResult>;
    getConflictResolver: () => ConflictResolver;
    getDecider: () => Decider;
    getNamespace: (localFs?: Fs, remoteFs?: Fs) => string;
    getRequest: () => Request;
    getVaultRequest: () => VaultRequest;
    initializeSync: () => Infras;
    listRemote: RemoteLister;
    optimizeLocal: BatchOptimizer;
    optimizeRemote: BatchOptimizer;
    registerConflictResolver: (key: string, entry: ConflictResolverEntry) => () => boolean;
    registerCss: (css: string) => () => void;
    registerDecider: (key: string, entry: DeciderEntry) => () => boolean;
    registerLocalFsWrapper: (entry: FsWrapperEntry) => () => boolean;
    registerLocalOptimizer: (entry: OptimizerEntry) => () => boolean;
    registerLocalRequestMiddleware: (entry: LocalRequestMiddlewareEntry) => () => boolean;
    registerRemoteFs: (key: string, entry: RemoteFsEntry) => () => boolean;
    registerRemoteFsWrapper: (entry: FsWrapperEntry) => () => boolean;
    registerRemoteLister: (entry: RemoteListerEntry) => () => boolean;
    registerRemoteOptimizer: (entry: OptimizerEntry) => () => boolean;
    registerRemoteRequestMiddleware: (entry: RemoteRequestMiddlewareEntry) => () => boolean;
    registerSetting: (entry: SettingEntry) => () => boolean;
    remoteFsRegistry: Map<string, RemoteFsEntry>;
    rerenderSettingTab: () => void | undefined;
  };
  readonly dispose: () => void;
}
//#endregion
export { CheckConnectionResult, ConflictResolverEntry, DeciderEntry, FsWrapperEntry, Infras, LocalRequestMiddlewareEntry, OptimizerEntry, RemoteFsEntry, RemoteLister, RemoteListerEntry, RemoteRequestMiddlewareEntry, Request, RequestParam, RequestResponse, SettingEntry, Registrar as default };