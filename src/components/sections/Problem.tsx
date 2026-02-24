"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { PhoneOff, PhoneForwarded, DollarSign } from "lucide-react";

const stats = [
  {
    icon: PhoneOff,
    stat: "85%",
    text: "of callers who don't get through will never call back",
    subtext: "They move on. Permanently.",
  },
  {
    icon: PhoneForwarded,
    stat: "57%",
    text: "call your competitor instead",
    subtext: "Your missed call is their new customer.",
  },
  {
    icon: DollarSign,
    stat: "$126K",
    text: "average revenue lost per year from missed calls",
    subtext: "For a small business, that's the difference between thriving and surviving.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="section-glow py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fjord-accent">
            The Problem
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Every Missed Call Is a{" "}
            <span className="gradient-text">Lost Customer</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-muted-foreground">
            While you&apos;re on a job, in a meeting, or closed for the day —
            your phone keeps ringing. And every unanswered call costs you.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((item, i) => (
              <div
                key={i}
                data-stagger
                className="card-hover rounded-xl border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="mb-2 text-4xl font-bold text-fjord-accent">
                  {item.stat}
                </p>
                <p className="mb-2 font-medium text-foreground">{item.text}</p>
                <p className="text-sm text-muted-foreground">{item.subtext}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
