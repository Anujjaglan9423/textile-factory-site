import { Scissors, Factory, Recycle, Palette, PackageSearch, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, Section, Eyebrow, Title, Subtitle, Grid } from "../styled"

const items = [
  { icon: Factory, title: "Cut & Sew", desc: "Automated cutting and precision stitching across woven and knit lines." },
  {
    icon: Palette,
    title: "Dyeing & Finishing",
    desc: "Color consistency and finishing that meets global brand standards.",
  },
  { icon: PackageSearch, title: "Sourcing", desc: "Ethical material sourcing with full traceability and QA checks." },
  { icon: Scissors, title: "Sampling & Pattern", desc: "Rapid prototyping, pattern making, and fit iterations." },
  { icon: ShieldCheck, title: "Quality Control", desc: "Inline QA, AQL inspections, and lab testing documentation." },
  { icon: Recycle, title: "Sustainability", desc: "Waste reduction, water recycling, and energy-efficient processes." },
]

export default function ServicesSection() {
  return (
    <Section id="services">
      <Container>
        <div className="mb-10 space-y-3">
          <Eyebrow>Capabilities</Eyebrow>
          <Title>End-to-End Manufacturing Services</Title>
          <Subtitle>
            We operate vertically integrated facilities to deliver speed, quality, and consistency from fabric to
            finished product.
          </Subtitle>
        </div>
        <Grid>
          {items.map((item) => (
            <Card key={item.title} className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-3">
                <item.icon className="h-5 w-5 text-emerald-600" />
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{item.desc}</CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
