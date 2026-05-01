import { ReactNode, useEffect } from "react";

interface PageShellProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
  pageTitle: string;
  pageDescription: string;
}

const PageShell = ({ index, eyebrow, title, lede, children, pageTitle, pageDescription }: PageShellProps) => {
  useEffect(() => {
    document.title = pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", pageDescription);
    window.scrollTo(0, 0);
  }, [pageTitle, pageDescription]);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <section className="pt-36 pb-20 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-3">
              <div className="font-mono-tech text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                [ {index} ] {eyebrow}
              </div>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight">
                {title}
              </h1>
              {lede && (
                <p className="mt-10 max-w-2xl font-mono-tech text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground">// </span>
                  {lede}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      {children}
    </main>
  );
};

export default PageShell;
