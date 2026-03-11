require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");

const app = express();

const PORT = Number(process.env.PORT || 4000);
const SMTP_HOST = process.env.SMTP_HOST || "smtp.zoho.com";
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_SECURE = String(process.env.SMTP_SECURE || "true") === "true";
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const MAIL_TO = process.env.MAIL_TO || SMTP_USER;
const CORS_ORIGINS = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const TRUST_PROXY = String(process.env.TRUST_PROXY || "false") === "true";
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || 60000);
const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX || 10);

if (TRUST_PROXY) {
  app.set("trust proxy", 1);
}

app.use(helmet());
app.use(express.json({ limit: "100kb" }));

app.use(
  cors({
    origin(origin, callback) {
      // Allow server-to-server tools (no Origin header)
      if (!origin) return callback(null, true);
      if (CORS_ORIGINS.length === 0 || CORS_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Origin not allowed by CORS"));
    },
    methods: ["POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(
  rateLimit({
    windowMs: RATE_LIMIT_WINDOW_MS,
    max: RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,
    message: { ok: false, error: "Too many requests, try again later." },
  })
);

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

function sanitize(value) {
  return String(value || "").trim();
}

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "form-service" });
});

app.post("/submit", async (req, res) => {
  try {
    const site = sanitize(req.body.site || "unknown");
    const name = sanitize(req.body.name);
    const email = sanitize(req.body.email);
    const phone = sanitize(req.body.phone);
    const message = sanitize(req.body.message);
    const honeypot = sanitize(req.body.honeypot);

    // Basic bot trap: hidden field must stay empty.
    if (honeypot) {
      return res.status(400).json({ ok: false, error: "Invalid request." });
    }

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ ok: false, error: "name, email, and message are required." });
    }

    if (!isEmail(email)) {
      return res.status(400).json({ ok: false, error: "Invalid email." });
    }

    if (!SMTP_USER || !SMTP_PASS || !MAIL_TO) {
      return res.status(500).json({
        ok: false,
        error: "Email service is not configured on server.",
      });
    }

    const now = new Date().toISOString();
    const subject = `New form submission [${site}]`;
    const text = [
      `Received: ${now}`,
      `Site: ${site}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    await transporter.sendMail({
      from: `"Website Forms" <${SMTP_USER}>`,
      to: MAIL_TO,
      replyTo: email,
      subject,
      text,
    });

    return res.json({ ok: true });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: "Failed to send email.",
      details: process.env.NODE_ENV === "development" ? String(error) : undefined,
    });
  }
});

if (String(process.env.VERIFY_SMTP_ON_START || "false") === "true") {
  transporter.verify().then(
    () => console.log("SMTP connection verified."),
    (error) => console.error("SMTP verify failed:", error.message)
  );
}

app.listen(PORT, "127.0.0.1", () => {
  console.log(`form-service listening at http://127.0.0.1:${PORT}`);
});
