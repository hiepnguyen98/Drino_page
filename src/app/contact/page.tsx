import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell
      title="Liên hệ"
      description="Có thắc mắc, góp ý hoặc ý tưởng mới? Hãy gửi cho chúng tôi một lời nhắn."
    >
      <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
            Thông tin liên hệ
          </p>
          <div className="mt-6 space-y-4">
            {[
              ["Email", "drino.support@gmail.com"],
              ["Phạm vi phản hồi", "Trong 1 ngày làm việc"],
              ["Tốt nhất cho", "Đối tác, bản demo và hỗ trợ"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-[var(--border)] bg-white/80 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{label}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="glass-panel rounded-[2rem] p-6 sm:p-8" action="mailto:hello@drino.app" method="post" encType="text/plain">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
              <span>Tên</span>
              <input
                name="name"
                type="text"
                required
                placeholder="Tên của bạn"
                className="w-full rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[rgba(15,118,110,0.5)] focus:ring-4 focus:ring-[rgba(15,118,110,0.12)]"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
              <span>Địa chỉ email của bạn</span>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[rgba(15,118,110,0.5)] focus:ring-4 focus:ring-[rgba(15,118,110,0.12)]"
              />
            </label>
          </div>

          <label className="mt-4 block space-y-2 text-sm font-medium text-[var(--foreground)]">
            <span>Tin nhắn</span>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="có gì cần giúp đỡ?"
              className="w-full rounded-3xl border border-[var(--border)] bg-white/80 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[rgba(15,118,110,0.5)] focus:ring-4 focus:ring-[rgba(15,118,110,0.12)]"
            />
          </label>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Gửi mail tới <span className="font-semibold text-[var(--foreground)]">drino.support@gmail.com</span>
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-950/20 transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
            >
              Gửi trong email
            </button>
          </div>
        </form>
      </div>
    </SiteShell>
  );
}