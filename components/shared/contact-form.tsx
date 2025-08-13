"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Declare EmailJS types
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      sendForm: (
        serviceId: string,
        templateId: string,
        form: HTMLFormElement,
        publicKey: string
      ) => Promise<any>;
    };
  }
}

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [emailjsLoaded, setEmailjsLoaded] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Load EmailJS from CDN
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      setEmailjsLoaded(true);
      // Initialize EmailJS
      if (window.emailjs) {
        window.emailjs.init("Zr4YTfAHKDO3Te4ph"); // Replace with your EmailJS public key
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || !emailjsLoaded || !window.emailjs) return;

    setPending(true);
    setStatus("idle");

    try {
      await window.emailjs.sendForm(
        "service_407t9oe", // Replace with your EmailJS service ID
        "template_oiwrh0j", // Replace with your EmailJS template ID
        formRef.current,
        "Zr4YTfAHKDO3Te4ph" // Replace with your EmailJS public key
      );

      setStatus("ok");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("err");
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={cn("space-y-4 rounded-xl border bg-card p-5")}
    >
      <div className="grid gap-3">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="user_name"
          required
          placeholder="Your full name"
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="user_email"
          required
          type="email"
          placeholder="you@company.com"
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" placeholder="Company name" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project..."
          rows={5}
        />
      </div>
      <div className="flex items-center justify-between gap-3">
        <div
          aria-live="polite"
          className={cn(
            "text-sm",
            status === "ok"
              ? "text-emerald-600"
              : status === "err"
              ? "text-red-600"
              : "text-muted-foreground"
          )}
        >
          {status === "ok" && "Thanks! We'll get back to you shortly."}
          {status === "err" && "Something went wrong. Please try again."}
          {!emailjsLoaded && "Loading..."}
        </div>
        <Button type="submit" disabled={pending || !emailjsLoaded}>
          {pending ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
