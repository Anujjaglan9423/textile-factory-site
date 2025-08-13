import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container, Section, Eyebrow, Title, Subtitle } from "../styled"
import Link from "next/link"

export default function SustainabilitySection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 to-transparent" />
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-3">
          <Eyebrow className="flex items-center gap-2">
            <Leaf className="h-4 w-4" /> Sustainability
          </Eyebrow>
          <Title>Lower Impact, Higher Standards</Title>
          <Subtitle>
            Water recycling, chemical management, and waste diversion are embedded across our facilities. Audits and
            certifications available to partners.
          </Subtitle>
          <Button asChild>
            <Link href="/about">See our initiatives</Link>
          </Button>
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <ul className="grid gap-3 text-sm">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Water Recycled</span>
              <span className="font-medium">65%+</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Energy from Renewables</span>
              <span className="font-medium">40%</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Waste Diverted</span>
              <span className="font-medium">70%</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Chemical Compliance</span>
              <span className="font-medium">ZDHC aligned</span>
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  )
}
