import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ContactSection from "@/components/sections/contact"
import { Container, Section, Eyebrow, Title, Subtitle } from "@/components/styled"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Section className="border-b bg-muted/10">
          <Container className="space-y-3">
            <Eyebrow>Contact</Eyebrow>
            <Title>Let&apos;s Build Your Next Line</Title>
            <Subtitle>Share your requirements and we&apos;ll tailor a production plan for you.</Subtitle>
          </Container>
        </Section>
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
