import type { BedroomPrices } from "./pricing";

export type Service = {
  slug: string;
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  includes: string[];
  idealFor: string;
  priceFrom: string;
  pricingType: "bedroom" | "hourly" | "perRoom" | "flat";
  bedroomPrices?: BedroomPrices;
  hourlyRate?: string;
  perRoomRate?: string;
  flatNote?: string;
};

export const services: Service[] = [
  {
    slug: "regular-weekly-cleaning",
    title: "Regular Weekly / Fortnightly Cleaning",
    image: "/images/regular-weekly-cleaning.jpg",
    shortDescription:
      "Scheduled home cleaning to keep your property consistently fresh and tidy.",
    description:
      "Our regular cleaning service is ideal for busy households who want a reliable cleaner on a weekly or fortnightly basis. We work to your priorities and aim to send the same trusted cleaner where possible.",
    includes: [
      "Dusting and vacuuming all rooms",
      "Kitchen surfaces and appliance exteriors",
      "Bathroom sanitising and polishing",
      "Floors mopped and rubbish emptied",
      "Beds made and general tidying",
    ],
    idealFor: "Families, professionals and busy homeowners",
    priceFrom: "From £60",
    pricingType: "bedroom",
    bedroomPrices: {
      studio: "£60",
      oneBed: "£75",
      twoBed: "£95",
      threeBed: "£120",
      fourBedPlus: "£150+",
    },
  },
  {
    slug: "domestic-cleaning",
    title: "Domestic Cleaning",
    image: "/images/domestic-cleaning.jpg",
    shortDescription:
      "Flexible home cleaning for one-off visits or ongoing maintenance.",
    description:
      "Our domestic cleaning service covers everything from quick tidy-ups to full home cleans. We tailor each visit to your needs — kitchens, bathrooms, living spaces or the whole property.",
    includes: [
      "Dusting and vacuuming all rooms",
      "Kitchen surfaces and appliance exteriors",
      "Bathroom sanitising and polishing",
      "Floors mopped and rubbish emptied",
      "Beds made and surfaces wiped",
    ],
    idealFor: "Homeowners, renters and families across North West London",
    priceFrom: "From £18/hour",
    pricingType: "hourly",
    hourlyRate: "From £18/hour",
    bedroomPrices: {
      studio: "£60",
      oneBed: "£75",
      twoBed: "£95",
      threeBed: "£120",
      fourBedPlus: "£150+",
    },
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    image: "/images/deep-cleaning.jpg",
    shortDescription:
      "Intensive top-to-bottom cleaning for homes that need extra attention.",
    description:
      "Our deep clean reaches behind appliances, inside cupboards, skirting boards and every corner missed in day-to-day cleaning. Perfect before events, after renovations or as a seasonal refresh.",
    includes: [
      "Inside ovens, fridges and cupboards",
      "Degreasing kitchen and bathroom tiles",
      "Skirting boards, doors and light switches",
      "Behind and under furniture (where accessible)",
      "Detailed dusting of all surfaces",
    ],
    idealFor: "Spring cleans, post-renovation and one-off refreshes",
    priceFrom: "From £130",
    pricingType: "bedroom",
    bedroomPrices: {
      studio: "£130",
      oneBed: "£150",
      twoBed: "£200",
      threeBed: "£250",
      fourBedPlus: "£300+",
    },
  },
  {
    slug: "spring-one-off-clean",
    title: "Spring / One-Off Clean",
    image: "/images/spring-cleaning.jpg",
    shortDescription:
      "A thorough seasonal refresh or single-visit home spruce-up.",
    description:
      "Whether it's spring cleaning season or you need a one-off reset, this service gives your home a comprehensive refresh without the intensity of a full deep clean or tenancy standard.",
    includes: [
      "Full dusting and vacuuming throughout",
      "Kitchen and bathroom deep wipe-down",
      "Interior windows (where accessible)",
      "Skirting boards and door frames",
      "Floors mopped and polished",
    ],
    idealFor: "Seasonal refreshes, pre-guest visits and home resets",
    priceFrom: "From £100",
    pricingType: "bedroom",
    bedroomPrices: {
      studio: "£100",
      oneBed: "£120",
      twoBed: "£160",
      threeBed: "£200",
      fourBedPlus: "£240+",
    },
  },
  {
    slug: "end-of-tenancy-cleaning",
    title: "End of Tenancy Cleaning",
    image: "/images/cleaning-equipment.jpg",
    shortDescription:
      "Landlord-approved cleaning to help secure your deposit return.",
    description:
      "Moving out? Our end of tenancy clean meets the standards expected by landlords and letting agents across Harrow and surrounding areas. We follow a comprehensive checklist for inspection-ready results.",
    includes: [
      "Full deep clean of all rooms",
      "Oven, hob and extractor fan degrease",
      "Bathroom limescale and grout treatment",
      "Inside windows (where accessible)",
      "Carpet vacuum and hard floor mop",
    ],
    idealFor: "Tenants, landlords and letting agents",
    priceFrom: "From £160",
    pricingType: "bedroom",
    bedroomPrices: {
      studio: "£160",
      oneBed: "£180",
      twoBed: "£220",
      threeBed: "£280",
      fourBedPlus: "£320+",
    },
  },
  {
    slug: "after-builders-cleaning",
    title: "After-Builders Cleaning",
    image: "/images/after-builders-cleaning.jpg",
    shortDescription:
      "Post-construction and renovation cleaning to make spaces move-in ready.",
    description:
      "Renovations leave dust, debris and residue everywhere. Our after-builders clean removes construction mess from floors, surfaces, windows and fixtures so your property is spotless and habitable.",
    includes: [
      "Fine dust removal from all surfaces",
      "Window and frame cleaning inside and out",
      "Kitchen and bathroom fixture polish",
      "Floor scrubbing and vacuuming",
      "Paint splatter and adhesive residue removal",
    ],
    idealFor: "Homeowners, developers and landlords post-renovation",
    priceFrom: "From £180",
    pricingType: "bedroom",
    bedroomPrices: {
      studio: "£180",
      oneBed: "£200",
      twoBed: "£280",
      threeBed: "£350",
      fourBedPlus: "£420+",
    },
  },
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    image: "/images/office-cleaning.jpg",
    shortDescription:
      "Professional commercial cleaning for offices, studios and workspaces.",
    description:
      "A clean workspace improves productivity and impresses clients. We offer flexible scheduling — early morning, evening or weekend cleans — to minimise disruption to your business.",
    includes: [
      "Desks, workstations and meeting rooms",
      "Kitchen and breakout areas",
      "Reception and communal spaces",
      "Bins emptied and floors cleaned",
      "Toilets sanitised and restocked",
    ],
    idealFor: "Offices, retail units, clinics and co-working spaces",
    priceFrom: "From £25/hour",
    pricingType: "hourly",
    hourlyRate: "From £25/hour",
    flatNote: "Commercial quotes based on size and frequency",
  },
  {
    slug: "carpet-upholstery-cleaning",
    title: "Carpet & Upholstery Cleaning",
    image: "/images/carpet-upholstery-cleaning.jpg",
    shortDescription:
      "Professional stain removal and deep fabric refresh for carpets and furniture.",
    description:
      "Restore carpets, rugs and upholstery with our specialist cleaning service. We tackle stains, odours and embedded dirt to leave fabrics looking and smelling fresh.",
    includes: [
      "Hot water extraction / steam cleaning",
      "Stain pre-treatment",
      "Deodorising treatment",
      "Sofa and armchair cleaning",
      "Rug and carpet deep clean",
    ],
    idealFor: "Homes, rental properties and commercial spaces",
    priceFrom: "From £40/room",
    pricingType: "perRoom",
    perRoomRate: "From £40 per room",
    flatNote: "Sofa cleaning from £50 per item",
  },
  {
    slug: "gardening",
    title: "Gardening Services",
    image: "/images/gardening.jpg",
    shortDescription:
      "Lawn care, pruning and garden maintenance for tidy outdoor spaces.",
    description:
      "Keep your garden looking its best with our gardening services. From regular lawn mowing to hedge trimming and seasonal tidy-ups, we help maintain attractive outdoor spaces.",
    includes: [
      "Lawn mowing and edging",
      "Hedge and shrub trimming",
      "Weeding and bed maintenance",
      "Green waste bagging",
      "Seasonal garden tidy-ups",
    ],
    idealFor: "Homeowners, landlords and property managers",
    priceFrom: "From £50/hour",
    pricingType: "hourly",
    hourlyRate: "From £50/hour",
    flatNote: "Lawn mowing from £40 · Hedge trimming from £60",
  },
  {
    slug: "emergency-cleaning",
    title: "Emergency Cleaning",
    image: "/images/emergency-cleaning.jpg",
    shortDescription:
      "Rapid response cleaning for spills, floods and urgent situations.",
    description:
      "When the unexpected happens, we respond quickly. Whether it's a flood, party clean-up or urgent pre-inspection situation, our team is available for same-day emergency cleaning where possible.",
    includes: [
      "Same-day response (where available)",
      "Spill and flood clean-up",
      "Sanitisation and deodorising",
      "Waste removal and disposal",
      "Fast turnaround for inspections",
    ],
    idealFor: "Urgent domestic and commercial situations",
    priceFrom: "From £80",
    pricingType: "flat",
    flatNote: "£80 call-out fee + £30/hour thereafter",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
