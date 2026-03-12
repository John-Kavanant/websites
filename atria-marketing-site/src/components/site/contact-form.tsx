"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("fullName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const organization = String(data.get("organization") || "").trim();
    const message = String(data.get("message") || "").trim();
    const honeypot = String(data.get("website") || "").trim();
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "/api/form";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          site: "atria",
          name: fullName,
          email,
          phone,
          message: organization
            ? `Organization: ${organization}\n\n${message || "No additional message."}`
            : message || "No additional message.",
          honeypot,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      trackEvent("lead_submit", { source: "contact_page" });
      form.reset();
    } catch (_err) {
      setError("We could not submit your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
        <h3 className="text-lg font-semibold">Thank you. We will contact you shortly.</h3>
        <p className="mt-2 text-sm">
          Your request has been captured. Atria team members will follow up to schedule a demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span className="font-medium text-slate-700">Full name</span>
          <input
            required
            name="fullName"
            className="w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium text-slate-700">Work email</span>
          <input
            required
            type="email"
            name="email"
            className="w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span className="font-medium text-slate-700">Phone number</span>
          <input
            required
            name="phone"
            className="w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium text-slate-700">Organization</span>
          <input
            required
            name="organization"
            className="w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </label>
      </div>
      <label className="space-y-1 text-sm">
        <span className="font-medium text-slate-700">Message</span>
        <textarea
          rows={4}
          name="message"
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
        />
      </label>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <button
        type="submit"
        disabled={submitting}
        className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        {submitting ? "Submitting..." : "Submit inquiry"}
      </button>
    </form>
  );
}
