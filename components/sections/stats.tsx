import { Container, Section, Kpi } from "../styled"

export default function StatsSection() {
  const stats = [
    { label: "Monthly Capacity", value: "1.2M+" },
    { label: "Lead Time", value: "15–30 days" },
    { label: "Defect Rate", value: "≤ 0.8%" },
    { label: "On-Time Delivery", value: "98%" },
  ]
  return (
    <Section aria-labelledby="factory-stats">
      <Container>
        <div id="factory-stats" className="sr-only">
          Factory performance statistics
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Kpi key={s.label}>
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </Kpi>
          ))}
        </div>
      </Container>
    </Section>
  )
}
