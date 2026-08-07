import { BaseTask } from "./interface.spec.js";
import { OptionsWithBothStats } from "../decision/interface.spec.js";
//#region src/sync/tasks/AddRecord.d.ts
declare class AddRecord extends BaseTask<OptionsWithBothStats> {
  exec(): Promise<void>;
}
//#endregion
export { AddRecord as default };