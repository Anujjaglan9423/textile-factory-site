import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Container,
  Section,
  Eyebrow,
  Title,
  Subtitle,
  Grid,
  Pill,
} from "../styled";

const products = [
  {
    title: "Activewear",
    tag: "Performance",
    desc: "Moisture-wicking knits and compression fits.",
    img: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Casual Tees",
    tag: "Essentials",
    desc: "Comb-spun cotton and sustainable blends.",
    img: "https://images.pexels.com/photos/6634370/pexels-photo-6634370.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Denim",
    tag: "Durable",
    desc: "Selvedge and stretch denim with eco wash.",
    img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Outerwear",
    tag: "Seasonal",
    desc: "Technical shells and insulated jackets.",
    img: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Kidswear",
    tag: "Soft Touch",
    desc: "Hypoallergenic fabrics for comfort.",
    img: "https://images.pexels.com/photos/5893841/pexels-photo-5893841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/5893841/pexels-photo-5893841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x",
  },
  {
    title: "Workwear",
    tag: "Industrial",
    desc: "Reinforced seams and heavy-duty fabrics.",
    img: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function ProductsSection() {
  return (
    <Section id="products">
      <Container>
        <div className="mb-10 space-y-3">
          <Eyebrow>Portfolio</Eyebrow>
          <Title>Products We Manufacture</Title>
          <Subtitle>
            Category snapshots from our core lines. Full catalog available upon
            request.
          </Subtitle>
        </div>
        <Grid className="sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.title} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={p.img || "/placeholder.svg"}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-base">{p.title}</CardTitle>
                  <Pill>{p.tag}</Pill>
                </div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button asChild variant="ghost" className="px-0">
                  <Link href="/contact">Request samples</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
