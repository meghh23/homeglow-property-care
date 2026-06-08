export type Area = {
  slug: string;
  name: string;
  description: string;
  highlights: string[];
};

export const areas: Area[] = [
  {
    slug: "harrow",
    name: "Harrow",
    description:
      "Based in Harrow, HomeGlow Property Care is your local cleaning specialist. We serve residential streets, family homes and commercial properties throughout the borough with reliable, fully insured cleaning.",
    highlights: ["Harrow on the Hill", "Wealdstone", "Kenton", "North Harrow"],
  },
  {
    slug: "wembley",
    name: "Wembley",
    description:
      "We provide domestic, office and end of tenancy cleaning across Wembley and the surrounding area. Flexible scheduling and competitive rates for homes and businesses near Wembley Stadium and Wembley Park.",
    highlights: ["Wembley Park", "Alperton", "Tokyngton", "Sudbury"],
  },
  {
    slug: "pinner",
    name: "Pinner",
    description:
      "Trusted cleaning services for Pinner residents and businesses. From regular domestic cleans to deep cleans and tenancy handovers, our professional team delivers consistent, high-quality results.",
    highlights: ["Pinner Village", "Eastcote", "Northwood Hills", "Hatch End"],
  },
  {
    slug: "ruislip",
    name: "Ruislip",
    description:
      "HomeGlow covers Ruislip and nearby neighbourhoods with affordable, professional cleaning. Whether you need a weekly home clean or a one-off deep clean, we are ready to help.",
    highlights: ["Ruislip Manor", "South Ruislip", "Eastcote", "Ickenham"],
  },
  {
    slug: "northwood",
    name: "Northwood",
    description:
      "Professional cleaning for homes and offices in Northwood. Our experienced team uses eco-friendly products and flexible booking to fit your schedule.",
    highlights: ["Northwood Town", "Moor Park", "Northwood Hills"],
  },
  {
    slug: "stanmore",
    name: "Stanmore",
    description:
      "Reliable cleaning services across Stanmore for busy families, professionals and landlords. Domestic, deep and end of tenancy cleans available.",
    highlights: ["Stanmore Broadway", "Canons Park", "Queensbury"],
  },
  {
    slug: "edgware",
    name: "Edgware",
    description:
      "HomeGlow serves Edgware with the same high standards we bring to every job — insured professionals, eco-friendly products and satisfaction guaranteed.",
    highlights: ["Edgware Broadway", "Burnt Oak", "Mill Hill"],
  },
  {
    slug: "watford",
    name: "Watford",
    description:
      "We extend our cleaning services to Watford and nearby areas, offering domestic, office and deep cleaning for homes and businesses.",
    highlights: ["Watford Town Centre", "Cassiobury", "Nascot Wood"],
  },
  {
    slug: "northolt",
    name: "Northolt",
    description:
      "Affordable, professional cleaning across Northolt. Regular domestic cleans, deep cleans and tenancy cleaning available with flexible scheduling.",
    highlights: ["Northolt Village", "South Ruislip border", "Greenford"],
  },
  {
    slug: "uxbridge",
    name: "Uxbridge",
    description:
      "HomeGlow provides cleaning services in Uxbridge for homes, offices and rental properties. Contact us for a free, no-obligation quote.",
    highlights: ["Uxbridge Town Centre", "Hillingdon", "Cowley"],
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
