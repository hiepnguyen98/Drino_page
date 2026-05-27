"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import drinoLogo from "../../asset/Drino_logo.png";
import mainscreenshot from "../../asset/mainscreenshot.png";
import img56 from "../../asset/56.jpg";
import img62 from "../../asset/62.jpg";
import img57 from "../../asset/57.jpg";
import img58 from "../../asset/58.jpg";
import img61 from "../../asset/61.jpg";

const featureTabs = [
  {
    label: "Quản lý nhiều loại xe",
    text: "Thêm và theo dõi đồng thời ô tô, xe máy, xe tải trong một nơi duy nhất, dễ nhìn và dễ quản lý.",
    image: img56,
  },
  {
    label: "Nhắc bảo dưỡng thông minh",
    text: "Không bỏ lỡ lịch bảo dưỡng nhờ cảnh báo tự động theo ngày và số km còn lại.",
    image: img62,
  },
  {
    label: "Lưu lịch sử bảo dưỡng & chi phí",
    text: "Lưu trữ lịch sử bảo dưỡng và chi phí để theo dõi và phân tích dễ dàng.",
    image: img57,
  },
  {
    label: "Timeline & thống kê trực quan",
    text: "Xem lịch sử bảo dưỡng theo dạng timeline và nắm nhanh tổng chi phí, trung bình và các chỉ số quan trọng.",
    image: img58,
  },
  {
    label: "Đa ngôn ngữ & đồng bộ dữ liệu Premium",
    text: "Hỗ trợ tiếng Việt/English và backup dữ liệu an toàn cho người dùng Premium.",
    image: img61,
  }
];

const benefits = [
  ["Kiểm soát toàn diện", "Tổ chức tất cả thông tin phương tiện ở một nơi."],
  ["Tiết kiệm chi phí", "Hiểu rõ chi phí vận hành thực tế."],
  ["Nhắc nhở bảo dưỡng", "Tránh lỡ hạn bảo dưỡng với nhắc tự động."],
  ["Dữ liệu rõ ràng", "Ra quyết định dựa trên dữ liệu và báo cáo."],
];

const vehicleTypes = ["Ô tô", "Xe máy", "Xe tải", "Xe điện"];

const platforms = [
  ["Android", "Google Play"],
  ["iOS", "App Store"],
];

const steps = [
  ["Tải app", "Tải ứng dụng và bắt đầu ngay mà không cần đăng ký hoặc đăng nhập bằng tài khoản google hoặc apple."],
  ["Thêm phương tiện", "Đăng ký phương tiện trong chưa đầy một phút và giữ chúng có tổ chức."],
  ["Bắt đầu ghi nhận", "Ghi nhận nhiên liệu, chi phí và bảo dưỡng. Báo cáo sẽ hiển thị tự động."],
];

const testimonials = [
  {
    quote: "Tôi theo dõi bảo dưỡng và số km của xe máy. Tôi chưa bao giờ bỏ lỡ một dịch vụ nào.",
    author: "Marina F.",
    role: "Người đi xe máy",
  },
  {
    quote: "Giờ tôi đã biết chính xác lợi nhuận sau khi trừ xăng và các chi phí.",
    author: "Carlos M.",
    role: "Tài xế dịch vụ",
  },
];

