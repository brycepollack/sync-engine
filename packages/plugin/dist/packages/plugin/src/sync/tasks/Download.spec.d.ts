import { BaseTask } from "./interface.spec.js";
import { OptionsWithRemoteFileStat } from "../decision/interface.spec.js";
//#region src/sync/tasks/Download.d.ts
declare class Download extends BaseTask<OptionsWithRemoteFileStat> {
  exec(): Promise<void>;
}
//#endregion
export { Download as default };