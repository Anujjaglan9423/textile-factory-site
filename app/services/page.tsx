import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ServicesSection from "@/components/sections/services"
import ProcessSection from "@/components/sections/process"
import StatsSection from "@/components/sections/stats"
import { Container, Section, Eyebrow, Title, Subtitle } from "@/components/styled"

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Section className="border-b bg-muted/10">
          <Container className="space-y-3">
            <Eyebrow>Services</Eyebrow>
            <Title>Capabilities That Deliver</Title>
            <Subtitle>From sampling to bulk production, we operate with precision and transparency.</Subtitle>
          </Container>
        </Section>
        <ServicesSection />
        <ProcessSection />
        <StatsSection />
      </main>
      <SiteFooter />
    </>
  )
}
