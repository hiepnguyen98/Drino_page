"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import vi from "../locales/vi";
import en from "../locales/en";

type Locale = "vi" | "en";

type LocaleContextValue = {
  locale: Locale;
  t: any;
  toggleLocale: () => void;
  localizedHref: (path: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const initial: Locale = pathname.startsWith("/en") ? "en" : "vi";
  const [locale, setLocale] = useState<Locale>(initial);

  useEffect(() => {
    const p = pathname;
    setLocale(p.startsWith("/en") ? "en" : "vi");
  }, [pathname]);

  const t = useMemo(() => (locale === "en" ? en : vi), [locale]);

  const localizedHref = (path: string) => {
    if (path === "/") {
      return locale === "en" ? "/en" : "/";
    }

    if (!path.startsWith("/")) {
      return locale === "en" ? `/en/${path}` : `/${path}`;
    }

    return locale === "en" ? `/en${path}` : path;
  };

  const toggleLocale = () => {
    const p = pathname;
    if (locale === "vi") {
      // go to /en + pathname (avoid double /)
      const target = p === "/" ? "/en" : "/en" + p;
      router.push(target);
      setLocale("en");
    } else {
      // remove /en prefix
      const target = p === "/en" ? "/" : p.replace(/^\/en/, "");
      router.push(target || "/");
      setLocale("vi");
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, t, toggleLocale, localizedHref }}>{children}</LocaleContext.Provider>
  );
}
