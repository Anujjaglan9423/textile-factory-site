// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft, CheckCircle, Zap, Shield, Leaf } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { getAllCategorySlugs, getCategoryBySlug } from "@/lib/category-data";
// import SiteFooter from "@/components/site-footer";
// import SiteHeader from "@/components/site-header";
// // import { getCategoryBySlug, getAllCategorySlugs } from "@/lib/category-data"

// interface CategoryPageProps {
//   params: {
//     slug: string;
//   };
// }

// export async function generateStaticParams() {
//   const slugs = getAllCategorySlugs();
//   return slugs.map((slug) => ({
//     slug: slug,
//   }));
// }

// export default function CategoryPage({ params }: CategoryPageProps) {
//   const category = getCategoryBySlug(params.slug);

//   if (!category) {
//     notFound();
//   }

//   return (
//     <>
//       <SiteHeader />
//       <div className="min-h-screen bg-background">
//         {/* Header */}
//         <div className="border-b">
//           <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
//             <Link
//               href="/"
//               className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
//             >
//               <ArrowLeft className="h-4 w-4" />
//               Back to Products
//             </Link>
//           </div>
//         </div>

//         {/* Hero Section */}
//         <div className="relative h-96 overflow-hidden">
//           <Image
//             src={category.heroImage || "/placeholder.svg"}
//             alt={category.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-black/40" />
//           <div className="absolute inset-0 flex items-center">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//               <div className="max-w-2xl text-white">
//                 <Badge variant="secondary" className="mb-4">
//                   {category.tag}
//                 </Badge>
//                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
//                   {category.title}
//                 </h1>
//                 <p className="mt-4 text-xl text-white/90">
//                   {category.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//           <div className="grid gap-16 lg:grid-cols-3">
//             {/* Main Content */}
//             <div className="lg:col-span-2">
//               <Tabs defaultValue="overview" className="w-full">
//                 <TabsList className="grid w-full grid-cols-4">
//                   <TabsTrigger value="overview">Overview</TabsTrigger>
//                   <TabsTrigger value="products">Products</TabsTrigger>
//                   <TabsTrigger value="prototypes">Prototypes</TabsTrigger>
//                   <TabsTrigger value="specs">Specifications</TabsTrigger>
//                 </TabsList>

//                 <TabsContent value="overview" className="mt-8">
//                   <div className="prose prose-gray max-w-none">
//                     <p className="text-lg leading-relaxed text-muted-foreground">
//                       {category.overview}
//                     </p>
//                   </div>
//                 </TabsContent>

//                 <TabsContent value="products" className="mt-8">
//                   <div className="grid gap-6 sm:grid-cols-2">
//                     {category.products.map((product) => (
//                       <Card key={product.id} className="overflow-hidden">
//                         <div className="relative aspect-[4/3]">
//                           <Image
//                             src={product.image || "/placeholder.svg"}
//                             alt={product.name}
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                         <CardHeader>
//                           <CardTitle className="text-lg">
//                             {product.name}
//                           </CardTitle>
//                           <p className="text-sm text-muted-foreground">
//                             {product.description}
//                           </p>
//                           <div className="flex items-center justify-between">
//                             <Badge variant="outline">
//                               {product.priceRange}
//                             </Badge>
//                             <span className="text-sm font-medium">
//                               {product.specifications.material}
//                             </span>
//                           </div>
//                         </CardHeader>
//                         <CardContent>
//                           <div className="space-y-3">
//                             <div>
//                               <h4 className="text-sm font-medium mb-2">
//                                 Features
//                               </h4>
//                               <div className="flex flex-wrap gap-1">
//                                 {product.features.map((feature) => (
//                                   <Badge
//                                     key={feature}
//                                     variant="secondary"
//                                     className="text-xs"
//                                   >
//                                     {feature}
//                                   </Badge>
//                                 ))}
//                               </div>
//                             </div>
//                             <div>
//                               <h4 className="text-sm font-medium mb-2">
//                                 Available Colors
//                               </h4>
//                               <div className="flex flex-wrap gap-1">
//                                 {product.specifications.colors.map((color) => (
//                                   <Badge
//                                     key={color}
//                                     variant="outline"
//                                     className="text-xs"
//                                   >
//                                     {color}
//                                   </Badge>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </div>
//                 </TabsContent>

//                 <TabsContent value="prototypes" className="mt-8">
//                   <div className="grid gap-6 sm:grid-cols-2">
//                     {category.prototypes.map((prototype, index) => (
//                       <Card key={index} className="overflow-hidden">
//                         <div className="relative aspect-[4/3]">
//                           <Image
//                             src={prototype.image || "/placeholder.svg"}
//                             alt={prototype.title}
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                         <CardHeader>
//                           <CardTitle className="text-lg">
//                             {prototype.title}
//                           </CardTitle>
//                           <p className="text-sm text-muted-foreground">
//                             {prototype.description}
//                           </p>
//                         </CardHeader>
//                       </Card>
//                     ))}
//                   </div>
//                 </TabsContent>

