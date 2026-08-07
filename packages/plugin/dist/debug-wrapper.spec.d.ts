import { Fs, WrappedFs } from "./packages/plugin/src/fs/interface.spec.js";
import "./packages/plugin/src/fs/index.spec.js";
//#region src/sdk/debug-wrapper.d.ts
declare function debugWrapper(original: Fs, log: (content: string) => void): WrappedFs;
//#endregion
export { debugWrapper as default };