export function HomeLandingPage() {
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
            <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold tracking-tight">
              Drino
            </p>
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
          {[
            ["Bảng giá", "/pricing"],
            ["Câu hỏi thường gặp", "/faq"],
            ["Liên hệ", "/contact"],
          ].map(([label, href]) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            const base = "rounded-full px-4 py-2 transition";
            const active = "bg-[var(--accent)] !text-white hover:!text-white";
            const inactive = "border border-transparent hover:border-[var(--border)] hover:bg-white/60 hover:text-[var(--foreground)]";

            return (
              <Link key={href} href={href} className={`${base} ${isActive ? active : inactive}`}>
                {label}
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
              {[
                ["Bảng giá", "/pricing"],
                ["Câu hỏi thường gặp", "/faq"],
                ["Liên hệ", "/contact"],
              ].map(([label, href]) => {
                const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
                const base = "rounded-xl px-4 py-3 text-sm font-medium transition";
                const active = "bg-[var(--accent)] !text-white";
                const inactive = "text-[var(--foreground)] hover:bg-slate-50";

                return (
                  <Link key={href} href={href} className={`${base} ${isActive ? active : inactive}`}>
                    {label}
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
            Theo dõi nhiên liệu, chi phí, bảo dưỡng và chi tiêu ở một nơi
          </div>

          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Ứng dụng quản lý phương tiện cá nhân thông minh
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Drino thích ứng với nhu cầu của bạn. Cho dù bạn quản lý một chiếc ô tô cá nhân hay nhiều phương tiện, bạn có thể bắt đầu trong vài phút.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-950/20 transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
            >
              Bắt đầu liên hệ
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Bảng giá
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.henry0198.Drino&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              className="inline-flex overflow-hidden shadow-lg transition hover:-translate-y-0.5 hover:opacity-95"
            >
              <Image
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                width={120}
                height={40}
                className="h-14 w-auto"
              />
            </a>

            <a
              href="https://apps.apple.com/app/your-app-id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
              className="inline-flex overflow-hidden rounded-[1rem] shadow-lg transition hover:-translate-y-0.5 hover:opacity-95"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="h-14 w-auto"
              />
            </a>
          </div>
          
        </div>

        <div className="flex justify-center">
          <div className="">
            <Image
              src={mainscreenshot}
              alt="Drino app screenshot"
              width={1400}
              height={900}
              className="w-full h-[360px] sm:h-[720px] object-contain rounded-[1.5rem]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(236,253,245,0.82))] px-6 pb-10 pt-10 lg:px-8 lg:pb-12">
        <div className="w-full">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
            Tính năng
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Mọi thứ bạn cần để quản lý phương tiện.
          </h2>
          <FeatureSlider />
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,247,237,0.92))] px-6 pb-10 pt-10 lg:px-8 lg:pb-12">
        <div className="grid gap-8 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              Tại sao chọn Drino
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Những lợi ích thiết thực mỗi ngày.
            </h2>
            <div className="mt-6 space-y-3">
              {benefits.map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3">
                  <p className="font-semibold text-[var(--foreground)]">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              Phù hợp với nhiều loại xe
            </p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Thiết kế dành cho mọi phương tiện bạn sử dụng hằng ngày.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
              {vehicleTypes.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-[var(--border)] bg-white/80 px-5 py-4 text-center">
                  <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[var(--foreground)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(241,245,249,0.95))] px-6 pb-10 pt-10 lg:px-8 lg:pb-12">
        <div className="">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              Đa nền tảng
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Sử dụng mọi lúc, mọi nơi.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Sử dụng trên điện thoại, máy tính bảng. Dữ liệu của bạn được đồng bộ tự động và dễ dàng truy cập.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {platforms.map(([platform, label]) => (
                <div key={platform} className="glass-panel rounded-3xl p-4 text-center">
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
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              Cách hoạt động
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Bắt đầu sử dụng Drino trong 3 bước đơn giản.
            </h2>
          </div>

          <div className="space-y-4">
            {steps.map(([title, text], index) => (
              <div key={title} className="glass-panel rounded-[2rem] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[var(--foreground)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <footer className="mx-auto mt-10 w-full rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(241,245,249,0.96))] px-6 py-10 text-center lg:px-8 lg:py-12">
        <div className="grid gap-8 justify-items-center lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:items-center">
          <div className="flex flex-col items-center">
            <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[var(--foreground)]">
              Drino
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted">
              Ứng dụng quản lý phương tiện cá nhân giúp theo dõi nhiên liệu, bảo dưỡng, chi phí và báo cáo ở một nơi.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.henry0198.Drino&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex overflow-hidden rounded-[1rem] shadow-sm transition hover:-translate-y-0.5 hover:opacity-95"
              >
                <Image src="/google-play-badge.png" alt="Google Play" width={120} height={40} className="h-12 w-auto" />
              </a>
              <a
                href="https://apps.apple.com/app/your-app-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex overflow-hidden rounded-[1rem] shadow-sm transition hover:-translate-y-0.5 hover:opacity-95"
              >
                <Image src="/app-store-badge.svg" alt="App Store" width={120} height={40} className="h-12 w-auto" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              Liên kết nhanh
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <Link href="/pricing" className="transition hover:text-[var(--foreground)]">Bảng giá</Link>
              <Link href="/faq" className="transition hover:text-[var(--foreground)]">Câu hỏi thường gặp</Link>
              <Link href="/contact" className="transition hover:text-[var(--foreground)]">Liên hệ</Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              Thông tin cần thiết
            </p>
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

function FeatureSlider() {
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
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {featureTabs.map((feature, index) => (
            <div key={feature.label} className="min-w-full px-0 py-2">
              <article className="glass-panel overflow-hidden rounded-[1.75rem]">
                <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-top lg:gap-8 lg:p-8">
                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                      0{index + 1}
                    </p>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
                      {feature.label}
                    </h3>
                    <p className="text-sm leading-7 text-muted sm:text-base">{feature.text}</p>
                  </div>

                  <div className="">
                    <Image
                      src={feature.image}
                      width={900}
                      height={600}
                      alt={`${feature.label} screenshot`}
                      className="w-full h-[320px] object-contain sm:h-[460px] rounded-[1.25rem]"
                    />
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
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-200 ${
                activeIndex === i ? "w-8 bg-[var(--accent)]" : "w-4 bg-[var(--border)]"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setActiveIndex((activeIndex - 1 + len) % len)}
            aria-label="Previous"
            className="rounded-full bg-white/80 p-2 shadow-sm hover:scale-105"
          >
            ‹
          </button>
          <button
            onClick={() => setActiveIndex((activeIndex + 1) % len)}
            aria-label="Next"
            className="rounded-full bg-white/80 p-2 shadow-sm hover:scale-105"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}