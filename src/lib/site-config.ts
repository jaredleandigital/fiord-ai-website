export const siteConfig = {
  name: "Fiord AI",
  tagline: "Never Miss Another Call",
  description:
    "AI-powered voice receptionist that answers, books, and captures leads 24/7 for NZ & AU small businesses.",
  url: "https://fiord.ai",
  contact: {
    email: "hello@fiord.ai",
    phone: "+64 274 553 832",
  },
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/fiord-ai",
    },
    {
      label: "Facebook",
      href: "https://web.facebook.com/profile.php?id=61588246516721",
    },
  ],
  nav: [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Industries", href: "#industries" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  industries: [
    "Trades",
    "Dental",
    "Real Estate",
    "Legal",
    "Veterinary",
    "Other",
  ],
} as const;
