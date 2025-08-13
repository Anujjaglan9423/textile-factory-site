import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./styled";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/20">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Gini & Mini Creations</h3>
            <p className="text-sm text-muted-foreground">
              Precision textile manufacturing for global brands. On-time. At
              scale. With uncompromising quality.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="/products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Capabilities</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Cut & Sew</li>
              <li className="text-muted-foreground">Knitting & Weaving</li>
              <li className="text-muted-foreground">Dyeing & Finishing</li>
              <li className="text-muted-foreground">Quality Assurance</li>
            </ul>
          </div>
          <div className="space-y-2 text-sm">
            <h4 className="mb-3 text-sm font-semibold">Contact</h4>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" /> +91 9996229942
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" /> Surjeetjaglan2121@gmail.com
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" /> Sondhapur Panipat (132103)
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gini & Mini Creations. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}

export default SiteFooter;
