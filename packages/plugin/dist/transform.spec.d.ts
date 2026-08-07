//#region src/sdk/transform.d.ts
type SyncEngineConfig = {
  deps?: {
    neverBundle?: true | string | RegExp | Array<string | RegExp> | ((id: string, parentId: string | undefined, isResolved: boolean) => boolean | null | undefined);
  };
};
declare function syncEngineTransform(): {
  name: string;
  renderChunk(code: string): {
    code: string;
  } | undefined;
  tsdownConfig(config: SyncEngineConfig): void;
};
//#endregion
export { syncEngineTransform as default };