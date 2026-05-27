"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import drinoLogo from "../../asset/Drino_logo.png";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Bảng giá", href: "/pricing" },
  { label: "Câu hỏi thường gặp", href: "/faq" },
  { label: "Liên hệ", href: "/contact" },
];

type SiteShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function SiteShell({ title, description, children }: SiteShellProps) {
  const pathname = usePathname() || "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <main className="relative isolate overflow-hidden bg-[linear-gradient(180deg,rgba(250,250,248,1),rgba(247,250,252,1))]">

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 pt-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-teal-950/20 ring-1 ring-black/5">
            <Image src={drinoLogo} alt="Drino logo" width={64} height={64} className="h-full w-full object-contain p-1.5" priority />
          </div>
          <div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold tracking-tight">Drino</p>
            <p className="text-xs text-muted">Quản lý phương tiện thật đơn giản</p>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Mở menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white/80 text-[var(--foreground)] lg:hidden"
        >
          <span className="text-xl">☰</span>
        </button>

        <nav className="hidden flex-wrap items-center gap-2 text-sm font-medium text-muted lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const base = "rounded-full px-4 py-2 transition";
            const active = "bg-[var(--accent)] !text-white hover:!text-white";
            const inactive = "border border-transparent hover:border-[var(--border)] hover:bg-white/60 hover:text-[var(--foreground)]";

            return (
              <Link key={item.href} href={item.href} className={`${base} ${isActive ? active : inactive}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
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
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                const base = "rounded-xl px-4 py-3 text-sm font-medium transition";
                const active = "bg-[var(--accent)] !text-white";
                const inactive = "text-[var(--foreground)] hover:bg-slate-50";

                return (
                  <Link key={item.href} href={item.href} className={`${base} ${isActive ? active : inactive}`}>
                    {item.label}
                  </Link>
                );
              })}
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
            <p className="mt-3 max-w-md text-sm leading-7 text-muted">Ứng dụng quản lý phương tiện cá nhân giúp theo dõi nhiên liệu, bảo dưỡng, chi phí và báo cáo ở một nơi.</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">Liên kết nhanh</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <Link href="/pricing" className="transition hover:text-[var(--foreground)]">Bảng giá</Link>
              <Link href="/faq" className="transition hover:text-[var(--foreground)]">Câu hỏi thường gặp</Link>
              <Link href="/contact" className="transition hover:text-[var(--foreground)]">Liên hệ</Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">Thông tin cần thiết</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
              <p>Email: drino.support@gmail.com</p>
              <p>Giờ hỗ trợ: 8:00 - 18:00</p>
              <p>Khu vực: Việt Nam</p>
              <p>© 2026 Drino. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
