import { Fs, WrappedFs } from "./packages/plugin/src/fs/interface.spec.js";
import "./packages/plugin/src/fs/index.spec.js";
//#region src/sdk/prefix.d.ts
declare function prefixWrapper(original: Fs, prefix: string): WrappedFs;
//#endregion
export { prefixWrapper as default };