"use client";

import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Phone, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="hero-glow" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-center sm:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
          <Phone size={14} className="text-fjord-accent" />
          AI Voice Receptionist for NZ &amp; AU
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Never Miss
          <br />
          <span className="gradient-text">Another Call</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          AI voice receptionist that answers, books, and captures leads 24/7 —
          so you never lose business to a missed call again.
        </p>

        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="gap-2 text-base">
            <a href="#contact">
              Join the Waitlist
              <ArrowRight size={18} />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-fjord-accent sm:text-4xl">
              <AnimatedCounter target={85} suffix="%" />
            </span>
            <span className="mt-1 text-sm text-muted-foreground">
              of callers never call back
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-fjord-accent sm:text-4xl">
              $<AnimatedCounter target={126} suffix="K" />
            </span>
            <span className="mt-1 text-sm text-muted-foreground">
              avg revenue lost per year
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-fjord-accent sm:text-4xl">
              <AnimatedCounter target={48} suffix="hr" />
            </span>
            <span className="mt-1 text-sm text-muted-foreground">
              setup time — that&apos;s it
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
