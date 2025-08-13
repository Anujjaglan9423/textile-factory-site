import Image from "next/image";
import { Container, Section, Eyebrow, Title } from "../styled";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png",

  // H&M
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png",

  // Puma (from 1000logos.net)
  "https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo-768x432.jpg",

  // Nike (from pngimg.com)
  "https://pngimg.com/uploads/nike/nike_PNG11.png",

  // Under Armour (from logos-world.net)
  "https://logos-world.net/wp-content/uploads/2020/04/Under-Armour-Logo.png",
];
export default function ClientsSection() {
  return (
    <Section className="border-y bg-muted/10">
      <Container>
        <div className="mb-8 space-y-2 text-center">
          <Eyebrow>Partners</Eyebrow>
          <Title>Trusted by Global Brands</Title>
        </div>
        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((src, i) => (
            <div key={i} className="relative h-14 w-full grayscale">
              <Image
                src={src || "/placeholder.svg"}
                alt={"Client logo " + (i + 1)}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
