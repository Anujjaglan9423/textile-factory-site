import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Container, Section, Eyebrow, Title, Grid } from "../styled";

const testimonials = [
  {
    quote:
      "Gini & Mini Creations consistently delivers ahead of schedule with impeccable quality. Their communication and transparency are top-tier.",
    name: "Operations Director, EU Brand",
  },
  {
    quote:
      "From sampling to bulk, the process is smooth. QA documentation and compliance saved us weeks during audits.",
    name: "Sourcing Manager, US Retailer",
  },
  {
    quote:
      "Their sustainability upgrades meaningfully reduced our scope 3 footprint. A forward-looking partner.",
    name: "Head of ESG, Global Label",
  },
];

export default function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <div className="mb-10 space-y-3 text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <Title>What Our Partners Say</Title>
        </div>
        <Grid>
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6">
              <CardContent className="space-y-4 p-0">
                <Quote className="h-6 w-6 text-emerald-600" />
                <p className="text-sm leading-relaxed">{t.quote}</p>
                <div className="text-sm font-semibold">{t.name}</div>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
