import { BaseTask } from "./interface.spec.js";
import { OptionsWithLocalStatAndOldKey } from "../decision/interface.spec.js";
//#region src/sync/tasks/MoveRemote.d.ts
declare class MoveRemote extends BaseTask<OptionsWithLocalStatAndOldKey> {
  exec(): Promise<void>;
}
//#endregion
export { MoveRemote as default };