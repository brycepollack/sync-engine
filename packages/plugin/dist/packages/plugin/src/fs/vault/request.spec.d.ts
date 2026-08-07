import { Binary } from "../../types.spec.js";
import { App, ListedFiles, Stat } from "obsidian";
//#region src/fs/vault/request.d.ts
type VaultRequestParam = {
  method: 'GET';
  key: string;
} | {
  method: 'GET_STREAM';
  key: string;
} | {
  method: 'PUT';
  key: string;
  value: Binary;
  headers?: {
    mtime?: number;
    ctime?: number;
  };
} | {
  method: 'APPEND';
  key: string;
  value: Binary;
  headers?: {
    mtime?: number;
    ctime?: number;
  };
} | {
  method: 'DELETE';
  key: string;
  headers?: {
    permanent?: boolean;
  };
} | {
  method: 'MOVE';
  key: string;
  headers: {
    destination: string;
  };
} | {
  method: 'MKDIR';
  key: string;
} | {
  method: 'EXISTS';
  key: string;
} | {
  method: 'STAT';
  key: string;
  headers?: {
    cached?: boolean;
  };
} | {
  method: 'LIST';
  key: string;
  headers?: {
    cached?: boolean;
  };
};
type VaultRequestResponseMap = {
  GET: Binary;
  GET_STREAM: ReadableStream<Binary>;
  PUT: void;
  APPEND: void;
  DELETE: void;
  MOVE: void;
  MKDIR: void;
  EXISTS: boolean;
  STAT: Stat;
  LIST: ListedFiles;
};
type VaultRequest = <T extends VaultRequestParam>(params: T) => Promise<VaultRequestResponseMap[T['method']]>;
//#endregion
export { VaultRequest };