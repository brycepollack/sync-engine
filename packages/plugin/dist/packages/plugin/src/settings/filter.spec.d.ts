import "../modules/I18n.spec.js";
import { FilterEditorTranslations } from "../components/FilterEditorModal.spec.js";
import "../index.spec.js";
import { App } from "obsidian";
//#region src/settings/filter.d.ts
type FilterSettingTranslations = {
  filterRules: string;
  edit: string;
} & FilterEditorTranslations;
//#endregion
export { FilterSettingTranslations };