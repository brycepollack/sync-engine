import "../types.spec.js";
import { Fragment } from "../modules/I18n.spec.js";
import "../modules/Extensibility.spec.js";
import { App, Modal } from "obsidian";
//#region src/components/ModuleEditorModal.d.ts
type ModuleEditorTranslations = {
  editModuleInformation: string;
  enable: string;
  name: string;
  namePlaceholder: string;
  description: string;
  descriptionPlaceholder: string;
  icon: string;
  iconDescription: Fragment;
  iconPlaceholder: string;
  updateSource: string;
  updateSourceDescription: string;
  updateSourcePlaceholder: string;
  invalidValue: string;
  integrityVerification: string;
  integrityVerificationDescription: Fragment;
  save: string;
  cancel: string;
};
//#endregion
export { ModuleEditorTranslations };