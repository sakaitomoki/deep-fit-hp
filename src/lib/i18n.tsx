import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { en } from "./translations";

export type Lang = "ja" | "en";

const STORAGE_KEY = "deepfit-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue>({
  lang: "ja",
  setLang: () => {},
});

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "ja";
  // 1. Respect an explicit choice the visitor made before.
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ja") return stored;
  } catch {
    /* ignore */
  }
  // 2. Otherwise auto-detect from the browser's languages: Japanese speakers
  //    get Japanese, everyone else defaults to English.
  try {
    const langs =
      (navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language]) || [];
    const prefersJa = langs.some((l) => l && l.toLowerCase().startsWith("ja"));
    return prefersJa ? "ja" : "en";
  } catch {
    /* ignore */
  }
  return "ja";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ja");

  useEffect(() => {
    setLangState(getInitialLang());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/**
 * Translation helper.
 * Pass the Japanese source string. When the current language is English and a
 * translation exists in the dictionary, the English text is returned; otherwise
 * the original Japanese string is returned (graceful fallback).
 */
export function useT() {
  const { lang } = useLang();
  return (ja: string): string => {
    if (lang === "en") {
      const translated = en[ja];
      if (translated !== undefined) return translated;
    }
    return ja;
  };
}