//                 <TabsContent value="specs" className="mt-8">
//                   <div className="space-y-6">
//                     <Card>
//                       <CardHeader>
//                         <CardTitle className="flex items-center gap-2">
//                           <Zap className="h-5 w-5" />
//                           Fabric Composition
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-muted-foreground">
//                           {category.technicalSpecs.fabricComposition}
//                         </p>
//                       </CardContent>
//                     </Card>

//                     <Card>
//                       <CardHeader>
//                         <CardTitle className="flex items-center gap-2">
//                           <Shield className="h-5 w-5" />
//                           Care Instructions
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-muted-foreground">
//                           {category.technicalSpecs.careInstructions}
//                         </p>
//                       </CardContent>
//                     </Card>

//                     <Card>
//                       <CardHeader>
//                         <CardTitle className="flex items-center gap-2">
//                           <Leaf className="h-5 w-5" />
//                           Sustainability
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-muted-foreground">
//                           {category.technicalSpecs.sustainability}
//                         </p>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </TabsContent>
//               </Tabs>
//             </div>

//             {/* Sidebar */}
//             <div className="space-y-8">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Request Information</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <Button className="w-full">
//                     <Link href="/contact">Request Samples</Link>
//                   </Button>

//                   <Button variant="outline" className="w-full bg-transparent">
//                     <Link href="/contact">Download Catalog</Link>
//                   </Button>

//                   <Button variant="ghost" className="w-full">
//                     <Link href="/contact">Contact Sales Team</Link>
//                   </Button>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle>Key Benefits</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-3">
//                     <div className="flex items-start gap-3">
//                       <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <p className="font-medium">Quality Assured</p>
//                         <p className="text-sm text-muted-foreground">
//                           Rigorous quality control at every stage
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <p className="font-medium">Custom Orders</p>
//                         <p className="text-sm text-muted-foreground">
//                           Tailored solutions for your needs
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <p className="font-medium">Fast Delivery</p>
//                         <p className="text-sm text-muted-foreground">
//                           Quick turnaround times
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//       <SiteFooter />
//     </>
//   );
// }

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Zap, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllCategorySlugs, getCategoryBySlug } from "@/lib/category-data";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
// import { getCategoryBySlug, getAllCategorySlugs } from "@/lib/category-data"

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <Image
            src={category.heroImage || "/placeholder.svg"}
            alt={category.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                <Badge variant="secondary" className="mb-4">
                  {category.tag}
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  {category.title}
                </h1>
                <p className="mt-4 text-xl text-white/90">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="products">Products</TabsTrigger>
                  <TabsTrigger value="prototypes">Prototypes</TabsTrigger>
                  <TabsTrigger value="specs">Specifications</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {category.overview}
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="products" className="mt-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {category.products.map((product) => (
                      <Card key={product.id} className="overflow-hidden">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg">
                            {product.name}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">
                              {product.priceRange}
                            </Badge>
                            <span className="text-sm font-medium">
                              {product.specifications.material}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-sm font-medium mb-2">
                                Features
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {product.features.map((feature) => (
                                  <Badge
                                    key={feature}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-2">
                                Available Colors
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {product.specifications.colors.map((color) => (
                                  <Badge
                                    key={color}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {color}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="prototypes" className="mt-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {category.prototypes.map((prototype, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={prototype.image || "/placeholder.svg"}
                            alt={prototype.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg">
                            {prototype.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {prototype.description}
                          </p>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="specs" className="mt-8">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          Fabric Composition
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {category.technicalSpecs.fabricComposition}
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          Care Instructions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {category.technicalSpecs.careInstructions}
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Leaf className="h-5 w-5" />
                          Sustainability
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {category.technicalSpecs.sustainability}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Request Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">
                    <Link href="/contact">Request Samples</Link>
                  </Button>

                  <Button variant="outline" className="w-full bg-transparent">
                    <Link href="/contact">Download Catalog</Link>
                  </Button>

                  <Button variant="ghost" className="w-full">
                    <Link href="/contact">Contact Sales Team</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Quality Assured</p>
                        <p className="text-sm text-muted-foreground">
                          Rigorous quality control at every stage
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Custom Orders</p>
                        <p className="text-sm text-muted-foreground">
                          Tailored solutions for your needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Fast Delivery</p>
                        <p className="text-sm text-muted-foreground">
                          Quick turnaround times
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
