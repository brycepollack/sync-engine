import { General } from "../../test/e2e-utils.spec.js";
import { RecordStat } from "../types.spec.js";
import { DatabaseAsync, GetResult, StoreAsync, StoreOperations } from "../../../../node_modules/.bun/uni-kv@.._.._uni-kv.tgz/node_modules/uni-kv/dist/interface.spec.js";
//#region src/modules/Storage.d.ts
type RecordStore = StoreAsync<RecordStat>;
declare class Storage {
  private readonly ctx;
  private readonly memoryDB;
  private readonly indexedDB;
  constructor(ctx: {
    getNamespace: () => string;
  });
  private readonly getRecordStore;
  private readonly deleteRecordStore;
  private readonly clearRecordStores;
  private readonly recordStoreExists;
  readonly root: {
    clearRecordStores: () => Promise<void>;
    deleteRecordStore: (namespace?: string) => Promise<void>;
    getRecordStore: (namespace?: string) => {
      get(key: string): Promise<RecordStat | undefined>;
      set(key: string, value: RecordStat): Promise<void>;
      delete(key: string): Promise<void>;
      clear(): Promise<void>;
      keys(): Promise<string[]>;
      values(): Promise<RecordStat[]>;
      entries(): Promise<[string, RecordStat][]>;
      batch(operations: StoreOperations<RecordStat>[]): Promise<GetResult<RecordStat>[]>;
    };
    indexedDB: DatabaseAsync<General, General>;
    memoryDB: {
      getStore<K extends string | number | symbol>(name: K): {
        get(key: string): any;
        set(key: string, value: any): void;
        delete(key: string): void;
        clear(): void;
        keys(): string[];
        values(): any[];
        entries(): [string, any][];
        batch(operations: StoreOperations<any>[]): GetResult<any>[];
      };
      getStoreNames(): string[];
      deleteStore(name: string): void;
      clearStores(): void;
      getMeta<T extends string | number | symbol>(key: T): any;
      setMeta<T extends string | number | symbol>(key: T, value: any): void;
      dispose(): void;
    };
    recordStoreExists: (namespace?: string) => Promise<boolean>;
  };
  readonly dispose: () => void;
}
//#endregion
export { RecordStore, Storage as default };