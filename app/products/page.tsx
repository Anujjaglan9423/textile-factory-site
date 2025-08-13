import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ProductsSection from "@/components/sections/products"
import { Container, Section, Eyebrow, Title, Subtitle } from "@/components/styled"

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Section className="border-b bg-muted/10">
          <Container className="space-y-3">
            <Eyebrow>Products</Eyebrow>
            <Title>Our Manufacturing Portfolio</Title>
            <Subtitle>Representative categories and finishes. Detailed specs available on request.</Subtitle>
          </Container>
        </Section>
        <ProductsSection />
      </main>
      <SiteFooter />
    </>
  )
}
