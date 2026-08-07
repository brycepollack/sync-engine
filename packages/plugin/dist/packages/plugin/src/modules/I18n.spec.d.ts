import { General } from "../../test/e2e-utils.spec.js";
import "../types.spec.js";
//#region src/modules/I18n.d.ts
type ObsidianLanguageCode = 'en' | 'af' | 'am' | 'ar' | 'az' | 'be' | 'bg' | 'bn' | 'ca' | 'cs' | 'da' | 'de' | 'dv' | 'el' | 'en-GB' | 'eo' | 'es' | 'eu' | 'fa' | 'fi' | 'fr' | 'ga' | 'gl' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'ka' | 'kh' | 'kn' | 'ko' | 'ky' | 'la' | 'lt' | 'lv' | 'ml' | 'ms' | 'nan-TW' | 'ne' | 'nl' | 'nn' | 'no' | 'oc' | 'or' | 'pl' | 'pt' | 'pt-BR' | 'ro' | 'ru' | 'sa' | 'si' | 'sk' | 'sl' | 'sq' | 'sr' | 'sv' | 'sw' | 'ta' | 'te' | 'th' | 'tl' | 'tr' | 'tt' | 'uk' | 'ur' | 'uz' | 'vi' | 'zh' | 'zh-TW';
type Primitive = string | number | boolean | null | undefined;
type Fragment<A = undefined> = (frag: DocumentFragment, args: A) => void;
type TranslationResource = Record<string, string | Fragment<General>>;
type InterpolationValues = Record<string, Primitive>;
type TranslateParams<R extends Fragment<General> | string> = R extends Fragment<infer A> ? ([undefined] extends [A] ? [] : [A]) : [] | [InterpolationValues];
type Translate<O extends TranslationResource> = <K extends keyof O>(key: K, ...args: TranslateParams<O[K]>) => O[K] extends string ? string : DocumentFragment;
declare class I18n {
  private readonly targetLangs;
  readonly i18n: {};
  private readonly registerI18n;
  private readonly translate;
  root: {
    registerI18n: (code: ObsidianLanguageCode, resource: TranslationResource) => void;
    translate: Translate<General>;
  };
}
//#endregion
export { Fragment, InterpolationValues, ObsidianLanguageCode, Translate, TranslationResource, I18n as default };