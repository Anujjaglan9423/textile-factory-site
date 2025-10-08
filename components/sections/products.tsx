// import Image from "next/image";
// import Link from "next/link";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Container,
//   Section,
//   Eyebrow,
//   Title,
//   Subtitle,
//   Grid,
//   Pill,
// } from "../styled";

// const products = [
//   {
//     title: "Activewear",
//     slug: "activewear",
//     tag: "Performance",
//     desc: "Moisture-wicking knits and compression fits.",
//     img: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Casual Tees",
//     slug: "casual-tees",
//     tag: "Essentials",
//     desc: "Comb-spun cotton and sustainable blends.",
//     img: "https://images.pexels.com/photos/6634370/pexels-photo-6634370.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     title: "Denim",
//     slug: "denim",
//     tag: "Durable",
//     desc: "Selvedge and stretch denim with eco wash.",
//     img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Outerwear",
//     slug: "outerwear",
//     tag: "Seasonal",
//     desc: "Technical shells and insulated jackets.",
//     img: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     title: "Kidswear",
//     slug: "kidswear",
//     tag: "Soft Touch",
//     desc: "Hypoallergenic fabrics for comfort.",
//     img: "https://images.pexels.com/photos/5893841/pexels-photo-5893841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/5893841/pexels-photo-5893841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x",
//   },
//   {
//     title: "Workwear",
//     slug: "workwear",
//     tag: "Industrial",
//     desc: "Reinforced seams and heavy-duty fabrics.",
//     img: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
// ];

// export default function ProductsSection() {
//   return (
//     <Section id="products">
//       <Container>
//         <div className="mb-10 space-y-3">
//           <Eyebrow>Portfolio</Eyebrow>
//           <Title>Products We Manufacture</Title>
//           <Subtitle>
//             Category snapshots from our core lines. Full catalog available upon
//             request.
//           </Subtitle>
//         </div>
//         <Grid className="sm:grid-cols-2 lg:grid-cols-3">
//           {products.map((p) => (
//             <Card key={p.title} className="overflow-hidden">
//               <CardHeader className="p-0">
//                 <div className="relative aspect-[4/3] w-full">
//                   <Image
//                     src={p.img || "/placeholder.svg"}
//                     alt={p.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </CardHeader>
//               <CardContent className="space-y-2 p-4">
//                 <div className="flex items-center gap-2">
//                   <CardTitle className="text-base">{p.title}</CardTitle>
//                   <Pill>{p.tag}</Pill>
//                 </div>
//                 <p className="text-sm text-muted-foreground">{p.desc}</p>
//               </CardContent>
//               <CardFooter className="p-4 pt-0">
//                 <Button asChild variant="ghost">
//                   <Link href={`/category/${p.slug}`}>View Details</Link>
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </Grid>
//       </Container>
//     </Section>
//   );
// }

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
    title: "Shorts Wear",
    slug: "shorts-wear",
    tag: "Athletic",
    desc: "Lightweight and breathable fabric for active wear.",
    img: "/athletic-shorts-fabric-texture.jpg",
  },
  {
    title: "NS Lycra",
    slug: "ns-lycra",
    tag: "Stretch",
    desc: "High-performance stretch fabric with excellent recovery.",
    img: "/lycra-spandex-fabric-texture.jpg",
  },
  {
    title: "Terry Crush",
    slug: "terry-crush",
    tag: "Comfort",
    desc: "Soft terry fabric with crushed texture for comfort.",
    img: "/terry-cloth-fabric-texture.jpg",
  },
  {
    title: "NS Cotton",
    slug: "ns-cotton",
    tag: "Natural",
    desc: "Premium cotton blend for everyday comfort.",
    img: "/cotton-fabric-texture.jpg",
  },
  {
    title: "PC Cotton",
    slug: "pc-cotton",
    tag: "Durable",
    desc: "Poly-cotton blend for enhanced durability.",
    img: "/poly-cotton-blend-fabric.jpg",
  },
  {
    title: "Velvet",
    slug: "velvet",
    tag: "Luxury",
    desc: "Rich velvet fabric for premium applications.",
    img: "/velvet-fabric-texture.jpg",
  },
  {
    title: "TPU",
    slug: "tpu",
    tag: "Technical",
    desc: "Thermoplastic polyurethane for technical applications.",
    img: "/tpu-technical-fabric-material.jpg",
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
                <Button asChild variant="ghost">
                  <Link href={`/category/${p.slug}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
