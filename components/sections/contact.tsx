import { ContactForm } from "../shared/contact-form"
import { Container, Section, Eyebrow, Title, Subtitle } from "../styled"

export default function ContactSection() {
  return (
    <Section id="contact">
      <Container className="grid gap-10 md:grid-cols-2">
        <div className="space-y-3">
          <Eyebrow>Contact</Eyebrow>
          <Title>Request a Quote</Title>
          <Subtitle>
            Share your tech pack or idea. Our team will respond within 1 business day with feasibility and timelines.
          </Subtitle>
        </div>
        <ContactForm />
      </Container>
    </Section>
  )
}
