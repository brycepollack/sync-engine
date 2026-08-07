import { Fragment } from "../modules/I18n.spec.js";
import "../../../../index.spec.js";
import { App, Modal } from "obsidian";
//#region src/components/UnknownModuleModal.d.ts
type FileInfo = {
  path: string;
  size: string;
  mtime: string;
  ctime: string;
  fileName: string;
};
type UnknownModuleTranslations = {
  unknownModule: string;
  unknownModuleDescription: Fragment<FileInfo>;
  delete: string;
  configure: string;
};
//#endregion
export { UnknownModuleTranslations };