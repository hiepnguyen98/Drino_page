import { SiteShell } from "@/components/site-shell";

export default function EnglishContactPage() {
  return (
    <SiteShell title="Contact" description="Have a question, feedback, or a new idea? Send us a message.">
      <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">Contact info</p>
          <div className="mt-6 space-y-4">
            {[
              ["Email", "drino.support@gmail.com"],
              ["Response time", "Within 1 business day"],
              ["Best for", "Partnerships, demos, and support"],
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
              <span>Name</span>
              <input name="name" type="text" required placeholder="Your name" className="w-full rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[rgba(15,118,110,0.5)] focus:ring-4 focus:ring-[rgba(15,118,110,0.12)]" />
            </label>

            <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
              <span>Your email</span>
              <input name="email" type="email" required placeholder="you@example.com" className="w-full rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[rgba(15,118,110,0.5)] focus:ring-4 focus:ring-[rgba(15,118,110,0.12)]" />
            </label>
          </div>

          <label className="mt-4 block space-y-2 text-sm font-medium text-[var(--foreground)]">
            <span>Message</span>
            <textarea name="message" rows={6} required placeholder="How can we help?" className="w-full rounded-3xl border border-[var(--border)] bg-white/80 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[rgba(15,118,110,0.5)] focus:ring-4 focus:ring-[rgba(15,118,110,0.12)]" />
          </label>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Send mail to <span className="font-semibold text-[var(--foreground)]">drino.support@gmail.com</span>
            </p>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-950/20 transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]">
              Send email
            </button>
          </div>
        </form>
      </div>
    </SiteShell>
  );
}
