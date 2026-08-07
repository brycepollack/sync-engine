import { BaseTask } from "./interface.spec.js";
//#region src/sync/tasks/RemoveRecord.d.ts
declare class RemoveRecord extends BaseTask {
  exec(): Promise<void>;
}
//#endregion
export { RemoveRecord as default };