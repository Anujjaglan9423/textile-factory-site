"use server"

export async function sendMessage(formData: FormData) {
  // In production, send to your CRM/email provider or database.
  // Here we just simulate latency and log the message.
  await new Promise((r) => setTimeout(r, 800))

  const payload = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    company: String(formData.get("company") || ""),
    message: String(formData.get("message") || ""),
    submittedAt: new Date().toISOString(),
  }

  console.log("Contact submission:", payload)
  // You can throw an error here to test error handling
  return { ok: true }
}
