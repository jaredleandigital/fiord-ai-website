"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { PhoneCall, Brain, CalendarCheck, Globe } from "lucide-react";

const cards = [
  {
    icon: PhoneCall,
    title: "Answers Every Call",
    description:
      "24/7 coverage means no call goes unanswered — whether it's 2pm or 2am. Your AI receptionist picks up every time.",
  },
  {
    icon: Brain,
    title: "Knows Your Business",
    description:
      "Trained on your services, pricing, and FAQs. It doesn't just answer — it answers like someone who works for you.",
  },
  {
    icon: CalendarCheck,
    title: "Books & Captures",
    description:
      "Schedules appointments directly into your calendar and captures every lead's details — name, number, what they need.",
  },
  {
    icon: Globe,
    title: "Sounds Local",
    description:
      "Natural NZ and AU accents your callers trust. No robotic voice, no offshore call centre — just a professional local sound.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="section-glow py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fjord-accent">
            The Solution
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Your AI Receptionist,{" "}
            <span className="gradient-text">Always On</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-muted-foreground">
            Fiord AI handles your incoming calls like a trained team member —
            answering questions, booking jobs, and capturing leads around the
            clock.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => (
              <div
                key={i}
                data-stagger
                className="card-hover rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
