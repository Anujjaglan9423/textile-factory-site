import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow } from "./styled";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-white" />
      <Container className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-24">
        <div className="space-y-6">
          <Eyebrow>Trusted Textile Manufacturing</Eyebrow>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Premium Apparel Manufacturing at Scale
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            From sourcing to finishing, we deliver end-to-end production with
            ISO-grade quality controls and transparent timelines.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
          <dl className="mt-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
              <Timer className="h-4 w-4 text-emerald-600" />
              <div>
                <dt className="font-semibold">On-Time</dt>
                <dd className="text-muted-foreground">98% delivery rate</dd>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <div>
                <dt className="font-semibold">Certified</dt>
                <dd className="text-muted-foreground">ISO & ESG ready</dd>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
              <Truck className="h-4 w-4 text-emerald-600" />
              <div>
                <dt className="font-semibold">Global</dt>
                <dd className="text-muted-foreground">Logistics support</dd>
              </div>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Modern textile manufacturing floor with sewing machines"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
