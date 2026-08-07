import "../types.spec.js";
import "../modules/I18n.spec.js";
import { App, Modal } from "obsidian";
//#region src/components/FilterEditorModal.d.ts
type FilterEditorTranslations = {
  cancel: string;
  remove: string;
  save: string;
  add: string;
  inclusionRules: string;
  exclusionRules: string;
  inclusionRulesDescription: string;
  exclusionRulesDescription: string;
  filterPlaceholder: string;
};
//#endregion
export { FilterEditorTranslations };