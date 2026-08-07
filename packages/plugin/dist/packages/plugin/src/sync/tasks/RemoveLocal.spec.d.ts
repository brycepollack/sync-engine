import { BaseTask } from "./interface.spec.js";
import { OptionsWithLocalStat } from "../decision/interface.spec.js";
//#region src/sync/tasks/RemoveLocal.d.ts
declare class RemoveLocal extends BaseTask<OptionsWithLocalStat> {
  exec(): Promise<void>;
}
//#endregion
export { RemoveLocal as default };