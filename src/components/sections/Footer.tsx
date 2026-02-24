import { siteConfig } from "@/lib/site-config";
import { Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <span className="text-lg font-bold gradient-text">
              {siteConfig.name}
            </span>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground sm:items-end">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="transition-colors hover:text-foreground"
            >
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="transition-colors hover:text-foreground"
            >
              {siteConfig.contact.phone}
            </a>
            <div className="flex gap-3">
              {siteConfig.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label === "LinkedIn" && <Linkedin className="h-5 w-5" />}
                  {item.label === "Facebook" && <Facebook className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
