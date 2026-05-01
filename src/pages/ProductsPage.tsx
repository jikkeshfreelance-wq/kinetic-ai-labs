import Nav from "@/components/propilo/Nav";
import Footer from "@/components/propilo/Footer";
import PageShell from "@/components/propilo/PageShell";
import Products from "@/components/propilo/Products";
import { useReveal } from "@/hooks/useReveal";

const ProductsPage = () => {
  useReveal();
  return (
    <>
      <Nav />
      <PageShell
        pageTitle="Products — Propilo"
        pageDescription="Helm, Lattice, and Forge — the internal tools we built to ship faster, now sharpened for partners."
        index="P"
        eyebrow="Products"
        title={<>The kit{" "}<span className="italic text-muted-foreground">behind the studio.</span></>}
        lede="Every Propilo product began as an internal weapon. We open them up only when they've proven themselves under fire."
      >
        <Products />
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
              [ R ] Roadmap
            </div>
            <ul className="md:col-span-9 reveal divide-y divide-border border-y border-border font-mono-tech text-sm">
              {[
                ["Q3 · 2026", "Helm — multi-tenant tenancy + audit log"],
                ["Q4 · 2026", "Lattice — sub-100ms hybrid retrieval"],
                ["Q1 · 2027", "Forge — public template registry"],
                ["Q2 · 2027", "New: Anvil — eval-driven CI for agents"],
              ].map(([when, what]) => (
                <li key={when} className="grid grid-cols-12 gap-4 py-5">
                  <span className="col-span-3 text-muted-foreground uppercase tracking-[0.25em] text-[10px]">{when}</span>
                  <span className="col-span-9 text-foreground">{what}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </PageShell>
      <Footer />
    </>
  );
};

export default ProductsPage;
