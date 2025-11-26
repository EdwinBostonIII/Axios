export interface Product {
  slug: string;
  name: string;
  greekName: string;
  greekText: string;
  motto: string;
  scripture: string;
  scriptureRef: string;
  visualElement: string;
  description: string;
  longDescription: string;
  ingredients: string[];
  brewingInstructions: {
    amount: string;
    temperature: string;
    time: string;
  };
  caffeine: string;
  price: number;
  size: string;
  cups: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    slug: "kairos",
    name: "Kairos",
    greekName: "καιρός",
    greekText: "καιρός",
    motto: "The Appointed Hour",
    scripture: "To everything there is a season, and a time to every purpose under the heaven.",
    scriptureRef: "Ecclesiastes 3:1",
    visualElement: "Balance scale in warm gold",
    description: "Our signature chai—balanced, approachable, and perfect for your daily ritual.",
    longDescription: "Kairos (καιρός) means 'the appointed time, the opportune moment' and appears throughout Scripture to describe moments of divine significance. Unlike chronos (ordinary time), kairos represents time charged with purpose and meaning. This is the balanced everyday chai designed for broad appeal, the gateway product that introduces customers to the AXIOS experience.",
    ingredients: ["CTC Assam Tea", "Green Cardamom", "Black Pepper", "Ginger", "Ceylon Cinnamon", "Cloves", "Nutmeg", "Star Anise", "Mace"],
    brewingInstructions: {
      amount: "2.5g per 6oz",
      temperature: "200°F",
      time: "3-4 minutes"
    },
    caffeine: "Moderate (~50mg per cup)",
    price: 22.00,
    size: "2 oz",
    cups: "~22 cups",
    category: "Signature",
    featured: true
  },
  {
    slug: "dynamis",
    name: "Dynamis",
    greekName: "δύναμις",
    greekText: "δύναμις",
    motto: "Strength for the Day",
    scripture: "They that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles.",
    scriptureRef: "Isaiah 40:31",
    visualElement: "Stylized lion in deep navy",
    description: "Maximum intensity for those who demand boldness from their morning ritual.",
    longDescription: "Dynamis (δύναμις) means 'power, strength, might' and appears over 100 times in the New Testament, often describing divine power working through human vessels. This is maximum intensity for those who demand boldness from their morning ritual. The aggressive spice profile and robust body deliver an uncompromising experience.",
    ingredients: ["CTC Assam Tea (60%)", "Green Cardamom", "Black Pepper (extra)", "Ginger (extra)", "Ceylon Cinnamon", "Cloves", "Nutmeg", "Star Anise", "Mace"],
    brewingInstructions: {
      amount: "3g per 6oz",
      temperature: "212°F (boiling)",
      time: "4-5 minutes"
    },
    caffeine: "High (~60mg per cup)",
    price: 24.00,
    size: "2 oz",
    cups: "~22 cups",
    category: "Strength",
    featured: true
  },
  {
    slug: "hesychia",
    name: "Hesychia",
    greekName: "ἡσυχία",
    greekText: "ἡσυχία",
    motto: "Peace in the Evening",
    scripture: "Be still, and know that I am God.",
    scriptureRef: "Psalm 46:10",
    visualElement: "Crescent moon with olive branch",
    description: "Our beloved spice profile on a caffeine-free rooibos base—perfect for evening enjoyment.",
    longDescription: "Hesychia (ἡσυχία) means 'quietness, stillness, rest' and appears in the epistles as a virtue of contemplative peace (1 Thessalonians 4:11). Same beloved spice profile on a caffeine-free rooibos base. Allows customers to enjoy AXIOS throughout the day without caffeine concerns. Rooibos is naturally 100% caffeine-free, has very low tannins, and offers natural vanilla-like sweetness.",
    ingredients: ["South African Rooibos", "Green Cardamom", "Black Pepper", "Ginger", "Ceylon Cinnamon", "Cloves", "Nutmeg", "Star Anise", "Mace"],
    brewingInstructions: {
      amount: "2.5g per 6oz",
      temperature: "212°F (boiling)",
      time: "5-7 minutes"
    },
    caffeine: "Caffeine-Free (0mg)",
    price: 22.00,
    size: "2 oz",
    cups: "~22 cups",
    category: "Evening",
    featured: true
  },
  {
    slug: "eklektos",
    name: "Eklektos",
    greekName: "ἐκλεκτός",
    greekText: "ἐκλεκτός",
    motto: "Chosen with Purpose",
    scripture: "But ye are a chosen generation, a royal priesthood, a holy nation.",
    scriptureRef: "1 Peter 2:9",
    visualElement: "Golden leaf with crown",
    description: "Single-origin second flush Assam with premium whole spices—our most refined expression.",
    longDescription: "Eklektos (ἐκλεκτός) means 'chosen, elect, select' and appears in Matthew 22:14: 'Many are called, but few are chosen.' Single-origin second flush Assam with premium whole spices for the elevated price point. This product targets gift giving and special occasions, featuring traceable origin and hand-selected ingredients from renowned growing regions.",
    ingredients: ["Second Flush Assam TGFOP", "Guatemalan Green Cardamom", "Tellicherry Black Peppercorns", "Kerala Dried Ginger", "Sri Lankan Ceylon Cinnamon", "Zanzibar Whole Cloves", "Grenadian Nutmeg", "Vietnamese Star Anise", "Indonesian Mace"],
    brewingInstructions: {
      amount: "3g per 6oz",
      temperature: "200°F",
      time: "4-5 minutes"
    },
    caffeine: "Moderate-High (~55mg per cup)",
    price: 38.00,
    size: "2 oz tin",
    cups: "~22 cups",
    category: "Reserve",
    featured: true
  },
  {
    slug: "charis",
    name: "Charis",
    greekName: "χάρις",
    greekText: "χάρις",
    motto: "Grace in Every Moment",
    scripture: "My grace is sufficient for thee: for my strength is made perfect in weakness.",
    scriptureRef: "2 Corinthians 12:9",
    visualElement: "Radiating golden rays",
    description: "Pre-sweetened instant chai powder for quick, convenient preparation without compromise.",
    longDescription: "Charis (χάρις) means 'grace, favor, gift' and is one of the most frequent words in the New Testament, describing unmerited blessing freely given. Pre-sweetened instant chai powder for quick preparation. Targets convenience seekers and office consumption. Designed for mixing with hot water or milk, bringing the AXIOS experience to moments when time is short but quality still matters.",
    ingredients: ["Instant Black Tea Powder", "Coconut Milk Powder", "Coconut Sugar", "Cardamom", "Ginger", "Cinnamon", "Black Pepper", "Cloves", "Turmeric"],
    brewingInstructions: {
      amount: "2 tbsp per 8oz",
      temperature: "Hot water or milk",
      time: "Stir until dissolved"
    },
    caffeine: "Moderate (~40mg per serving)",
    price: 28.00,
    size: "8 oz canister",
    cups: "~16 servings",
    category: "Latte Mix",
    featured: false
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}
