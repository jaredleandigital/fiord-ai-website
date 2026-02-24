"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "After-Hours",
    description: "AI answers when you can't — evenings, weekends, holidays.",
    features: [
      "AI answers after business hours",
      "Captures caller details & requirements",
      "Email & SMS notifications",
      "Basic FAQ handling",
      "Call transcripts & summaries",
      "Monthly reporting",
    ],
  },
  {
    name: "Overflow + Booking",
    description:
      "Handles the overflow during busy times and books directly into your calendar.",
    features: [
      "Everything in After-Hours",
      "Overflow during busy periods",
      "Direct calendar booking",
      "CRM integration",
      "Custom greeting & hold music",
      "Priority email support",
    ],
  },
  {
    name: "Full 24/7",
    description:
      "Complete AI reception — every call, every hour, every day.",
    features: [
      "Everything in Overflow + Booking",
      "24/7 AI reception",
      "Priority support",
      "Custom voice training",
      "Advanced analytics dashboard",
      "Dedicated account manager",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-glow py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fjord-accent">
            Plans
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Choose the Right Fit{" "}
            <span className="gradient-text">For Your Business</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-muted-foreground">
            Every plan is tailored to your business. Get in touch and
            we&apos;ll put together a package that works for you.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={i}
                data-stagger
                className="card-hover flex flex-col rounded-xl border border-border bg-card p-8"
              >
                <h3 className="mb-1 text-xl font-semibold">{plan.name}</h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-fjord-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild variant="outline" className="w-full gap-2">
                  <a href="#contact">
                    Enquire Now
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
