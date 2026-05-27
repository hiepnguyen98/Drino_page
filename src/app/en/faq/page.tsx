import { SiteShell } from "@/components/site-shell";

const faqItems = [
  {
    question: "Is Drino free?",
    answer: "Yes. You can start for free with the core features to track costs, fuel, and maintenance for a personal vehicle.",
  },
  {
    question: "Can I manage multiple vehicles?",
    answer: "Yes. Drino lets you manage multiple vehicles in a single account and switch between them easily.",
  },
  {
    question: "Which vehicle types does Drino support?",
    answer: "Drino supports cars, motorbikes, EVs, and many other personal vehicles. You can add any type you want to track.",
  },
  {
    question: "Is data synced across devices?",
    answer: "Yes, if you subscribe to Drino Pro. Your data is synced across devices so you can access it anytime, anywhere.",
  },
  {
    question: "Does Drino send maintenance reminders?",
    answer: "Yes. Drino can remind you about important service milestones like oil changes and periodic checks. You can customize the reminders and get notified on time.",
  },
];

export default function EnglishFaqPage() {
  return (
    <SiteShell
      title="Frequently Asked Questions"
      description="Common questions answered in advance so users can quickly understand the product before reaching out."
    >
      <div className="mx-auto max-w-3xl space-y-4">
        {faqItems.map((item) => (
          <details key={item.question} className="glass-panel rounded-3xl p-5" open={item.question === faqItems[0].question}>
            <summary className="cursor-pointer list-none font-semibold text-[var(--foreground)]">{item.question}</summary>
            <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </SiteShell>
  );
}
