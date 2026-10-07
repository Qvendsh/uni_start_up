"use client";

import { useState } from "react";

export const emailAddress = "barchyshynyura@gmail.com";
export const gmailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=barchyshynyura%40gmail.com&su=StockMind%20%E2%80%94%20%D0%BE%D0%B1%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B8%D1%82%D0%B8%20%D0%BF%D1%96%D0%BB%D0%BE%D1%82";

function fallbackCopy(value: string) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

export function CopyEmailButton({ className = "copy-email", label = "Скопіювати email" }: { className?: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress);
    } catch {
      fallbackCopy(emailAddress);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <button className={`${className}${copied ? " copied" : ""}`} type="button" onClick={copyEmail} aria-live="polite">
      <span aria-hidden="true">{copied ? "✓" : "⧉"}</span>
      {copied ? "Email скопійовано" : label}
    </button>
  );
}
