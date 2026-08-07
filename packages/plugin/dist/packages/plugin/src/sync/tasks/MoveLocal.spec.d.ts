import { BaseTask } from "./interface.spec.js";
import { OptionsWithRemoteStatAndOldKey } from "../decision/interface.spec.js";
//#region src/sync/tasks/MoveLocal.d.ts
declare class MoveLocal extends BaseTask<OptionsWithRemoteStatAndOldKey> {
  exec(): Promise<void>;
}
//#endregion
export { MoveLocal as default };