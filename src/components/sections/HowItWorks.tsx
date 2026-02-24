"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { MessageSquare, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    description:
      "We learn how your business handles calls — your services, common questions, booking flow, and what matters most to your customers.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "We Build Your AI",
    description:
      "We create a custom voice agent trained on your business. It knows your pricing, services, hours, and how you like calls handled.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Go Live in 48 Hours",
    description:
      "Your AI receptionist goes live with your existing number. No hardware, no disruption — just calls answered professionally from day one.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-glow py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fjord-accent">
            How It Works
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Live in <span className="gradient-text">48 Hours</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-muted-foreground">
            From first call to go-live, we handle everything. You focus on your
            business — we&apos;ll make sure no call goes unanswered.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((item, i) => (
              <div key={i} data-stagger className="relative text-center">
                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-primary/40 to-transparent md:block" />
                )}

                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-fjord-accent">
                  Step {item.step}
                </span>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
