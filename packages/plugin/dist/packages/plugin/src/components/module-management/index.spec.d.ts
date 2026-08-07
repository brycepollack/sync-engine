import "../../modules/I18n.spec.js";
import "../../modules/Extensibility.spec.js";
import { App } from "obsidian";
//#region src/components/module-management/index.d.ts
type ModuleManagementTranslations = {
  disableModule: string;
  disabled: string;
  downloadModule: string;
  enableModule: string;
  enabled: string;
  installed: string;
  loadingModules: string;
  noInstalledModulesFound: string;
  noMatchingModulesFound: string;
  noModulesAvailable: string;
  notInstalled: string;
  updateAvailable: string;
  updateModule: string;
  deleteModule: string;
  editModuleInformation: string;
};
//#endregion
export { ModuleManagementTranslations };