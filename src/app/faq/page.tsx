import { SiteShell } from "@/components/site-shell";

const faqItems = [
  {
    question: "Drino có miễn phí không?",
    answer:
      "Có. Bạn có thể bắt đầu miễn phí với đầy đủ các tính năng cơ bản để theo dõi chi phí, nhiên liệu và lịch bảo dưỡng xe cá nhân.",
  },
  {
    question: "Tôi có thể quản lý nhiều xe không?",
    answer:
      "Có. Drino cho phép bạn quản lý nhiều phương tiện trong cùng một tài khoản và chuyển đổi giữa chúng dễ dàng.",
  },
  {
    question: "Drino hỗ trợ loại phương tiện nào?",
    answer:
      "Drino hỗ trợ ô tô, xe máy, xe điện và nhiều loại phương tiện cá nhân khác. Bạn có thể thêm bất kỳ loại phương tiện nào bạn muốn theo dõi.",
  },
  {
    question: "Dữ liệu có được đồng bộ giữa các thiết bị không?",
    answer:
      "Có nếu bạn đăng ký Drino Pro. Drino đảm bảo dữ liệu của bạn được đồng bộ giữa các thiết bị, giúp bạn truy cập thông tin mọi lúc, mọi nơi.",
  },
  {
    question: "Drino có nhắc lịch bảo dưỡng không?",
    answer:
      "Có. Drino sẽ nhắc bạn các mốc bảo dưỡng quan trọng như thay dầu, kiểm tra định kỳ và các lịch bảo trì khác. Bạn có thể tùy chỉnh lịch nhắc và nhận thông báo đúng lúc.",
  },
];

export default function FaqPage() {
  return (
    <SiteShell
      title="Câu hỏi thường gặp"
      description="Những câu hỏi phổ biến được giải đáp sẵn để người dùng có thể nhanh chóng hiểu về sản phẩm trước khi liên hệ."
    >
      <div className="mx-auto max-w-3xl space-y-4">
        {faqItems.map((item) => (
          <details key={item.question} className="glass-panel rounded-3xl p-5" open={item.question === faqItems[0].question}>
            <summary className="cursor-pointer list-none font-semibold text-[var(--foreground)]">
              {item.question}
            </summary>
            <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </SiteShell>
  );
}