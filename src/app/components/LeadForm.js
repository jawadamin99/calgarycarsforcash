"use client";

import { useState } from "react";

export default function LeadForm({
  buttonLabel = "Get My Free Cash Offer",
  title = "Get My Free Cash Offer",
  compact = false,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("pageUrl", window.location.href);

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!response.ok) throw new Error("Failed to send");

      setSubmitMessage("Thanks! Your request has been sent.");
      form.reset();
    } catch {
      setSubmitMessage("Something went wrong. Please call us or try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      id="quote"
      className="rounded-[1.75rem] bg-[#171a17] p-5 text-white shadow-2xl shadow-black/25"
      onSubmit={handleSubmit}
    >
      <div className={`rounded-[1.25rem] border border-white/12 ${compact ? "p-4 sm:p-5" : "p-5"}`}>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
          {title}
        </p>
        <div className={`${compact ? "mt-4 grid gap-3 sm:grid-cols-2" : "mt-5 grid gap-3"}`}>
          <label className="grid gap-1 text-sm font-bold">
            Name
            <input
              className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#171a17] outline-none placeholder:font-normal placeholder:text-[#8a8f8a] placeholder:opacity-60 ring-[#f4c542] focus:ring-2"
              name="name"
              required
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-1 text-sm font-bold">
            Phone
            <input
              className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#171a17] outline-none placeholder:font-normal placeholder:text-[#8a8f8a] placeholder:opacity-60 ring-[#f4c542] focus:ring-2"
              name="phone"
              required
              type="tel"
              placeholder="(587) 664-2401"
            />
          </label>
          <label className="grid gap-1 text-sm font-bold">
            Email
            <input
              className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#171a17] outline-none placeholder:font-normal placeholder:text-[#8a8f8a] placeholder:opacity-60 ring-[#f4c542] focus:ring-2"
              name="email"
              type="email"
              placeholder="you@email.com"
            />
          </label>
          <label className="grid gap-1 text-sm font-bold">
            City / Area
            <input
              className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#171a17] outline-none placeholder:font-normal placeholder:text-[#8a8f8a] placeholder:opacity-60 ring-[#f4c542] focus:ring-2"
              name="city"
              type="text"
              placeholder="Calgary, NW, Airdrie..."
            />
          </label>
          <label className="grid gap-1 text-sm font-bold">
            Make / Model / Year
            <input
              className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#171a17] outline-none placeholder:font-normal placeholder:text-[#8a8f8a] placeholder:opacity-60 ring-[#f4c542] focus:ring-2"
              name="make_model"
              placeholder="2008 Honda Civic"
            />
          </label>
          <label className="grid gap-1 text-sm font-bold">
            Message
            <textarea
              rows={compact ? 3 : 4}
              className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#171a17] outline-none placeholder:font-normal placeholder:text-[#8a8f8a] placeholder:opacity-60 ring-[#f4c542] focus:ring-2"
              name="message"
              placeholder="Tell us about the vehicle, condition, and pickup details"
            />
          </label>
        </div>
        <button
          className="mt-5 inline-flex w-full justify-center rounded-full bg-[#f4c542] px-5 py-3 text-sm font-black text-[#171a17] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : buttonLabel}
        </button>
        {submitMessage ? (
          <p className="mt-4 text-center text-sm font-bold text-white">
            {submitMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
