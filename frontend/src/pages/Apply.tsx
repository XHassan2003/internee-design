import React from "react";
import { useMemo, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  Clock,
  MapPin,
  BadgeCheck,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { internships, getInternshipBySlug } from "@/data/internships";

const applySchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  country: z.string().trim().min(2, "Country is required").max(80),
  education: z.string().trim().min(2, "Education is required").max(120),
  experience: z.string().max(80).optional().or(z.literal("")),
  motivation: z
    .string()
    .trim()
    .min(10, "Tell us a bit more (min 10 chars)")
    .max(1000, "Keep it under 1000 characters"),
  agree: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms to apply" }),
  }),
});

type ApplyForm = z.infer<typeof applySchema>;
type FormErrors = Partial<Record<keyof ApplyForm, string>>;

const perks = [
  { icon: Award, text: "Verified industry certificate" },
  { icon: Users, text: "1:1 mentor support" },
  { icon: CheckCircle2, text: "Real, ship-ready projects" },
  { icon: Sparkles, text: "Career & interview prep" },
];

const Apply = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const internship = useMemo(() => getInternshipBySlug(slug), [slug]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    education: "",
    experience: "",
    motivation: "",
    agree: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!internship) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Internship not found</h1>
          <p className="mt-3 text-muted-foreground">
            The track you're looking for doesn't exist or may have been moved.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Button asChild>
              <Link to="/internships">Browse Internships</Link>
            </Button>
          </div>

          <div className="mt-14 max-w-3xl mx-auto grid sm:grid-cols-2 gap-3 text-left">
            {internships.slice(0, 6).map((i) => (
              <Link
                key={i.slug}
                to={`/apply/${i.slug}`}
                className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors"
              >
                <div className="text-sm font-semibold">{i.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{i.category} · {i.duration}</div>
              </Link>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const handleChange = (key: keyof typeof form, value: string | boolean) => {
    setForm((p) => ({ ...p, [key]: value }));
    if (errors[key as keyof ApplyForm]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = applySchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof ApplyForm;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      toast({
        title: "Please fix the highlighted fields",
        description: "A few fields need your attention before we can submit.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    // Simulated submission — wire to Lovable Cloud later for persistence.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Application received! 🎉",
        description: `We'll email ${result.data.email} within 48 hours.`,
      });
    }, 700);
  };

  const fillPct = Math.min(100, Math.round((internship.filled / internship.slots) * 100));
  const seatsLeft = internship.slots - internship.filled;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg border-b border-border">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} /> Back to internships
          </button>

          <div className="mt-6 grid lg:grid-cols-[1fr_auto] gap-6 items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="text-xs">{internship.category}</Badge>
                <Badge variant="outline" className="text-xs">{internship.level}</Badge>
                {internship.featured && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
                Apply for <span className="text-gradient">{internship.title}</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{internship.desc}</p>

              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl">
                <Meta icon={Clock} label="Duration" value={internship.duration} />
                <Meta icon={MapPin} label="Work Type" value={internship.type} />
                <Meta icon={Calendar} label="Start Date" value={internship.startDate} />
                <Meta icon={BadgeCheck} label="Compensation" value={internship.stipend} />
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5 card-elevated w-full lg:w-72">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-accent text-primary flex items-center justify-center">
                  <Briefcase size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Cohort filling</div>
                  <div className="text-xs text-muted-foreground">{seatsLeft} of {internship.slots} seats left</div>
                </div>
              </div>
              <div className="mt-4 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${fillPct}%` }} />
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {internship.skills.map((s) => (
                  <span key={s} className="text-[11px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-[1fr_320px] gap-10">
          {/* Form / Success */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-10 card-elevated"
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent text-primary flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="mt-5 text-2xl md:text-3xl font-bold tracking-tight">
                  Application submitted!
                </h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  Thank you for applying to <strong className="text-foreground">{internship.title}</strong>.
                  Our admissions team will review your application and email you within 48 hours.
                </p>
                <div className="mt-7 flex flex-wrap gap-3 justify-center">
                  <Button asChild>
                    <Link to="/internships">Explore More Tracks</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/">Back to Home</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Your Application</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                      All fields marked * are required.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Full Name *" error={errors.fullName}>
                    <Input
                      value={form.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      placeholder="Jane Doe"
                      maxLength={100}
                    />
                  </Field>
                  <Field label="Email *" error={errors.email}>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="jane@example.com"
                      maxLength={255}
                    />
                  </Field>
                  <Field label="Phone *" error={errors.phone}>
                    <Input
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+92 300 0000000"
                      maxLength={20}
                    />
                  </Field>
                  <Field label="Country *" error={errors.country}>
                    <Input
                      value={form.country}
                      onChange={(e) => handleChange("country", e.target.value)}
                      placeholder="Pakistan"
                      maxLength={80}
                    />
                  </Field>
                  <Field label="Education / Institute *" error={errors.education}>
                    <Input
                      value={form.education}
                      onChange={(e) => handleChange("education", e.target.value)}
                      placeholder="FAST NUCES"
                      maxLength={120}
                    />
                  </Field>
                  <Field label="Experience Level" error={errors.experience}>
                    <select
                      value={form.experience}
                      onChange={(e) => handleChange("experience", e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select level</option>
                      <option value="None">Just starting out</option>
                      <option value="Beginner">0 to 1 years</option>
                      <option value="Intermediate">1 to   3 years</option>
                      <option value="Advanced">3+ years</option>
                    </select>
                  </Field>
                </div>


                <Field
                  label={`Why do you want to join ${internship.title}? *`}
                  error={errors.motivation}
                >
                  <Textarea
                    value={form.motivation}
                    onChange={(e) => handleChange("motivation", e.target.value)}
                    placeholder="Tell us about your goals, what excites you about this track, and what you'd like to build."
                    rows={5}
                    maxLength={1000}
                  />
                  <div className="text-[11px] text-muted-foreground mt-1 text-right">
                    {form.motivation.length}/1000
                  </div>
                </Field>

                <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => handleChange("agree", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-border accent-primary"
                  />
                  <span>
                    I confirm the information above is accurate and I agree to the program{" "}
                    <span className="text-primary font-medium">terms & code of conduct</span>.
                  </span>
                </label>
                {errors.agree && (
                  <p className="text-sm font-medium text-destructive -mt-3">{errors.agree}</p>
                )}

                <div className="pt-2 flex flex-wrap gap-3">
                  <Button type="submit" size="lg" className="rounded-xl" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit Application"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="rounded-xl"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-24 h-fit">
            <div className="bg-card border border-border rounded-2xl p-6 card-elevated">
              <h3 className="font-semibold text-sm">What you'll get</h3>
              <ul className="mt-4 space-y-3">
                {perks.map((p) => (
                  <li key={p.text} className="flex items-start gap-3 text-sm">
                    <span className="w-8 h-8 rounded-lg bg-accent text-primary flex items-center justify-center shrink-0">
                      <p.icon size={16} />
                    </span>
                    <span className="text-foreground/90">{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/60 border border-border rounded-2xl p-6">
              <ShieldCheck className="text-primary" size={22} />
              <h4 className="mt-3 font-semibold text-sm">Your data is safe</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                We only use your details for admissions and program updates. No spam, ever.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 card-elevated">
              <h4 className="font-semibold text-sm">Other tracks</h4>
              <div className="mt-3 space-y-2">
                {internships
                  .filter((i) => i.slug !== internship.slug)
                  .slice(0, 4)
                  .map((i) => (
                    <Link
                      key={i.slug}
                      to={`/apply/${i.slug}`}
                      className="block text-sm py-2 px-3 rounded-lg hover:bg-accent transition-colors"
                    >
                      <div className="font-medium text-foreground">{i.title}</div>
                      <div className="text-xs text-muted-foreground">{i.duration} · {i.type}</div>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Meta = ({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) => (
  <div className="bg-card border border-border rounded-xl p-3 flex items-center gap-3">
    <span className="w-9 h-9 rounded-lg bg-accent text-primary flex items-center justify-center shrink-0">
      <Icon size={16} />
    </span>
    <div>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-sm font-semibold">{value}</div>
    </div>
  </div>
);

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <Label className="text-sm">{label}</Label>
    {children}
    {error && <p className="text-xs font-medium text-destructive">{error}</p>}
  </div>
);

export default Apply;

function toast({ 
  title, 
  description, 
  variant = "default" 
}: { 
  title: string; 
  description: string; 
  variant?: string; 
}) {
  // This is a placeholder implementation. In a real application, you would use:
  // - A toast library like 'react-hot-toast', 'sonner', or similar
  // - Or implement a custom toast context/provider
  console.log(`[${variant.toUpperCase()}] ${title}: ${description}`);
}

