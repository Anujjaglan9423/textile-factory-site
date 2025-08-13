"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { sendMessage } from "@/app/actions/send-message"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const [pending, start] = useTransition()
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement
        const data = new FormData(form)
        setStatus("idle")
        start(async () => {
          try {
            await sendMessage(data)
            setStatus("ok")
            form.reset()
          } catch {
            setStatus("err")
          }
        })
      }}
      className={cn("space-y-4 rounded-xl border bg-card p-5")}
    >
      <div className="grid gap-3">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required placeholder="Your full name" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" required type="email" placeholder="you@company.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" placeholder="Company name" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required placeholder="Tell us about your project..." rows={5} />
      </div>
      <div className="flex items-center justify-between gap-3">
        <div
          aria-live="polite"
          className={cn(
            "text-sm",
            status === "ok" ? "text-emerald-600" : status === "err" ? "text-red-600" : "text-muted-foreground",
          )}
        >
          {status === "ok" && "Thanks! We’ll get back to you shortly."}
          {status === "err" && "Something went wrong. Please try again."}
        </div>
        <Button type="submit" disabled={pending}>
          {pending ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  )
}
