import { BaseTask } from "./interface.spec.js";
import { OptionsWithLocalFolderStat } from "../decision/interface.spec.js";
//#region src/sync/tasks/CreateRemoteDir.d.ts
declare class CreateRemoteDir extends BaseTask<OptionsWithLocalFolderStat> {
  exec(): Promise<void>;
}
//#endregion
export { CreateRemoteDir as default };