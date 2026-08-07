import { MaybePromise } from "../../types.spec.js";
import { BaseTask, ConflictResolver } from "./interface.spec.js";
import { OptionsWithBothFileStats } from "../decision/interface.spec.js";
//#region src/sync/tasks/ResolveConflict.d.ts
declare class ResolveConflict extends BaseTask<OptionsWithBothFileStats & {
  resolver: ConflictResolver;
}> {
  exec: () => MaybePromise<void>;
}
//#endregion
export { ResolveConflict as default };