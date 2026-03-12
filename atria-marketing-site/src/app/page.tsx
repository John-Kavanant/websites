import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Script from "next/script";

import { CtaLink } from "@/components/site/cta-link";
import { HomeLifecycleRail } from "@/components/site/home-lifecycle-rail";
import { HomeProgramExplorer } from "@/components/site/home-program-explorer";
import { HomeProofMetrics } from "@/components/site/home-proof-metrics";
import { HomeTestimonialCarousel } from "@/components/site/home-testimonial-carousel";
import { Reveal } from "@/components/site/reveal";
import { RoiCalculator } from "@/components/site/roi-calculator";
import { SectionHeading } from "@/components/site/section-heading";
import {
  audienceSegments,
  competitorComparison,
  endToEndOffering,
  executionLevers,
  heroContent,
  onboardingSteps,
  positioningPillars,
  programs,
  proofStats,
  revenueImpactMessage,
  services,
  testimonials,
  trustSignals,
} from "@/content/siteContent";

export default function HomePage() {
  const renderComparisonValue = (value: boolean | string) => {
    if (typeof value === "string") {
      return value;
    }
    return value ? "Yes" : "No";
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Atria Health",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.atriahealth.com",
    description:
      "End-to-end support for RPM, RTM, CCM, and cardiac monitoring programs.",
    sameAs: [],
  };

  return (
    <div className="bg-grid">
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-20">
        <Reveal>
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
              Built for clinics, hospitals, and physicians
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
              {heroContent.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-600">{heroContent.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/contact" label={heroContent.ctaPrimary} />
              <CtaLink href="/programs" label={heroContent.ctaSecondary} variant="secondary" />
            </div>
            <div className="mt-10">
              <HomeProofMetrics metrics={proofStats} />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Out-of-box devices", "Dynamic patient workflows", "24/7 support", "RCM ready"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-cyan-200 bg-white/70 px-3 py-1 text-xs font-semibold text-cyan-900 backdrop-blur"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <SectionHeading
            eyebrow="End-to-End Ownership"
            title="One accountable partner across the full monitoring lifecycle"
            description="Atria integrates technology, operations, and reimbursement execution so your programs run as one coordinated system."
          />
        </Reveal>
        <div className="mt-10">
          <HomeLifecycleRail steps={endToEndOffering} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Audience"
            title="Designed for organizations delivering proactive care"
            description="Atria supports clinical and operational leaders who need growth, quality, and reliability at scale."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {audienceSegments.map((segment) => (
            <Reveal key={segment}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="font-medium text-slate-800">{segment}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Why Leaders Choose Atria"
            title="A complete model across outcomes, operations, revenue, and trust"
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {positioningPillars.map((pillar) => (
            <Reveal key={pillar.title}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Programs"
            title="Explore programs interactively"
            description="Switch between RPM, RTM, CCM, and Cardiac to see outcomes, workflows, and reimbursement pathways."
          />
        </Reveal>
        <div className="mt-10">
          <HomeProgramExplorer programs={programs} />
          <div className="mt-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              View full program education <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="White-glove operations layer behind every program"
            description="From care coordination to billing support, Atria handles the execution so your team can focus on care."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Reveal key={service.title}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Reimbursement and ROI"
            title="Grow revenue through operational excellence"
            description="Estimate financial potential and align your team around the execution levers that actually drive reimbursement performance."
          />
        </Reveal>
        <div className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50 p-5 text-sm text-cyan-900">
          {revenueImpactMessage}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {executionLevers.map((item) => (
            <Reveal key={item.title}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Reveal>
            <RoiCalculator />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Competitive Differentiation"
            title="Most vendors stop at software. Atria delivers full program execution."
            description="Typical software-only models leave operations and reimbursement work to your staff. Atria provides a complete operating model."
          />
        </Reveal>
        <Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <p className="text-sm font-semibold text-rose-900">Typical vendor journey</p>
              <ul className="mt-2 space-y-2 text-sm text-rose-900/90">
                <li>- Team buys platform but must build operations internally</li>
                <li>- Device coordination, support, and billing become staffing burden</li>
                <li>- Program consistency and reimbursement quality become hard to sustain</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-semibold text-emerald-900">Atria model</p>
              <ul className="mt-2 space-y-2 text-sm text-emerald-900/90">
                <li>- One connected model across platform, devices, logistics, and support</li>
                <li>- Care coordination and RCM workflows reduce internal complexity</li>
                <li>- Clinical and financial outcomes improve through consistent execution</li>
              </ul>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Capability</th>
                  <th className="px-4 py-3">Typical vendor</th>
                  <th className="px-4 py-3">Atria</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((row) => (
                  <tr key={row.category} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-900">{row.category}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {renderComparisonValue(row.typicalVendor)}
                    </td>
                    <td className="px-4 py-3 text-cyan-800">{renderComparisonValue(row.atria)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Trust and compliance confidence</h3>
              <ul className="mt-4 space-y-3">
                {trustSignals.map((signal) => (
                  <li key={signal} className="flex items-start gap-3 text-sm text-slate-700">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                    {signal}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <HomeTestimonialCarousel testimonials={testimonials} />
          </Reveal>
        </div>
        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
          <h3 className="text-xl font-semibold">Onboarding in 4 practical steps</h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {onboardingSteps.map((step) => (
              <li key={step} className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm text-slate-100">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                {step}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-8">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-r from-cyan-700 to-slate-900 p-10 text-white">
            <h2 className="text-3xl font-semibold tracking-tight">Ready to scale your monitoring programs?</h2>
            <p className="mt-3 max-w-2xl text-slate-100">
              Launch with a trusted team that combines clinical operations, patient support, and revenue execution.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CtaLink href="/contact" label="Book a Demo" variant="secondary" />
              <CtaLink href="/services" label="View Services" variant="secondary" />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
