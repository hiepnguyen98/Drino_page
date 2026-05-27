import { SiteShell } from "@/components/site-shell";
const pricingPlans = [
  {
    name: "Miễn phí",
    price: "Miễn phí",
    period: "",
    description: "Bắt đầu miễn phí, không cần thiết lập phức tạp",
    highlights: ["Thống kê chi tiết", "Ghi chép chi phí", "Nhắc bảo dưỡng"],
    unhighlights: ["Không giới hạn phương tiện", "Không quảng cáo", "Sao lưu dữ liệu lên Cloud"],
  },
  {
    name: "Drino Pro",
    price: "39.000₫",
    period: "/ tháng (399.000₫/năm)",
    description: "Trải nghiệm đầy đủ, mở khóa tất cả tính năng và hỗ trợ ưu tiên",
    highlights: ["Thống kê chi tiết", "Ghi chép chi phí", "Nhắc bảo dưỡng", "Không giới hạn phương tiện", "Không quảng cáo", "Sao lưu dữ liệu lên Cloud"],
    unhighlights: [],
    featured: true,
  },
];

export default function PricingPage() {
  return (
    <SiteShell
      title="Bảng giá"
      description="Gói sử dụng đơn giản dành cho cá nhân và nhu cầu quản lý xe hằng ngày. Bắt đầu miễn phí và nâng cấp khi bạn cần thêm báo cáo và tính năng nâng cao."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-[2rem] p-6 shadow-[0_20px_70px_rgba(16,32,51,0.08)] ${
              plan.featured
                ? "bg-[linear-gradient(180deg,rgba(15,118,110,0.12),rgba(255,255,255,0.82))] ring-1 ring-[rgba(15,118,110,0.18)]"
                : "glass-panel"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[var(--foreground)]">
                  {plan.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{plan.description}</p>
              </div>
              {plan.featured ? (
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white">
                  Phổ biến
                </span>
              ) : null}
            </div>

            <div className="mt-6 flex items-end gap-2">
              <p className="font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold text-[var(--foreground)]">
                {plan.price}
              </p>
              <p className="pb-1 text-sm text-muted">{plan.period}</p>
            </div>

            <div className="mt-6 space-y-3">
              {plan.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 text-sm text-[var(--foreground)]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e9f7f4] text-[var(--accent-strong)]">
                    ✓
                  </span>
                  {highlight}
                </div>
              ))}

              {plan.unhighlights && plan.unhighlights.length > 0 &&
                plan.unhighlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-muted opacity-70">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff1f1] text-red-600">
                      ✕
                    </span>
                    <span className="text-sm text-muted opacity-70">{item}</span>
                  </div>
                ))}
            </div>

            <a
              href="/contact"
              className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                plan.featured
                  ? "bg-[var(--accent)] text-white shadow-lg shadow-teal-950/20 hover:bg-[var(--accent-strong)]"
                  : "border border-[var(--border)] bg-white/80 text-[var(--foreground)] hover:bg-white"
              }`}
            >
              Chọn gói {plan.name}
            </a>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}