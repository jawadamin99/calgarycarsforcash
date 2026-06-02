"use client";

import { useState } from "react";

export default function LeadForm({
  buttonLabel = "Get My Free Cash Offer",
  title = "Get My Free Cash Offer",
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
      className="lift-card rounded-[1.75rem] bg-[#171a17] p-5 text-white shadow-2xl shadow-black/25"
      data-animate="fade-left"
      onSubmit={handleSubmit}
    >
      <div className="rounded-[1.25rem] border border-white/12 p-5">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c542]">
          {title}
        </p>
        <div className="mt-5 grid gap-3">
          <label className="grid gap-1 text-sm font-bold">
            Name
            <input
              className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#171a17] outline-none ring-[#f4c542] transition focus:ring-2"
              name="name"
              required
            />
          </label>
          <label className="grid gap-1 text-sm font-bold">
            Phone
            <input
              className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#171a17] outline-none ring-[#f4c542] transition focus:ring-2"
              name="phone"
              required
              type="tel"
            />
          </label>
          <label className="grid gap-1 text-sm font-bold">
            Email
            <input
                className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#171a17] outline-none ring-[#f4c542] transition focus:ring-2"
                name="email"
                type="email"
            />
          </label>
          <label className="grid gap-1 text-sm font-bold">
            City / Area
            <input
                className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#171a17] outline-none ring-[#f4c542] transition focus:ring-2"
                name="city"
                type="city"
            />
          </label>
          <div className="grid gap-1 text-sm font-bold">
              <label className="grid gap-1 text-sm font-bold" key="make_model">
                Make / Model / Year
                <input
                  className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#171a17] outline-none ring-[#f4c542] transition focus:ring-2"
                  name="make_model"
                />
              </label>
          </div>
          <label className="grid gap-1 text-sm font-bold">
            Message
            <textarea rows={4}
              className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#171a17] outline-none ring-[#f4c542] transition focus:ring-2"
              name="message"
            />
          </label>
        </div>
        <button
          className="mt-5 inline-flex w-full justify-center rounded-full bg-[#f4c542] px-5 py-3 text-sm font-black text-[#171a17] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
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
