"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import drinoLogo from "../../asset/Drino_logo.png";
import img56 from "../../asset/56.jpg";
import img62 from "../../asset/62.jpg";
import img57 from "../../asset/57.jpg";
import img58 from "../../asset/58.jpg";
import img61 from "../../asset/61.jpg";
import img88 from "../../asset/88.jpg";
import img93 from "../../asset/93.jpg";
import img90 from "../../asset/90.jpg";
import img91 from "../../asset/91.jpg";
import img92 from "../../asset/92.jpg";
import img_tl_vi from "../../asset/timeline_vi.png";
import img_tl_en from "../../asset/timeline_en.png";
import { useLocale } from "./LocaleProvider";

export function HomeLandingPage() {
  const pathname = usePathname() || "/";
  const normalizedPathname = pathname.startsWith("/en") ? pathname.slice(3) || "/" : pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, localizedHref, locale, toggleLocale } = useLocale();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const viFeatureImages = [img56, img62, img57, img58, img61];
  const enFeatureImages = [img88, img93, img90, img91, img92];
  const featureImages = locale === "en" ? enFeatureImages : viFeatureImages;
  const timelineImage = locale === "en" ? img_tl_en : img_tl_vi;

  const featureTabsLocalized = (t.home.featureTabs || []).map((f: any, i: number) => ({
    ...f,
    image: f.image ? f.image : featureImages[i],
  }));
  const benefitsLocalized = t.home.benefits || [];
  const vehicleTypesLocalized = t.home.vehicleTypes || [];
  const platformsLocalized = t.home.platforms || [];
  const stepsLocalized = t.home.steps || [];

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
          {[[t.nav.pricing, "/pricing"], [t.nav.faq, "/faq"], [t.nav.contact, "/contact"]].map(([label, href]) => {
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
          })}
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
          <button type="button" aria-label="Đóng menu" onClick={() => setIsMobileMenuOpen(false)} className="absolute inset-0 bg-black/35" />
          <aside className="absolute right-0 top-0 h-full w-[82%] max-w-[320px] bg-white p-5 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[var(--foreground)]">Menu</p>
              <button type="button" onClick={() => setIsMobileMenuOpen(false)} aria-label="Đóng" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)]">✕</button>
            </div>
            <nav className="flex flex-col gap-2">
              {[[t.nav.pricing, "/pricing"], [t.nav.faq, "/faq"], [t.nav.contact, "/contact"]].map(([label, href]) => {
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
              })}
            </nav>
          </aside>
        </div>
      ) : null}

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-10 pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-12 lg:pt-20">
        <div className="flex flex-col justify-center">
          <div className="glass-panel inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm text-[var(--accent-strong)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            {t.home.description}
          </div>

          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            {t.home.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{t.home.description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href={localizedHref("/contact")} className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-950/20 transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]">{t.nav.contact}</Link>
            <Link href={localizedHref("/pricing")} className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:bg-white">{t.nav.pricing}</Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.henry0198.Drino&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play" className="inline-flex overflow-hidden shadow-lg transition hover:-translate-y-0.5 hover:opacity-95">
              <Image src="/google-play-badge.png" alt="Get it on Google Play" width={120} height={40} className="h-14 w-auto" />
            </a>

            <a href="https://apps.apple.com/app/your-app-id" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store" className="inline-flex overflow-hidden rounded-[1rem] shadow-lg transition hover:-translate-y-0.5 hover:opacity-95">
              <Image src="/app-store-badge.svg" alt="Download on the App Store" width={120} height={40} className="h-14 w-auto" />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <Image src={timelineImage} alt="Drino app screenshot" width={1400} height={900} className="w-full h-[360px] sm:h-[720px] object-contain rounded-[1.5rem]" priority />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(236,253,245,0.82))] px-6 pb-10 pt-10 lg:px-8 lg:pb-12">
        <div className="w-full">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">{t.home.sections?.features}</p>
          <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">{t.home.featuresSubtitle || t.home.description}</h2>
          <FeatureSlider featureTabs={featureTabsLocalized} />
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,247,237,0.92))] px-6 pb-10 pt-10 lg:px-8 lg:pb-12">
        <div className="grid gap-8 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">{t.home.sections?.whyChoose}</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">{t.home.whyChooseSubtitle || ""}</h2>
            <div className="mt-6 space-y-3">
              {benefitsLocalized.map(([title, text]: any, idx: number) => (
                <div key={idx} className="rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3">
                  <p className="font-semibold text-[var(--foreground)]">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">Phù hợp với nhiều loại xe</p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">Thiết kế dành cho mọi phương tiện bạn sử dụng hằng ngày.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
              {vehicleTypesLocalized.map((item: any, idx: number) => (
                <div key={idx} className="rounded-[1.5rem] border border-[var(--border)] bg-white/80 px-5 py-4 text-center">
                  <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[var(--foreground)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(241,245,249,0.95))] px-6 pb-10 pt-10 lg:px-8 lg:pb-12">
        <div className="">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">{t.home.sections?.platforms}</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">{t.home.platformsTitle || ""}</h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{t.home.platformsSubtitle || t.home.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {platformsLocalized.map(([platform, label]: any, idx: number) => (
                <div key={idx} className="glass-panel rounded-3xl p-4 text-center">
                  <p className="font-semibold text-[var(--foreground)]">{platform}</p>
                  <p className="mt-1 text-sm text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(240,253,244,0.9))] px-6 pb-10 pt-10 lg:px-8 lg:pb-12">
        <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">{t.home.sections?.howItWorks}</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">{t.home.howItWorksTitle || ""}</h2>
          </div>

          <div className="space-y-4">
            {stepsLocalized.map(([title, text]: any, index: number) => (
              <div key={index} className="glass-panel rounded-[2rem] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">0{index + 1}</p>
                <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[var(--foreground)]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

function FeatureSlider({ featureTabs }: { featureTabs: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const len = featureTabs.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % len);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [len]);

  return (
    <div className="relative mt-8 w-full">
      <div className="overflow-hidden rounded-[1.75rem]">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {featureTabs.map((feature, index) => (
            <div key={String(feature.label) + index} className="min-w-full px-0 py-2">
              <article className="glass-panel overflow-hidden rounded-[1.75rem]">
                <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-top lg:gap-8 lg:p-8">
                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">0{index + 1}</p>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">{feature.label}</h3>
                    <p className="text-sm leading-7 text-muted sm:text-base">{feature.text}</p>
                  </div>

                  <div>
                    <Image src={feature.image} width={900} height={600} alt={`${feature.label} screenshot`} className="w-full h-[320px] object-contain sm:h-[460px] rounded-[1.25rem]" />
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {featureTabs.map((_, i) => (
            <button key={i} onClick={() => setActiveIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`h-2 rounded-full transition-all duration-200 ${activeIndex === i ? "w-8 bg-[var(--accent)]" : "w-4 bg-[var(--border)]"}`} />
          ))}
        </div>

        <div className="flex gap-2">
          <button onClick={() => setActiveIndex((activeIndex - 1 + len) % len)} aria-label="Previous" className="rounded-full bg-white/80 p-2 shadow-sm hover:scale-105">‹</button>
          <button onClick={() => setActiveIndex((activeIndex + 1) % len)} aria-label="Next" className="rounded-full bg-white/80 p-2 shadow-sm hover:scale-105">›</button>
        </div>
      </div>
    </div>
  );
}
