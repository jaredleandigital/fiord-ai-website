"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Clock,
  Mic,
  BookOpen,
  Zap,
  BarChart3,
  Phone,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Never miss a call — evenings, weekends, public holidays. Your AI receptionist is always ready.",
  },
  {
    icon: Mic,
    title: "NZ & AU Voices",
    description:
      "Natural local accents callers recognise and trust. No robotic monotone or unfamiliar dialects.",
  },
  {
    icon: BookOpen,
    title: "Knowledge-First",
    description:
      "Trained on your business — services, pricing, hours, FAQs. Not a generic script reader.",
  },
  {
    icon: Zap,
    title: "48-Hour Setup",
    description:
      "From sign-up to live calls in two days. We handle configuration, training, and number porting.",
  },
  {
    icon: BarChart3,
    title: "Call Logs & Analytics",
    description:
      "Full transcripts, call summaries, and insights dashboard. Know exactly what callers are asking.",
  },
  {
    icon: Phone,
    title: "Keep Your Number",
    description:
      "Works with your existing business number. No new digits to advertise — seamless transition.",
  },
];

export function Features() {
  return (
    <section id="features" className="section-glow py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fjord-accent">
            Features
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Everything You Need to{" "}
            <span className="gradient-text">Stop Missing Calls</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-muted-foreground">
            Built for small businesses that can&apos;t afford a full-time
            receptionist but can&apos;t afford to miss calls either.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                data-stagger
                className="card-hover rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1.5 font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
