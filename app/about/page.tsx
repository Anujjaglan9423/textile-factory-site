import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import {
  Container,
  Section,
  Eyebrow,
  Title,
  Subtitle,
} from "@/components/styled";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Section className="border-b bg-muted/10">
          <Container className="space-y-3">
            <Eyebrow>About</Eyebrow>
            <Title>Built for Scale. Driven by Quality.</Title>
            <Subtitle>
              For over a decade, we&apos;ve partnered with global brands to
              manufacture apparel that wins on quality, speed, and
              sustainability.
            </Subtitle>
          </Container>
        </Section>

        <Section>
          <Container className="grid items-start gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Story</h3>
              <p className="text-muted-foreground">
                We started with a single production line and a promise: deliver
                consistently at international standards. Today, we run multiple
                integrated units with robust QA, compliant dyeing, and strong
                logistics partnerships.
              </p>
              <h3 className="text-xl font-semibold">Certifications</h3>
              <ul className="list-inside list-disc text-muted-foreground">
                <li>ISO 9001 Quality Management</li>
                <li>OEKO-TEX Standard 100</li>
                <li>Amfori BSCI</li>
                <li>GOTS capable lines</li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
              <Image
                src="/modern-textile.jpg"
                // src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Textile factory exterior"
                fill
                className="object-cover"
              />
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
