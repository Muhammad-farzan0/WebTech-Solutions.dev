"use client";

import { useState, FormEvent } from "react";
import { Reveal } from "./Reveal";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/data/site";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "", company: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function validate() {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = "Tell us your name.";
    if (!values.email.trim()) next.email = "An email helps us reply.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email))
      next.email = "That email looks incomplete.";
    if (!values.message.trim() || values.message.trim().length < 10)
      next.message = "A few sentences about your project helps a lot.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setServerError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setServerError("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="pt-14 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-12">
                  <CheckCircle2 className="text-blue-500 dark:text-sky-400" size={40} />
                  <h3 className="mt-4 font-display font-semibold text-xl text-navy-900 dark:text-white">
                    Message sent.
                  </h3>
                  <p className="mt-2 text-sm text-navy-900/65 dark:text-paper-50/65 max-w-xs">
                    We reply to every inquiry within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Honeypot — hidden from real users, bots tend to fill every field */}
                  <input
                    type="text"
                    name="company"
                    value={values.company}
                    onChange={(e) => setValues((s) => ({ ...s, company: e.target.value }))}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <FloatingField
                    id="name"
                    label="Your name"
                    value={values.name}
                    error={errors.name}
                    onChange={(v) => setValues((s) => ({ ...s, name: v }))}
                  />
                  <FloatingField
                    id="email"
                    label="Email address"
                    type="email"
                    value={values.email}
                    error={errors.email}
                    onChange={(v) => setValues((s) => ({ ...s, email: v }))}
                  />
                  <FloatingField
                    id="message"
                    label="What are you building?"
                    textarea
                    value={values.message}
                    error={errors.message}
                    onChange={(v) => setValues((s) => ({ ...s, message: v }))}
                  />

                  {status === "error" && serverError && (
                    <div className="flex items-start gap-2 rounded-xl bg-red-500/10 border border-red-400/30 px-4 py-3 text-sm text-red-500 dark:text-red-400">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 rounded-full bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950 font-semibold hover:bg-blue-600 dark:hover:bg-sky-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "submitting" && (
                      <Loader2 size={16} className="animate-spin" />
                    )}
                    {status === "submitting" ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-5">
            <div className="rounded-2xl border border-navy-900/10 dark:border-paper-50/10 overflow-hidden h-64 lg:h-auto lg:flex-1">
              <iframe
                title="WebTech Solutions location"
                src="https://www.google.com/maps?q=Islamabad,Pakistan&output=embed"
                className="w-full h-full min-h-[260px] grayscale-[40%] dark:invert dark:hue-rotate-180"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-6 grid gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-navy-900/75 dark:text-paper-50/75 hover:text-blue-500 dark:hover:text-sky-400 transition-colors"
              >
                <Mail size={16} className="text-blue-500 dark:text-sky-400" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phoneDisplay.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-sm text-navy-900/75 dark:text-paper-50/75 hover:text-blue-500 dark:hover:text-sky-400 transition-colors"
              >
                <Phone size={16} className="text-blue-500 dark:text-sky-400" />
                {siteConfig.phoneDisplay}
              </a>
              <div className="flex items-center gap-3 text-sm text-navy-900/75 dark:text-paper-50/75">
                <MapPin size={16} className="text-blue-500 dark:text-sky-400" />
                {siteConfig.address}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FloatingField({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  textarea = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className={`peer w-full rounded-xl border bg-transparent px-4 pt-6 pb-2 text-sm text-navy-900 dark:text-white placeholder-transparent focus:outline-none resize-none ${
            error
              ? "border-red-400 focus:border-red-400"
              : "border-navy-900/15 dark:border-paper-50/15 focus:border-blue-500 dark:focus:border-sky-400"
          }`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className={`peer w-full rounded-xl border bg-transparent px-4 pt-6 pb-2 text-sm text-navy-900 dark:text-white placeholder-transparent focus:outline-none ${
            error
              ? "border-red-400 focus:border-red-400"
              : "border-navy-900/15 dark:border-paper-50/15 focus:border-blue-500 dark:focus:border-sky-400"
          }`}
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all pointer-events-none ${
          value
            ? "top-2 text-xs text-blue-500 dark:text-sky-400"
            : "top-4 text-sm text-navy-900/50 dark:text-paper-50/50 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 dark:peer-focus:text-sky-400"
        }`}
      >
        {label}
      </label>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
