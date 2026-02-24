import { siteConfig } from "@/lib/site-config";

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

          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:items-end">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="transition-colors hover:text-foreground"
            >
              {siteConfig.contact.email}
            </a>
            <span>{siteConfig.contact.phone}</span>
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
