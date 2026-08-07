import { General } from "../../test/e2e-utils.spec.js";
import "../types.spec.js";
import { Ref } from "../../../../node_modules/.bun/synthkernel@._synthkernel.tgz/node_modules/synthkernel/dist/reactive.spec.js";
//#region src/modules/EventBus.d.ts
type Dispatch<O extends object> = <K extends keyof O>(...[key, payload]: undefined extends O[K] ? [K] : [K, O[K]]) => void;
type On<O extends object> = <K extends keyof O>(key: K, callback: (payload: O[K]) => void) => () => void;
declare class EventBus {
  readonly events: {
    logSync: string;
    logGeneral: string;
    errorSync: string;
    errorGeneral: string;
  };
  private readonly cleanupCallbacks;
  private readonly isIdle;
  private readonly syncLogs;
  private readonly generalLogs;
  constructor();
  private readonly getThisSync;
  private readonly putSyncLog;
  private readonly putGeneralLog;
  private readonly subscribers;
  private readonly on;
  private readonly dispatch;
  private readonly getLogs;
  readonly dispose: () => void;
  readonly root: {
    dispatch: Dispatch<General>;
    getLogs: () => string;
    isIdle: Ref<boolean>;
    on: On<General>;
  };
}
//#endregion
export { Dispatch, On, EventBus as default };