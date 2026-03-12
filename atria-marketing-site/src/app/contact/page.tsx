import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpen, CalendarClock, Download, PhoneCall, ShieldCheck } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { caseStudies, faqs, resourceDownloads } from "@/content/siteContent";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Book Demo"
          title="Talk to Atria about your monitoring strategy"
          description="Share your goals and we will map the best launch plan for RPM, RTM, CCM, and cardiac services."
        />
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-cyan-800 p-8 text-white shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-semibold">A practical conversation, not a sales script</h2>
              <p className="mt-3 max-w-3xl text-sm text-slate-100">
                We review your staffing reality, target patient mix, and reimbursement goals to define a practical launch path.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full border border-cyan-300/60 bg-cyan-400/10 px-3 py-1 text-cyan-100">
                  24/7 support model
                </span>
                <span className="rounded-full border border-cyan-300/60 bg-cyan-400/10 px-3 py-1 text-cyan-100">
                  Cardiac + chronic pathways
                </span>
                <span className="rounded-full border border-cyan-300/60 bg-cyan-400/10 px-3 py-1 text-cyan-100">
                  Billing-ready workflows
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-600 bg-slate-800/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">What happens next</p>
              <ol className="mt-3 space-y-2 text-sm text-slate-100">
                <li>
                  <span className="font-semibold text-cyan-300">1.</span> Submit your request and priorities.
                </li>
                <li>
                  <span className="font-semibold text-cyan-300">2.</span> We schedule a strategy call with the right team.
                </li>
                <li>
                  <span className="font-semibold text-cyan-300">3.</span> You receive a rollout blueprint and next-step plan.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div id="contact-form-section" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Tell us what you are planning</h2>
            <p className="mt-2 text-sm text-slate-600">
              Share your goals and constraints so we can tailor recommendations to your practice model.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-700" />
                HIPAA-conscious intake
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                <BadgeCheck className="h-3.5 w-3.5 text-cyan-700" />
                No spam follow-ups
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                <CalendarClock className="h-3.5 w-3.5 text-cyan-700" />
                Typical response in 1 business day
              </span>
            </div>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <aside className="space-y-4 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
            <h2 className="text-xl font-semibold">Direct access</h2>
            <div className="space-y-2 text-sm text-slate-100">
              <p className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-cyan-300" />
                Phone: +1 732-941-7219
              </p>
              <p>Email: info@atria.healthcare</p>
              <p>Office: Washington, DC metro area (remote-first support team)</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4 text-sm text-slate-100">
              <p className="font-semibold text-cyan-300">Service window</p>
              <p className="mt-1">Mon-Fri, 9:00 AM to 6:00 PM ET for scheduled consultations.</p>
              <p className="mt-2 text-slate-300">
                Typical first response within one business day. Faster coordination available for urgent onboarding needs.
              </p>
            </div>
            <p className="text-xs text-slate-300">
              Best for urgent onboarding questions: mention your target go-live timeline in the form.
            </p>
          </aside>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold text-slate-900">Frequently asked questions</h2>
            <Link
              href="/programs"
              className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 transition hover:text-cyan-800"
            >
              Explore all programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                open={index === 0}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer font-semibold text-slate-900">{item.question}</summary>
                <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-slate-900">Implementation resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {caseStudies.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-700">
                  <BookOpen className="h-3.5 w-3.5" />
                  Case study
                  {index === 0 ? (
                    <span className="rounded-full border border-cyan-200 bg-cyan-50 px-2 py-0.5 text-[10px] font-semibold">
                      Recommended first read
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-2 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.outcome}</p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 transition hover:text-cyan-800"
                >
                  Read summary <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {resourceDownloads.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-100">{item.detail}</p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-500 px-4 py-2 text-sm font-semibold transition hover:border-cyan-300"
                >
                  <Download className="h-4 w-4" />
                  Request by email
                </button>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">Ready for a tailored rollout blueprint?</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-200">
            We can map your programs, staffing model, and reimbursement strategy into a practical implementation plan.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact-form-section"
              className="inline-flex items-center gap-2 rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300"
            >
              Book demo now <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/reimbursement-roi"
              className="inline-flex rounded-full border border-slate-600 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300"
            >
              Review reimbursement planning
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
