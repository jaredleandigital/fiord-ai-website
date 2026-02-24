"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { toast } from "sonner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  businessName: z.string().min(1, "Business name is required"),
  industry: z.string().min(1, "Please select an industry"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const submit = useMutation(api.contacts.submit);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    const parsed = formSchema.safeParse(data);
    if (!parsed.success) {
      toast.error("Please check the form fields.");
      return;
    }

    try {
      await submit({
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || undefined,
        businessName: parsed.data.businessName,
        industry: parsed.data.industry,
        message: parsed.data.message || undefined,
      });
      toast.success("Thanks! We'll be in touch within 24 hours.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="section-glow py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <ScrollReveal className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fjord-accent">
            Get Started
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Join the <span className="gradient-text">Waitlist</span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-muted-foreground">
            We&apos;re onboarding businesses now. Leave your details and
            we&apos;ll reach out within 24 hours to discuss how Fiord AI can
            work for you.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name", { required: "Name is required" })}
                  className="mt-1.5"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@business.co.nz"
                  {...register("email", { required: "Email is required" })}
                  className="mt-1.5"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+64 21 000 0000"
                  {...register("phone")}
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  placeholder="Your business"
                  {...register("businessName", {
                    required: "Business name is required",
                  })}
                  className="mt-1.5"
                />
                {errors.businessName && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.businessName.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="industry">Industry *</Label>
                <select
                  id="industry"
                  {...register("industry", {
                    required: "Please select an industry",
                  })}
                  className="mt-1.5 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="" className="bg-card">
                    Select your industry
                  </option>
                  {siteConfig.industries.map((ind) => (
                    <option key={ind} value={ind} className="bg-card">
                      {ind}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.industry.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your business and what you're looking for..."
                  rows={4}
                  {...register("message")}
                  className="mt-1.5"
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="mt-6 w-full gap-2"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  Join the Waitlist
                  <Send size={16} />
                </>
              )}
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
