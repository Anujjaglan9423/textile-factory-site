import { CheckCircle2, Truck, Scissors, Shirt, Boxes, Palette } from "lucide-react"
import { Container, Section, Eyebrow, Title } from "../styled"

const steps = [
  { icon: Palette, title: "Design & Tech Pack", desc: "Collaborate on specs, BOM, and compliance requirements." },
  { icon: Boxes, title: "Material Sourcing", desc: "Approved mills with traceable supply chains." },
  { icon: Scissors, title: "Cutting", desc: "Auto spreaders and CNC cutting for repeatability." },
  { icon: Shirt, title: "Sewing", desc: "Skilled lines with balanced SAM and WIP controls." },
  { icon: CheckCircle2, title: "QA & Testing", desc: "Inline, end-line AQL, and third-party lab tests." },
  { icon: Truck, title: "Packing & Logistics", desc: "Cartonization, labeling, export docs and freight." },
]

export default function ProcessSection() {
  return (
    <Section className="bg-muted/20">
      <Container>
        <div className="mb-10 space-y-3">
          <Eyebrow>Process</Eyebrow>
          <Title>Production Workflow</Title>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-xl border bg-card p-5">
              <div className="mb-3 flex items-center gap-2">
                <s.icon className="h-5 w-5 text-emerald-600" />
                <div className="text-sm font-semibold">
                  {i + 1}. {s.title}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
