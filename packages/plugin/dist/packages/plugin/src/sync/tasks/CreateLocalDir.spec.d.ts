import { BaseTask } from "./interface.spec.js";
import { OptionsWithRemoteFolderStat } from "../decision/interface.spec.js";
//#region src/sync/tasks/CreateLocalDir.d.ts
declare class CreateLocalDir extends BaseTask<OptionsWithRemoteFolderStat> {
  exec(): Promise<void>;
}
//#endregion
export { CreateLocalDir as default };