import "../types.spec.js";
import "../modules/I18n.spec.js";
import "../index.spec.js";
import "../modules/Registrar.spec.js";
//#region src/settings/head.d.ts
type HeadSettingTranslations = {
  moduleAutoUpdate: string;
  moduleAutoUpdateDescription: string;
  moduleManagement: string;
  moduleManagementDescription: string;
  openPanel: string;
  backend: string;
  backendDescription: string;
  syncStrategy: string;
  syncStrategyDescription: string;
  checkConnectionFailed: string;
  checkConnectionSuccess: string;
  checkConnection: string;
  conflictResolveStrategy: string;
  conflictResolveStrategyDescription: string;
};
//#endregion
export { HeadSettingTranslations };