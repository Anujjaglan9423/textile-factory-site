// // Detailed category data with prototypes, specifications, and images
// export interface CategoryProduct {
//   id: string
//   name: string
//   description: string
//   image: string
//   specifications: {
//     material: string
//     weight: string
//     colors: string[]
//     sizes: string[]
//   }
//   features: string[]
//   priceRange: string
// }

// export interface CategoryData {
//   title: string
//   slug: string
//   tag: string
//   description: string
//   heroImage: string
//   overview: string
//   products: CategoryProduct[]
//   prototypes: {
//     title: string
//     image: string
//     description: string
//   }[]
//   technicalSpecs: {
//     fabricComposition: string
//     careInstructions: string
//     sustainability: string
//   }
// }

// export const categoryData: Record<string, CategoryData> = {
//   activewear: {
//     title: "Activewear",
//     slug: "activewear",
//     tag: "Performance",
//     description: "High-performance athletic wear designed for comfort and durability",
//     heroImage:
//       "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
//     overview:
//       "Our activewear collection combines cutting-edge moisture-wicking technology with ergonomic design to deliver superior performance. Each piece is engineered for athletes and fitness enthusiasts who demand both functionality and style.",
//     products: [
//       {
//         id: "aw-001",
//         name: "Performance Compression Tights",
//         description: "Full-length compression tights with moisture-wicking technology",
//         image:
//           "https://images.unsplash.com/photo-1506629905607-d9c297d3d45b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         specifications: {
//           material: "88% Polyester, 12% Elastane",
//           weight: "180 GSM",
//           colors: ["Black", "Navy", "Charcoal", "Royal Blue"],
//           sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//         },
//         features: ["4-way stretch", "Moisture-wicking", "Flatlock seams", "Reflective details"],
//         priceRange: "$25-35",
//       },
//       {
//         id: "aw-002",
//         name: "Athletic Tank Top",
//         description: "Lightweight tank with mesh ventilation panels",
//         image:
//           "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         specifications: {
//           material: "92% Polyester, 8% Spandex",
//           weight: "140 GSM",
//           colors: ["White", "Black", "Grey", "Pink", "Mint"],
//           sizes: ["XS", "S", "M", "L", "XL"],
//         },
//         features: ["Mesh panels", "Quick-dry", "Anti-odor treatment", "Racerback design"],
//         priceRange: "$18-28",
//       },
//     ],
//     prototypes: [
//       {
//         title: "Compression Technology Prototype",
//         image: "/compression-fabric-prototype.jpg",
//         description: "Advanced compression mapping for optimal muscle support and blood circulation",
//       },
//       {
//         title: "Moisture Management System",
//         image: "/moisture-wicking-fabric-test.jpg",
//         description: "Multi-layer fabric construction for superior moisture transport and quick drying",
//       },
//     ],
//     technicalSpecs: {
//       fabricComposition: "High-performance synthetic blends with elastane for stretch and recovery",
//       careInstructions: "Machine wash cold, tumble dry low, no fabric softener",
//       sustainability: "Made with recycled polyester from plastic bottles, OEKO-TEX certified",
//     },
//   },
//   "casual-tees": {
//     title: "Casual Tees",
//     slug: "casual-tees",
//     tag: "Essentials",
//     description: "Comfortable everyday t-shirts made from premium cotton blends",
//     heroImage: "https://images.pexels.com/photos/6634370/pexels-photo-6634370.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     overview:
//       "Our casual tee collection features premium cotton blends and sustainable materials, offering the perfect balance of comfort, durability, and style for everyday wear.",
//     products: [
//       {
//         id: "ct-001",
//         name: "Classic Crew Neck Tee",
//         description: "Timeless crew neck t-shirt in premium cotton",
//         image:
//           "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         specifications: {
//           material: "100% Organic Cotton",
//           weight: "180 GSM",
//           colors: ["White", "Black", "Grey", "Navy", "Olive", "Burgundy"],
//           sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
//         },
//         features: ["Pre-shrunk", "Reinforced seams", "Tagless label", "Side-seamed construction"],
//         priceRange: "$12-18",
//       },
//       {
//         id: "ct-002",
//         name: "V-Neck Essential Tee",
//         description: "Flattering v-neck cut in soft cotton blend",
//         image:
//           "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         specifications: {
//           material: "60% Cotton, 40% Modal",
//           weight: "160 GSM",
//           colors: ["White", "Black", "Heather Grey", "Blush", "Sage"],
//           sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//         },
//         features: ["Soft hand feel", "Drape enhancement", "Color retention", "Breathable"],
//         priceRange: "$15-22",
//       },
//     ],
//     prototypes: [
//       {
//         title: "Sustainable Cotton Blend",
//         image: "/organic-cotton-fabric-sample.jpg",
//         description: "Innovative blend of organic cotton and modal for enhanced softness and durability",
//       },
//       {
//         title: "Fit Optimization Study",
//         image: "/t-shirt-fit-pattern-design.jpg",
//         description: "Ergonomic pattern development for improved fit across diverse body types",
//       },
//     ],
//     technicalSpecs: {
//       fabricComposition: "Premium cotton and cotton blends, including organic and recycled options",
//       careInstructions: "Machine wash warm, tumble dry medium, iron if needed",
//       sustainability: "GOTS certified organic cotton, low-impact dyes, minimal water usage",
//     },
//   },
//   denim: {
//     title: "Denim",
//     slug: "denim",
//     tag: "Durable",
//     description: "Premium denim with selvedge construction and eco-friendly processing",
//     heroImage:
//       "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
//     overview:
//       "Our denim collection showcases traditional craftsmanship with modern sustainability practices. From classic selvedge to innovative stretch blends, each piece is built to last.",
//     products: [
//       {
//         id: "dn-001",
//         name: "Selvedge Straight Jeans",
//         description: "Classic straight-leg jeans in premium selvedge denim",
//         image:
//           "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         specifications: {
//           material: "100% Cotton Selvedge Denim",
//           weight: "14.5 oz",
//           colors: ["Raw Indigo", "One Wash", "Light Wash"],
//           sizes: ["28", "30", "32", "34", "36", "38", "40", "42"],
//         },
//         features: ["Selvedge construction", "Copper rivets", "Leather patch", "Chain-stitched hem"],
//         priceRange: "$85-120",
//       },
//       {
//         id: "dn-002",
//         name: "Stretch Skinny Jeans",
//         description: "Modern skinny fit with comfortable stretch",
//         image:
//           "https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         specifications: {
//           material: "98% Cotton, 2% Elastane",
//           weight: "12 oz",
//           colors: ["Dark Wash", "Medium Wash", "Black", "Grey"],
//           sizes: ["26", "28", "30", "32", "34", "36", "38"],
//         },
//         features: ["4-way stretch", "Recovery technology", "Fade-resistant", "Comfort waistband"],
//         priceRange: "$45-65",
//       },
//     ],
//     prototypes: [
//       {
//         title: "Eco-Wash Process",
//         image: "/placeholder-v6cfq.png",
//         description: "Water-saving wash techniques that reduce environmental impact by 70%",
//       },
//       {
//         title: "Stretch Integration Technology",
//         image: "/placeholder-3t8x5.png",
//         description: "Advanced elastane integration for stretch without compromising durability",
//       },
//     ],
//     technicalSpecs: {
//       fabricComposition: "Premium cotton denim with optional elastane for stretch varieties",
//       careInstructions: "Turn inside out, wash cold, hang dry recommended",
//       sustainability: "Water-efficient processing, organic cotton options, recycled hardware",
//     },
//   },
//   outerwear: {
//     title: "Outerwear",
//     slug: "outerwear",
//     tag: "Seasonal",
//     description: "Technical outerwear for all weather conditions",
//     heroImage: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     overview:
//       "Our outerwear collection combines technical performance with urban style. From waterproof shells to insulated jackets, each piece is designed to protect against the elements.",
//     products: [
//       {
//         id: "ow-001",
//         name: "Waterproof Shell Jacket",
//         description: "Lightweight waterproof jacket with sealed seams",
//         image:
//           "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         specifications: {
//           material: "100% Nylon with PU coating",
//           weight: "280 GSM",
//           colors: ["Black", "Navy", "Olive", "Orange"],
//           sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//         },
//         features: ["Waterproof 10K/10K", "Sealed seams", "Adjustable hood", "Ventilation zips"],
//         priceRange: "$120-180",
//       },
//       {
//         id: "ow-002",
//         name: "Insulated Puffer Jacket",
//         description: "Warm puffer jacket with synthetic insulation",
//         image:
//           "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         specifications: {
//           material: "Recycled Polyester with PrimaLoft insulation",
//           weight: "350 GSM",
//           colors: ["Black", "Navy", "Forest Green", "Burgundy"],
//           sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//         },
//         features: ["PrimaLoft Gold insulation", "Water-resistant", "Packable design", "Interior pockets"],
//         priceRange: "$150-220",
//       },
//     ],
//     prototypes: [
//       {
//         title: "Breathable Membrane Technology",
//         image: "/placeholder-nc4qz.png",
//         description: "Advanced membrane technology for superior waterproofing and breathability",
//       },
//       {
//         title: "Insulation Performance Testing",
//         image: "/placeholder-g49nj.png",
//         description: "Rigorous testing protocols to ensure optimal warmth-to-weight ratios",
//       },
//     ],
//     technicalSpecs: {
//       fabricComposition: "Technical synthetic fabrics with specialized coatings and membranes",
//       careInstructions: "Machine wash cold, tumble dry low, reactivate DWR treatment as needed",
//       sustainability: "Recycled materials, PFC-free DWR treatments, responsible down sourcing",
//     },
//   },
//   kidswear: {
//     title: "Kidswear",
//     slug: "kidswear",
//     tag: "Soft Touch",
//     description: "Gentle, hypoallergenic clothing designed for children's sensitive skin",
//     heroImage: "https://images.pexels.com/photos/5893841/pexels-photo-5893841.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     overview:
//       "Our kidswear collection prioritizes comfort, safety, and durability. Every piece is made with hypoallergenic materials and designed to withstand active play while being gentle on sensitive skin.",
//     products: [
//       {
//         id: "kw-001",
//         name: "Organic Cotton Onesie",
//         description: "Soft organic cotton onesie for infants",
//         image:
//           "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         specifications: {
//           material: "100% Organic Cotton",
//           weight: "160 GSM",
//           colors: ["White", "Natural", "Soft Pink", "Sky Blue", "Mint"],
//           sizes: ["0-3M", "3-6M", "6-9M", "9-12M", "12-18M"],
//         },
//         features: ["Hypoallergenic", "Snap closures", "Reinforced seams", "Pre-shrunk"],
//         priceRange: "$15-25",
//       },
//       {
//         id: "kw-002",
//         name: "Play Shorts",
//         description: "Comfortable shorts for active toddlers",
//         image:
//           "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         specifications: {
//           material: "95% Organic Cotton, 5% Elastane",
//           weight: "200 GSM",
//           colors: ["Khaki", "Navy", "Coral", "Sage", "Denim"],
//           sizes: ["2T", "3T", "4T", "5T", "6T"],
//         },
//         features: ["Elastic waistband", "Reinforced knees", "Easy-care", "Fade-resistant"],
//         priceRange: "$18-28",
//       },
//     ],
//     prototypes: [
//       {
//         title: "Skin-Safe Fabric Testing",
//         image: "/fabric-safety-testing-for-children.jpg",
//         description: "Comprehensive dermatological testing to ensure fabric safety for sensitive skin",
//       },
//       {
//         title: "Durability Enhancement",
//         image: "/children-clothing-durability-test.jpg",
//         description: "Specialized reinforcement techniques for high-wear areas in children's clothing",
//       },
//     ],
//     technicalSpecs: {
//       fabricComposition: "Certified organic cotton and natural fiber blends",
//       careInstructions: "Machine wash warm with gentle detergent, tumble dry low",
//       sustainability: "GOTS certified organic materials, non-toxic dyes, plastic-free packaging",
//     },
//   },
//   workwear: {
//     title: "Workwear",
//     slug: "workwear",
//     tag: "Industrial",
//     description: "Heavy-duty workwear built for demanding industrial environments",
//     heroImage: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     overview:
//       "Our workwear collection is engineered for the toughest job sites. With reinforced construction, flame-resistant options, and high-visibility features, these garments prioritize safety and durability.",
//     products: [
//       {
//         id: "ww-001",
//         name: "Heavy-Duty Work Pants",
//         description: "Reinforced work pants with multiple tool pockets",
//         image:
//           "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         specifications: {
//           material: "65% Polyester, 35% Cotton Canvas",
//           weight: "320 GSM",
//           colors: ["Navy", "Khaki", "Black", "Brown"],
//           sizes: ["30", "32", "34", "36", "38", "40", "42", "44", "46"],
//         },
//         features: ["Reinforced knees", "Tool pockets", "Hammer loop", "Triple-stitched seams"],
//         priceRange: "$45-65",
//       },
//       {
//         id: "ww-002",
//         name: "High-Vis Safety Vest",
//         description: "ANSI compliant high-visibility safety vest",
//         image:
//           "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         specifications: {
//           material: "100% Polyester Mesh",
//           weight: "120 GSM",
//           colors: ["Safety Orange", "Safety Yellow", "Lime Green"],
//           sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
//         },
//         features: ["ANSI Class 2", "Reflective tape", "Breakaway design", "Breathable mesh"],
//         priceRange: "$25-35",
//       },
//     ],
//     prototypes: [
//       {
//         title: "Flame Resistance Testing",
//         image: "/flame-resistant-fabric-testing.jpg",
//         description: "Advanced flame resistance testing to meet NFPA 2112 standards",
//       },
//       {
//         title: "Abrasion Resistance Study",
//         image: "/fabric-abrasion-resistance-testing.jpg",
//         description: "Comprehensive abrasion testing to ensure long-lasting durability in harsh conditions",
//       },
//     ],
//     technicalSpecs: {
//       fabricComposition: "Heavy-duty cotton-polyester blends and specialized technical fabrics",
//       careInstructions: "Machine wash warm, tumble dry medium, avoid fabric softeners",
//       sustainability: "Recycled polyester content, responsible cotton sourcing, long-lasting construction",
//     },
//   },
// }

