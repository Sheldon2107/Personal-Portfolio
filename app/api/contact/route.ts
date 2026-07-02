import { NextResponse } from "next/server";
import { Resend } from "resend";

// Reads RESEND_API_KEY from environment — set this in .env.local locally,
// and in your Vercel project's Environment Variables for production.
const resendApiKey = process.env.RESEND_API_KEY;

// Where contact form messages get delivered. Set CONTACT_TO_EMAIL in your
// env — falls back to the address in lib/content.ts if not set.
const toEmail = process.env.CONTACT_TO_EMAIL || "sheldonstephen214@gmail.com";

// Resend's shared test sender. Works immediately with zero setup, but only
// delivers to the email you signed up to Resend with. Once you verify your
// own domain (e.g. donden.my) in the Resend dashboard, switch this to
// something like "Don's Portfolio <hello@donden.my>" — see README.md.
const fromEmail = process.env.CONTACT_FROM_EMAIL || "contact@donden.my";

export async function POST(request: Request) {
  if (!resendApiKey) {
    return NextResponse.json(
      {
        error:
          "Email is not configured yet. Add RESEND_API_KEY to your environment variables.",
      },
      { status: 500 }
    );
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  try {
    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: email,
      subject: `Portfolio contact — ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Message could not be sent. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Message could not be sent. Please try again shortly." },
      { status: 500 }
    );
  }
}
