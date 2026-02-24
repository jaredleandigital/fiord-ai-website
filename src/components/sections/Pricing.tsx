"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "After-Hours",
    price: "$1,500",
    period: "/mo",
    description: "AI answers when you can't — evenings, weekends, holidays.",
    features: [
      "AI answers after business hours",
      "Captures caller details & requirements",
      "Email & SMS notifications",
      "Basic FAQ handling",
      "Call transcripts & summaries",
      "Monthly reporting",
    ],
    highlight: false,
  },
  {
    name: "Overflow + Booking",
    price: "$2,000",
    period: "/mo",
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
    highlight: true,
  },
  {
    name: "Full 24/7",
    price: "$3,000",
    period: "/mo",
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
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-glow py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fjord-accent">
            Pricing
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-muted-foreground">
            No per-minute charges. No hidden fees. Just a flat monthly rate so
            you always know what you&apos;re paying.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={i}
                data-stagger
                className={`card-hover relative flex flex-col rounded-xl border p-8 ${
                  plan.highlight
                    ? "border-primary bg-card shadow-lg shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                {plan.highlight && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                <h3 className="mb-1 text-xl font-semibold">{plan.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                  <span className="ml-1 text-xs text-muted-foreground">
                    + GST
                  </span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-fjord-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={plan.highlight ? "default" : "outline"}
                  className="w-full"
                >
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
