// src/lib/contactFn.ts
import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  product?: string;
  message?: string;
};

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((data: ContactPayload) => data)
  .handler(async ({ data }) => {
    const { name, company, email, phone, product, message } = data;

    if (!name || !email) {
      throw new Error("Name and email are required.");
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Internal notification to Vision team
    await transporter.sendMail({
      from: `"Vision Consultancy Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Enquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f8f5; border-radius: 8px;">
          <h2 style="margin: 0 0 24px; font-size: 22px; color: #1a1f3c;">New Contact Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #888;">Company</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #c0621a;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
            ${product ? `<tr><td style="padding: 8px 0; color: #888;">Product</td><td style="padding: 8px 0;">${product}</td></tr>` : ""}
          </table>
          ${
            message
              ? `
          <div style="margin-top: 24px; padding: 16px; background: #fff; border-left: 3px solid #c0621a; border-radius: 4px;">
            <p style="margin: 0 0 8px; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>`
              : ""
          }
          <p style="margin-top: 32px; font-size: 12px; color: #aaa;">Sent via visionconsultants.co contact form</p>
        </div>
      `,
    });

    // Auto-reply to the enquirer
    await transporter.sendMail({
      from: `"Vision Consultancy" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We've received your enquiry — Vision Consultancy",
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="margin: 0 0 16px; font-size: 22px; color: #1a1f3c;">Thanks, ${name.split(" ")[0]}.</h2>
          <p style="color: #555; line-height: 1.6;">We've received your enquiry and will respond within one working day with a tailored regulatory route for your product.</p>
          <p style="color: #555; line-height: 1.6;">In the meantime, feel free to browse our <a href="https://visionconsultants.co/services" style="color: #c0621a;">services</a></p>
          <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 13px; color: #aaa; margin: 0;">Vision Consultancy · New Delhi & Mumbai, India<br/>sales@visionconsultants.co</p>
        </div>
      `,
    });

    return { ok: true };
  });
