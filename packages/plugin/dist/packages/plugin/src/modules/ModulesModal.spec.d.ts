import { Translate } from "./I18n.spec.js";
import { AugmentedModuleMeta } from "./Extensibility.spec.js";
import { ModuleManagementTranslations } from "../components/module-management/index.spec.js";
import { SourceEditorTranslations } from "../components/SourceEditorModal.spec.js";
import { App, Modal } from "obsidian";
//#region src/modules/ModulesModal.d.ts
type ModulesModalTranslations = ModuleManagementTranslations & SourceEditorTranslations & {
  searchModules: string;
  editSources: string;
  moduleManagement: string;
  showInstalledOnly: string;
  configurations: string;
};
declare class ModulesModal extends Modal {
  private readonly ctx;
  private readonly t;
  private readonly modalCleanup;
  private sourceEditorModal?;
  private showInstalledOnly;
  constructor(ctx: {
    app: App;
    translate: Translate<ModulesModalTranslations>;
    saveSettings: () => Promise<void>;
    fetchSources: (manual?: boolean) => Promise<Array<AugmentedModuleMeta>>;
    discoveredModules: Map<string, AugmentedModuleMeta>;
    loadedModules: Map<string, unknown>;
    downloadModule: (meta: AugmentedModuleMeta) => Promise<void>;
    deleteModule: (id: string) => Promise<void>;
    loadModule: (meta: AugmentedModuleMeta, start?: boolean) => Promise<void>;
    unloadModule: (id: string) => void;
    enableModule: (id: string) => Promise<void>;
    disableModule: (id: string) => void;
    updateModuleMeta: (meta: AugmentedModuleMeta) => Promise<void>;
  });
  readonly i18n: ModulesModalTranslations;
  readonly settings: {
    moduleSources: Array<string>;
  };
  root: {
    closeModuleManagement: () => void;
    openModuleManagement: () => void;
  };
  onOpen(): void;
  onClose(): void;
  private readonly openSourceEditorModal;
  dispose(): void;
}
//#endregion
export { ModulesModal as default };