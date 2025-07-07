import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const locales = ["", "en", "en-US", "fr", "de", "it", "es", "ar"];
export const localeNames: any = {
  en: "🇺🇸 English",
  fr: "🇫🇷 Français",
  de: "🇩🇪 Deutsch",
  it: "🇮🇹 Italiano",
  es: "🇪🇸 Español",
  ar: "🇸🇦 العربية"
};
export const defaultLocale = "en";

// If you wish to automatically redirect users to a URL that matches their browser's language setting,
// you can use the `getLocale` to get the browser's language.
export function getLocale(headers: any): string {
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

const dictionaries: any = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  fr: () => import("@/locales/fr.json").then((module) => module.default),
  de: () => import("@/locales/de.json").then((module) => module.default),
  it: () => import("@/locales/it.json").then((module) => module.default),
  es: () => import("@/locales/es.json").then((module) => module.default),
  ar: () => import("@/locales/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
    locale = "zh";
  }

  if (!Object.keys(dictionaries).includes(locale)) {
    locale = "en";
  }

  return dictionaries[locale]();
};
