"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Wrench,
  Stethoscope,
  Home,
  Scale,
  Heart,
} from "lucide-react";

const industries = [
  {
    icon: Wrench,
    title: "Trades",
    examples: "Plumbers, electricians, builders, HVAC",
    description:
      "You're on the tools all day. Your AI answers calls, captures job details, and books site visits while you work.",
  },
  {
    icon: Stethoscope,
    title: "Dental",
    examples: "Dental practices & clinics",
    description:
      "Handle appointment bookings, after-hours emergencies, and new patient enquiries without pulling staff off the desk.",
  },
  {
    icon: Home,
    title: "Real Estate",
    examples: "Agents & property managers",
    description:
      "Capture buyer enquiries instantly, schedule viewings, and never lose a hot lead to voicemail again.",
  },
  {
    icon: Scale,
    title: "Legal",
    examples: "Law firms & solicitors",
    description:
      "Professional intake for new client enquiries, appointment scheduling, and after-hours message handling.",
  },
  {
    icon: Heart,
    title: "Veterinary",
    examples: "Vet clinics & animal hospitals",
    description:
      "Triage after-hours calls, book appointments, and provide opening hours — while your team focuses on patients.",
  },
];

export function Industries() {
  return (
    <section id="industries" className="section-glow py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fjord-accent">
            Industries
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Built for Businesses{" "}
            <span className="gradient-text">Like Yours</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-muted-foreground">
            Whether you&apos;re on a job site, in surgery, or showing a
            property — Fiord AI makes sure every call gets answered.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <div
                key={i}
                data-stagger
                className="card-hover rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <industry.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold">{industry.title}</h3>
                <p className="mb-2 text-xs text-fjord-accent">
                  {industry.examples}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
