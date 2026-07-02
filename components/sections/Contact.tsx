"use client";

import { useState } from "react";
import { RecordHeader } from "@/components/Dossier";
import { contact, profile } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Message could not be sent.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Message could not be sent."
      );
    }
  }

  return (
    <div>
      <RecordHeader
        code="04 — Contact"
        title="Get In Touch"
        fields={[
          { label: "Direct", value: profile.email },
          { label: "Response", value: "Within a few days" },
        ]}
      />

      <p className="max-w-xl text-sm leading-relaxed text-ink-soft">
        {contact.intro}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-xl space-y-5 rounded-sm border border-line bg-panel p-6"
      >
        <div>
          <label
            htmlFor="name"
            className="font-mono text-[10px] uppercase tracking-widest2 text-muted"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-amber"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-mono text-[10px] uppercase tracking-widest2 text-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-amber"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="font-mono text-[10px] uppercase tracking-widest2 text-muted"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-1 w-full resize-none rounded-sm border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-amber"
            placeholder="What would you like to say?"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest2 text-paper transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="font-mono text-xs text-amber">
            Message sent. Thanks for reaching out — I&apos;ll reply soon.
          </p>
        )}
        {status === "error" && (
          <p className="font-mono text-xs text-red-600">
            {errorMsg || "Something went wrong. Please try again."}
          </p>
        )}
      </form>
    </div>
  );
}