// export function getCategoryBySlug(slug: string): CategoryData | null {
//   return categoryData[slug] || null
// }

// export function getAllCategorySlugs(): string[] {
//   return Object.keys(categoryData)
// }
// Detailed category data with prototypes, specifications, and images
export interface CategoryProduct {
  id: string
  name: string
  description: string
  image: string
  specifications: {
    material: string
    weight: string
    colors: string[]
    sizes: string[]
  }
  features: string[]
  priceRange: string
}

export interface CategoryData {
  title: string
  slug: string
  tag: string
  description: string
  heroImage: string
  overview: string
  products: CategoryProduct[]
  prototypes: {
    title: string
    image: string
    description: string
  }[]
  technicalSpecs: {
    fabricComposition: string
    careInstructions: string
    sustainability: string
  }
}

export const categoryData: Record<string, CategoryData> = {
  "shorts-wear": {
    title: "Shorts Wear",
    slug: "shorts-wear",
    tag: "Athletic",
    description: "Lightweight and breathable fabric for active wear",
    heroImage: "/athletic-shorts-fabric-texture.jpg",
    overview:
      "Our shorts wear collection features lightweight, moisture-wicking fabrics designed for athletic performance and comfort. Perfect for sports, fitness, and active lifestyle applications.",
    products: [
      {
        id: "sw-001",
        name: "Athletic Performance Shorts",
        description: "Quick-dry athletic shorts with moisture-wicking technology",
        image: "/athletic-shorts-product-1.jpg",
        specifications: {
          material: "85% Polyester, 15% Spandex",
          weight: "140 GSM",
          colors: ["Black", "Navy", "Grey", "Royal Blue", "Red"],
          sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        },
        features: ["Quick-dry", "Moisture-wicking", "4-way stretch", "Anti-odor treatment"],
        priceRange: "$22-32",
      },
      {
        id: "sw-002",
        name: "Training Shorts",
        description: "Durable training shorts with reinforced seams",
        image: "/athletic-shorts-product-2.jpg",
        specifications: {
          material: "90% Polyester, 10% Elastane",
          weight: "160 GSM",
          colors: ["Black", "Charcoal", "Navy", "Forest Green"],
          sizes: ["S", "M", "L", "XL", "XXL"],
        },
        features: ["Reinforced seams", "Breathable mesh panels", "Elastic waistband", "Side pockets"],
        priceRange: "$28-38",
      },
    ],
    prototypes: [
      {
        title: "Advanced Moisture Management",
        image: "/moisture-wicking-prototype.jpg",
        description: "Next-generation moisture-wicking technology for superior performance",
      },
      {
        title: "Seamless Construction",
        image: "/seamless-shorts-prototype.jpg",
        description: "Innovative seamless construction for maximum comfort and reduced chafing",
      },
    ],
    technicalSpecs: {
      fabricComposition: "High-performance synthetic blends with moisture-wicking properties",
      careInstructions: "Machine wash cold, tumble dry low, no fabric softener",
      sustainability: "Made with recycled polyester, OEKO-TEX certified",
    },
  },
  "ns-lycra": {
    title: "NS Lycra",
    slug: "ns-lycra",
    tag: "Stretch",
    description: "High-performance stretch fabric with excellent recovery",
    heroImage: "/lycra-spandex-fabric-texture.jpg",
    overview:
      "Our NS Lycra collection offers exceptional stretch and recovery properties, making it ideal for activewear, swimwear, and form-fitting garments that require flexibility and comfort.",
    products: [
      {
        id: "nl-001",
        name: "High-Stretch Leggings",
        description: "Premium lycra leggings with 4-way stretch",
        image: "/lycra-leggings-product.jpg",
        specifications: {
          material: "78% Nylon, 22% Lycra",
          weight: "200 GSM",
          colors: ["Black", "Navy", "Burgundy", "Olive", "Purple"],
          sizes: ["XS", "S", "M", "L", "XL"],
        },
        features: ["4-way stretch", "Shape retention", "Compression fit", "Flatlock seams"],
        priceRange: "$35-45",
      },
      {
        id: "nl-002",
        name: "Stretch Sports Bra",
        description: "Supportive sports bra with lycra blend",
        image: "/lycra-sports-bra-product.jpg",
        specifications: {
          material: "82% Polyester, 18% Lycra",
          weight: "220 GSM",
          colors: ["Black", "White", "Grey", "Pink", "Teal"],
          sizes: ["XS", "S", "M", "L", "XL"],
        },
        features: ["Medium support", "Removable padding", "Moisture-wicking", "Stretch comfort"],
        priceRange: "$25-35",
      },
    ],
    prototypes: [
      {
        title: "Enhanced Recovery Technology",
        image: "/lycra-recovery-prototype.jpg",
        description: "Advanced lycra formulation for superior shape retention and recovery",
      },
      {
        title: "Compression Mapping",
        image: "/compression-mapping-prototype.jpg",
        description: "Strategic compression zones for optimal muscle support and performance",
      },
    ],
    technicalSpecs: {
      fabricComposition: "Premium lycra blends with nylon or polyester for optimal stretch and recovery",
      careInstructions: "Machine wash cold, hang dry, avoid heat and chlorine",
      sustainability: "LYCRA EcoMade fiber options available, reduced environmental impact",
    },
  },
  "terry-crush": {
    title: "Terry Crush",
    slug: "terry-crush",
    tag: "Comfort",
    description: "Soft terry fabric with crushed texture for comfort",
    heroImage: "/terry-cloth-fabric-texture.jpg",
    overview:
      "Our Terry Crush collection features luxuriously soft terry fabric with a unique crushed texture, perfect for loungewear, casual wear, and comfort-focused applications.",
    products: [
      {
        id: "tc-001",
        name: "Comfort Hoodie",
        description: "Soft terry hoodie with crushed texture finish",
        image: "/terry-hoodie-product.jpg",
        specifications: {
          material: "80% Cotton, 20% Polyester Terry",
          weight: "320 GSM",
          colors: ["Heather Grey", "Cream", "Sage", "Dusty Pink", "Navy"],
          sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        },
        features: ["Crushed texture", "Soft hand feel", "Kangaroo pocket", "Drawstring hood"],
        priceRange: "$45-65",
      },
      {
        id: "tc-002",
        name: "Lounge Pants",
        description: "Comfortable terry lounge pants with elastic waist",
        image: "/terry-lounge-pants-product.jpg",
        specifications: {
          material: "75% Cotton, 25% Polyester Terry",
          weight: "280 GSM",
          colors: ["Grey", "Cream", "Lavender", "Mint", "Charcoal"],
          sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        },
        features: ["Elastic waistband", "Side pockets", "Tapered fit", "Soft terry lining"],
        priceRange: "$35-50",
      },
    ],
    prototypes: [
      {
        title: "Texture Enhancement Process",
        image: "/terry-texture-prototype.jpg",
        description: "Specialized crushing technique for unique texture and enhanced softness",
      },
      {
        title: "Comfort Optimization",
        image: "/terry-comfort-testing.jpg",
        description: "Comprehensive comfort testing for optimal hand feel and drape",
      },
    ],
    technicalSpecs: {
      fabricComposition: "Cotton-polyester terry blends with specialized crushing treatment",
      careInstructions: "Machine wash warm, tumble dry medium, avoid fabric softeners",
      sustainability: "Organic cotton options available, low-impact dyeing processes",
    },
  },
  "ns-cotton": {
    title: "NS Cotton",
    slug: "ns-cotton",
    tag: "Natural",
    description: "Premium cotton blend for everyday comfort",
    heroImage: "/cotton-fabric-texture.jpg",
    overview:
      "Our NS Cotton collection showcases premium cotton blends that offer natural breathability, softness, and durability for everyday wear and casual applications.",
    products: [
      {
        id: "nc-001",
        name: "Classic T-Shirt",
        description: "Premium cotton t-shirt with superior softness",
        image: "/cotton-tshirt-product.jpg",
        specifications: {
          material: "100% Organic Cotton",
          weight: "180 GSM",
          colors: ["White", "Black", "Grey", "Navy", "Olive", "Burgundy"],
          sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        },
        features: ["Pre-shrunk", "Reinforced seams", "Tagless label", "Side-seamed construction"],
        priceRange: "$15-25",
      },
      {
        id: "nc-002",
        name: "Cotton Polo Shirt",
        description: "Classic polo shirt in premium cotton pique",
        image: "/cotton-polo-product.jpg",
        specifications: {
          material: "100% Cotton Pique",
          weight: "200 GSM",
          colors: ["White", "Black", "Navy", "Royal Blue", "Forest Green", "Red"],
          sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
        },
        features: ["Pique texture", "3-button placket", "Ribbed collar", "Side vents"],
        priceRange: "$25-35",
      },
    ],
    prototypes: [
      {
        title: "Organic Cotton Sourcing",
        image: "/organic-cotton-prototype.jpg",
        description: "Sustainable organic cotton sourcing for premium quality and environmental responsibility",
      },
      {
        title: "Softness Enhancement",
        image: "/cotton-softness-testing.jpg",
        description: "Advanced processing techniques for enhanced softness without compromising durability",
      },
    ],
    technicalSpecs: {
      fabricComposition: "Premium cotton varieties including organic and sustainable options",
      careInstructions: "Machine wash warm, tumble dry medium, iron if needed",
      sustainability: "GOTS certified organic cotton, low-impact dyes, water-efficient processing",
    },
  },
  "pc-cotton": {
    title: "PC Cotton",
    slug: "pc-cotton",
    tag: "Durable",
    description: "Poly-cotton blend for enhanced durability",
    heroImage: "/poly-cotton-blend-fabric.jpg",
    overview:
      "Our PC Cotton collection combines the comfort of cotton with the durability of polyester, creating versatile fabrics perfect for workwear, uniforms, and long-lasting garments.",
    products: [
      {
        id: "pc-001",
        name: "Work Shirt",
        description: "Durable poly-cotton work shirt with reinforced construction",
        image: "/poly-cotton-work-shirt-product.jpg",
        specifications: {
          material: "65% Polyester, 35% Cotton",
          weight: "240 GSM",
          colors: ["White", "Light Blue", "Khaki", "Navy", "Grey"],
          sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
        },
        features: ["Wrinkle-resistant", "Reinforced seams", "Chest pockets", "Easy care"],
        priceRange: "$30-45",
      },
      {
        id: "pc-002",
        name: "Uniform Pants",
        description: "Professional uniform pants in poly-cotton blend",
        image: "/poly-cotton-uniform-pants-product.jpg",
        specifications: {
          material: "60% Polyester, 40% Cotton",
          weight: "260 GSM",
          colors: ["Black", "Navy", "Khaki", "Charcoal"],
          sizes: ["28", "30", "32", "34", "36", "38", "40", "42"],
        },
        features: ["Stain-resistant", "Flat front", "Belt loops", "Professional fit"],
        priceRange: "$35-50",
      },
    ],
    prototypes: [
      {
        title: "Durability Enhancement",
        image: "/poly-cotton-durability-testing.jpg",
        description: "Advanced testing protocols to ensure maximum durability and longevity",
      },
      {
        title: "Comfort Optimization",
        image: "/poly-cotton-comfort-prototype.jpg",
        description: "Optimal polyester-cotton ratios for best balance of durability and comfort",
      },
    ],
    technicalSpecs: {
      fabricComposition: "Polyester-cotton blends optimized for durability and easy care",
      careInstructions: "Machine wash warm, tumble dry medium, minimal ironing required",
      sustainability: "Recycled polyester content, responsible cotton sourcing, long-lasting construction",
    },
  },
  velvet: {
    title: "Velvet",
    slug: "velvet",
    tag: "Luxury",
    description: "Rich velvet fabric for premium applications",
    heroImage: "/velvet-fabric-texture.jpg",
    overview:
      "Our Velvet collection features luxurious velvet fabrics with rich texture and elegant drape, perfect for premium fashion, upholstery, and special occasion garments.",
    products: [
      {
        id: "vt-001",
        name: "Luxury Blazer",
        description: "Premium velvet blazer with silk lining",
        image: "/velvet-blazer-product.jpg",
        specifications: {
          material: "92% Polyester, 8% Spandex Velvet",
          weight: "350 GSM",
          colors: ["Deep Navy", "Burgundy", "Forest Green", "Black", "Plum"],
          sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        },
        features: ["Silk lining", "Structured shoulders", "Notched lapels", "Two-button closure"],
        priceRange: "$120-180",
      },
      {
        id: "vt-002",
        name: "Velvet Dress",
        description: "Elegant velvet dress with stretch comfort",
        image: "/velvet-dress-product.jpg",
        specifications: {
          material: "95% Polyester, 5% Elastane Velvet",
          weight: "320 GSM",
          colors: ["Black", "Emerald", "Ruby", "Sapphire", "Amethyst"],
          sizes: ["XS", "S", "M", "L", "XL"],
        },
        features: ["Stretch comfort", "Elegant drape", "Hidden zipper", "Lined bodice"],
        priceRange: "$85-125",
      },
    ],
    prototypes: [
      {
        title: "Pile Density Optimization",
        image: "/velvet-pile-prototype.jpg",
        description: "Advanced pile construction techniques for optimal texture and durability",
      },
      {
        title: "Color Depth Enhancement",
        image: "/velvet-color-testing.jpg",
        description: "Specialized dyeing processes for rich, deep colors with excellent fastness",
      },
    ],
    technicalSpecs: {
      fabricComposition: "High-quality polyester velvet with optional stretch fibers",
      careInstructions: "Dry clean recommended, or gentle machine wash cold, hang dry",
      sustainability: "Recycled polyester options, low-impact dyeing, durable construction",
    },
  },
  tpu: {
    title: "TPU",
    slug: "tpu",
    tag: "Technical",
    description: "Thermoplastic polyurethane for technical applications",
    heroImage: "/tpu-technical-fabric-material.jpg",
    overview:
      "Our TPU collection features advanced thermoplastic polyurethane materials designed for technical applications requiring waterproofing, flexibility, and extreme durability.",
    products: [
      {
        id: "tpu-001",
        name: "Waterproof Jacket",
        description: "Technical jacket with TPU membrane for complete waterproofing",
        image: "/tpu-waterproof-jacket-product.jpg",
        specifications: {
          material: "Nylon with TPU Membrane",
          weight: "280 GSM",
          colors: ["Black", "Navy", "Orange", "Yellow"],
          sizes: ["S", "M", "L", "XL", "XXL"],
        },
        features: ["100% waterproof", "Breathable", "Sealed seams", "Adjustable hood"],
        priceRange: "$150-220",
      },
      {
        id: "tpu-002",
        name: "Technical Gloves",
        description: "Waterproof gloves with TPU coating",
        image: "/tpu-technical-gloves-product.jpg",
        specifications: {
          material: "Nylon with TPU Coating",
          weight: "180 GSM",
          colors: ["Black", "Hi-Vis Yellow", "Orange"],
          sizes: ["S", "M", "L", "XL"],
        },
        features: ["Waterproof coating", "Grip enhancement", "Flexible", "Chemical resistant"],
        priceRange: "$25-40",
      },
    ],
    prototypes: [
      {
        title: "Membrane Technology",
        image: "/tpu-membrane-prototype.png",
        description: "Advanced TPU membrane development for optimal waterproofing and breathability",
      },
      {
        title: "Durability Testing",
        image: "/tpu-durability-testing.jpg",
        description: "Rigorous testing protocols for extreme conditions and long-term performance",
      },
    ],
    technicalSpecs: {
      fabricComposition: "Thermoplastic polyurethane membranes and coatings on various substrates",
      careInstructions: "Wipe clean with damp cloth, avoid heat and sharp objects",
      sustainability: "Recyclable TPU materials, solvent-free processing, long product lifespan",
    },
  },
}

export function getCategoryBySlug(slug: string): CategoryData | null {
  return categoryData[slug] || null
}

export function getAllCategorySlugs(): string[] {
  return Object.keys(categoryData)
}
