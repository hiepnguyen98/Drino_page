"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "./LocaleProvider";
import drinoLogo from "../../asset/Drino_logo.png";

type SiteShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function SiteShell({ title, description, children }: SiteShellProps) {
  const pathname = usePathname() || "/";
  const normalizedPathname = pathname.startsWith("/en") ? pathname.slice(3) || "/" : pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const { t, localizedHref, locale, toggleLocale } = useLocale();

  return (
    <main className="relative isolate overflow-hidden bg-[linear-gradient(180deg,rgba(250,250,248,1),rgba(247,250,252,1))]">

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 pt-6 lg:px-8">
        <Link href={localizedHref("/")} className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-teal-950/20 ring-1 ring-black/5">
            <Image src={drinoLogo} alt="Drino logo" width={64} height={64} className="h-full w-full object-contain p-1.5" priority />
          </div>
          <div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold tracking-tight">{t.header.brandTitle}</p>
            <p className="text-xs text-muted">{t.header.brandSubtitle}</p>
          </div>
        </Link>

          <div className="flex items-center gap-2">
          <nav className="hidden flex-wrap items-center gap-2 text-sm font-medium text-muted lg:flex">
            {[[t.nav.pricing, "/pricing"], [t.nav.faq, "/faq"], [t.nav.contact, "/contact"]].map(
              ([label, href]) => {
                const hrefStr = String(href);
                const labelStr = String(label);
                const isActive = normalizedPathname === hrefStr || (hrefStr !== "/" && normalizedPathname.startsWith(hrefStr));
                const base = "rounded-full px-4 py-2 transition";
                const active = "bg-[var(--accent)] !text-white hover:!text-white";
                const inactive = "border border-transparent hover:border-[var(--border)] hover:bg-white/60 hover:text-[var(--foreground)]";
                return (
                  <Link key={hrefStr} href={localizedHref(hrefStr)} className={`${base} ${isActive ? active : inactive}`}>
                    {labelStr}
                  </Link>
                );
              }
            )}
          </nav>

          <button
            type="button"
            onClick={() => toggleLocale()}
            aria-label={locale === "en" ? "Switch to Vietnamese" : "Switch to English"}
            className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-white/80 px-3 py-1 text-sm font-medium"
          >
            {locale === "en" ? "EN" : "VI"}
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Mở menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white/80 text-[var(--foreground)] lg:hidden"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </header>

      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Đóng menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/35"
          />
          <aside className="absolute right-0 top-0 h-full w-[82%] max-w-[320px] bg-white p-5 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[var(--foreground)]">Menu</p>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Đóng"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)]"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {[[t.nav.pricing, "/pricing"], [t.nav.faq, "/faq"], [t.nav.contact, "/contact"]].map(
                ([label, href]) => {
                  const hrefStr = String(href);
                  const labelStr = String(label);
                  const isActive = normalizedPathname === hrefStr || (hrefStr !== "/" && normalizedPathname.startsWith(hrefStr));
                  const base = "rounded-xl px-4 py-3 text-sm font-medium transition";
                  const active = "bg-[var(--accent)] !text-white";
                  const inactive = "text-[var(--foreground)] hover:bg-slate-50";
                    return (
                    <Link key={hrefStr} href={localizedHref(hrefStr)} className={`${base} ${isActive ? active : inactive}`}>
                      {labelStr}
                    </Link>
                  );
                }
              )}
            </nav>
          </aside>
        </div>
      ) : null}

      <section className="mx-auto w-full max-w-5xl px-6 pb-14 pt-12 text-center lg:px-8 lg:pb-16 lg:pt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">Drino / {title}</p>
        <h1 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-8 text-base leading-7 text-muted sm:text-lg text-center">{description}</p>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 items-center">{children}</div>

      <footer className="mx-auto mt-10 w-full rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(241,245,249,0.96))] px-6 py-10 text-center lg:px-8 lg:py-12">
        <div className="grid gap-8 justify-items-center lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:items-center">
          <div className="flex flex-col items-center">
            <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[var(--foreground)]">Drino</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted">{t.home.description}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="https://play.google.com/store/apps/details?id=com.henry0198.Drino&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-flex overflow-hidden rounded-[1rem] shadow-sm transition hover:-translate-y-0.5 hover:opacity-95">
                <Image src="/google-play-badge.png" alt="Google Play" width={120} height={40} className="h-12 w-auto" />
              </a>
              <a href="https://apps.apple.com/app/your-app-id" target="_blank" rel="noopener noreferrer" className="inline-flex overflow-hidden rounded-[1rem] shadow-sm transition hover:-translate-y-0.5 hover:opacity-95">
                <Image src="/app-store-badge.svg" alt="App Store" width={120} height={40} className="h-12 w-auto" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">{t.nav.home}</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <Link href={localizedHref("/pricing")} className="transition hover:text-[var(--foreground)]">{t.nav.pricing}</Link>
              <Link href={localizedHref("/faq")} className="transition hover:text-[var(--foreground)]">{t.nav.faq}</Link>
              <Link href={localizedHref("/contact")} className="transition hover:text-[var(--foreground)]">{t.nav.contact}</Link>
              <Link href={localizedHref("/privacy")} className="transition hover:text-[var(--foreground)]">{t.nav.privacy}</Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">{t.footer.infoTitle}</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
              <p>{t.footer.email}</p>
              <p>{t.footer.supportHours}</p>
              <p>{t.footer.region}</p>
              <p>{t.footer.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
