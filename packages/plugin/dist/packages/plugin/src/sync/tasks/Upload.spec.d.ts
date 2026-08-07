import { BaseTask } from "./interface.spec.js";
import { OptionsWithLocalFileStat } from "../decision/interface.spec.js";
//#region src/sync/tasks/Upload.d.ts
declare class Upload extends BaseTask<OptionsWithLocalFileStat> {
  exec(): Promise<void>;
}
//#endregion
export { Upload as default };