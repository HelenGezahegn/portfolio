"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

// Server actions
export const sendEmail = async (formData: FormData) => {
  // Teaching moment, will print locally.
  //   console.log("Running on server");
  //   console.log(formData.get("senderEmail"));
  //   console.log(formData.get("emailMessage"));

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("emailMessage");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    };
  }

  let data;
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      reply_to: senderEmail as string,
      to: "gezahegnbackup@gmail.com",
      subject: "Message from Contact Form",
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string
      })
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    };
  }

  return { data };
};
