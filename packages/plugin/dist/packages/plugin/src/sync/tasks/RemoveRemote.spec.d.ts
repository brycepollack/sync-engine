import { BaseTask } from "./interface.spec.js";
import { OptionsWithRemoteStat } from "../decision/interface.spec.js";
//#region src/sync/tasks/RemoveRemote.d.ts
declare class RemoveRemote extends BaseTask<OptionsWithRemoteStat> {
  exec(): Promise<void>;
}
//#endregion
export { RemoveRemote as default };