import { Fragment } from "../modules/I18n.spec.js";
import { MigrationModalTranslations } from "../components/MigrationModal.spec.js";
import "../index.spec.js";
//#region src/settings/features.d.ts
type FeaturesSettingTranslations = {
  features: string;
  realtimeSyncFastMode: string;
  realtimeSyncFastModeDescription: string;
  realtimeSync: string;
  realtimeSyncDescription: string;
  realtimeSyncPlaceholder: string;
  startupSync: string;
  startupSyncDescription: string;
  startupSyncPlaceholder: string;
  scheduledSync: string;
  scheduledSyncDescription: string;
  scheduledSyncPlaceholder: string;
  asymmetricStorage: string;
  asymmetricStorageDescription: Fragment;
  asymmetricStorageMigration: Fragment<'enable' | 'disable'>;
  invalidValue: string;
} & MigrationModalTranslations;
//#endregion
export { FeaturesSettingTranslations };