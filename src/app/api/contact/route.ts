import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NAME_RE = /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]+$/;

type ContactBody = {
  email?: unknown;
  phone?: unknown;
  firstName?: unknown;
  lastName?: unknown;
  message?: unknown;
  agreed?: unknown;
  countryCode?: unknown;
  dialCode?: unknown;
};

function asTrimmed(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return NextResponse.json(
      { ok: false, error: "Contact form is not configured." },
      { status: 500 }
    );
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const email = asTrimmed(body.email);
  const phone = asTrimmed(body.phone);
  const firstName = asTrimmed(body.firstName);
  const lastName = asTrimmed(body.lastName);
  const message = asTrimmed(body.message);
  const countryCode = asTrimmed(body.countryCode).toUpperCase();
  const dialCode = asTrimmed(body.dialCode);

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (!phone || phone.length > 20) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid phone number." },
      { status: 400 }
    );
  }
  if (firstName.length < 2 || !NAME_RE.test(firstName)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid first name." },
      { status: 400 }
    );
  }
  if (lastName && (lastName.length < 2 || !NAME_RE.test(lastName))) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid last name." },
      { status: 400 }
    );
  }
  if (message.length < 5 || message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "Please tell us how we can help." },
      { status: 400 }
    );
  }
  if (body.agreed !== true) {
    return NextResponse.json(
      { ok: false, error: "Please agree to the terms to proceed." },
      { status: 400 }
    );
  }
  if (!/^[A-Z]{2}$/.test(countryCode) || !/^\+\d{1,4}$/.test(dialCode)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid phone number." },
      { status: 400 }
    );
  }

  try {
    const sql = neon(databaseUrl);

    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id bigserial PRIMARY KEY,
        first_name text NOT NULL,
        last_name text,
        email text NOT NULL,
        phone text NOT NULL,
        country_code text NOT NULL,
        dial_code text NOT NULL,
        message text NOT NULL,
        created_at timestamptz NOT NULL DEFAULT now()
      )
    `;

    await sql`
      INSERT INTO contact_submissions (
        first_name,
        last_name,
        email,
        phone,
        country_code,
        dial_code,
        message
      )
      VALUES (
        ${firstName},
        ${lastName || null},
        ${email},
        ${phone},
        ${countryCode},
        ${dialCode},
        ${message}
      )
    `;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
