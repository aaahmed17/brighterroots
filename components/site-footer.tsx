export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-xs text-muted-foreground sm:text-sm">
          © {year} Brighter Roots Youth Services
        </p>
        <a
          href="mailto:info@brighterrootsyouthservices.ca"
          className="text-sm font-medium text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          info@brighterrootsyouthservices.ca
        </a>
      </div>
    </footer>
  );
}
