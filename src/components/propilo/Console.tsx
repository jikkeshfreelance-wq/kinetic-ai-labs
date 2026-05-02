import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  company: z.string().trim().max(120, "Company name is too long").optional(),
  budget: z.string().trim().max(60).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (min 10 characters)")
    .max(1000, "Please keep it under 1000 characters"),
});

const BUDGETS = ["< $10k", "$10k – $25k", "$25k – $75k", "$75k+", "Not sure yet"];

const Console = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((iss) => {
        const key = iss.path[0] as string;
        if (key && !fieldErrors[key]) fieldErrors[key] = iss.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Simulated send. Wire to backend / email service when ready.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Thanks! We'll get back to you within 24 hours.");
  };

  if (submitted) {
    return (
      <section id="console" className="relative border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
          <div className="border border-border bg-background p-10 md:p-16 text-center max-w-2xl mx-auto reveal">
            <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              [ ✓ ] Message received
            </div>
            <h3 className="font-serif-display text-4xl md:text-5xl mt-6 leading-tight">
              Thanks, {form.name.split(" ")[0]}.{" "}
              <span className="italic text-muted-foreground">We&apos;ll be in touch.</span>
            </h3>
            <p className="mt-6 font-mono-tech text-sm text-muted-foreground">
              A real human will reply to{" "}
              <span className="text-foreground">{form.email}</span> within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="console" className="relative border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
            [ 04 ] Contact
          </div>
          <div className="md:col-span-9 reveal">
            <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Tell us about{" "}
              <span className="italic text-muted-foreground">your project.</span>
            </h2>
            <p className="mt-6 max-w-xl font-mono-tech text-sm text-muted-foreground leading-relaxed">
              Fill in a few details and we&apos;ll respond within 24 hours with next steps.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <form
            onSubmit={onSubmit}
            noValidate
            className="lg:col-span-8 reveal border border-border bg-background p-6 md:p-10 shadow-[var(--shadow-elevated)] grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Field label="Your name" error={errors.name}>
              <input
                type="text"
                value={form.name}
                onChange={set("name")}
                maxLength={100}
                placeholder="Jane Doe"
                className={inputCls(errors.name)}
              />
            </Field>

            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={set("email")}
                maxLength={255}
                placeholder="jane@company.com"
                className={inputCls(errors.email)}
              />
            </Field>

            <Field label="Company" error={errors.company} optional>
              <input
                type="text"
                value={form.company}
                onChange={set("company")}
                maxLength={120}
                placeholder="Company name"
                className={inputCls(errors.company)}
              />
            </Field>

            <Field label="Budget" error={errors.budget} optional>
              <select
                value={form.budget}
                onChange={set("budget")}
                className={inputCls(errors.budget)}
              >
                <option value="">Select a range</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </Field>

            <div className="md:col-span-2">
              <Field label="How can we help?" error={errors.message}>
                <textarea
                  value={form.message}
                  onChange={set("message")}
                  maxLength={1000}
                  rows={6}
                  placeholder="Briefly describe what you're trying to build or improve."
                  className={`${inputCls(errors.message)} resize-y min-h-[140px]`}
                />
                <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-right">
                  {form.message.length} / 1000
                </div>
              </Field>
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="font-mono-tech text-xs text-muted-foreground">
                We reply within 24 hours · No spam, ever.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="btn-liquid border border-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] disabled:opacity-50"
              >
                {submitting ? "Sending…" : "Send message →"}
              </button>
            </div>
          </form>

          {/* Sidebar: alt contact */}
          <aside className="lg:col-span-4 reveal flex flex-col gap-6">
            <ContactCard
              k="Email us"
              v="hello@propilo.studio"
              href="mailto:hello@propilo.studio"
            />
            <ContactCard k="Studio" v="Chennai, India" />
            <ContactCard k="Hours" v="Mon–Fri · GMT+5:30" />
            <div className="border border-border p-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                What happens next
              </div>
              <ol className="mt-4 space-y-3 font-mono-tech text-sm text-foreground">
                <li><span className="text-muted-foreground mr-2">01 —</span>We read your message.</li>
                <li><span className="text-muted-foreground mr-2">02 —</span>We reply within 24h.</li>
                <li><span className="text-muted-foreground mr-2">03 —</span>30-min discovery call.</li>
                <li><span className="text-muted-foreground mr-2">04 —</span>Scoped proposal in 5 days.</li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

const inputCls = (err?: string) =>
  `w-full bg-background border ${err ? "border-destructive" : "border-border"} px-4 py-3 font-mono-tech text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors`;

const Field = ({
  label, error, optional, children,
}: {
  label: string; error?: string; optional?: boolean; children: React.ReactNode;
}) => (
  <label className="block">
    <div className="flex items-baseline justify-between mb-2">
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </span>
      {optional && (
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
          optional
        </span>
      )}
    </div>
    {children}
    {error && (
      <div className="mt-2 font-mono-tech text-xs text-destructive">{error}</div>
    )}
  </label>
);

const ContactCard = ({ k, v, href }: { k: string; v: string; href?: string }) => {
  const inner = (
    <>
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{k}</div>
      <div className="font-serif-display text-2xl mt-2">{v}</div>
    </>
  );
  return href ? (
    <a href={href} className="border border-border p-6 block hover:bg-secondary/60 transition-colors">{inner}</a>
  ) : (
    <div className="border border-border p-6">{inner}</div>
  );
};

export default Console;
