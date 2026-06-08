export type BedroomPrices = {
  studio: string;
  oneBed: string;
  twoBed: string;
  threeBed: string;
  fourBedPlus?: string;
};

export type ServicePricing = {
  slug: string;
  title: string;
  image: string;
  priceFrom: string;
  pricingType: "bedroom" | "hourly" | "perRoom" | "flat";
  bedroomPrices?: BedroomPrices;
  hourlyRate?: string;
  perRoomRate?: string;
  flatNote?: string;
  shortDescription: string;
};

export const servicePricing: ServicePricing[] = [
  {
    slug: "regular-weekly-cleaning",
    title: "Regular Weekly / Fortnightly",
    image: "/images/regular-weekly-cleaning.jpg",
    priceFrom: "From £60",
    pricingType: "bedroom",
    bedroomPrices: {
      studio: "£60",
      oneBed: "£75",
      twoBed: "£95",
      threeBed: "£120",
      fourBedPlus: "£150+",
    },
    shortDescription: "Ongoing home maintenance on a schedule that suits you.",
  },
  {
    slug: "domestic-cleaning",
    title: "Domestic Cleaning",
    image: "/images/domestic-cleaning.jpg",
    priceFrom: "From £18/hr",
    pricingType: "hourly",
    hourlyRate: "From £18/hour",
    bedroomPrices: {
      studio: "£60",
      oneBed: "£75",
      twoBed: "£95",
      threeBed: "£120",
      fourBedPlus: "£150+",
    },
    shortDescription: "Flexible one-off or regular home cleaning.",
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    image: "/images/deep-cleaning.jpg",
    priceFrom: "From £130",
    pricingType: "bedroom",
    bedroomPrices: {
      studio: "£130",
      oneBed: "£150",
      twoBed: "£200",
      threeBed: "£250",
      fourBedPlus: "£300+",
    },
    shortDescription: "Intensive top-to-bottom clean for every corner.",
  },
  {
    slug: "spring-one-off-clean",
    title: "Spring / One-Off Clean",
    image: "/images/spring-cleaning.jpg",
    priceFrom: "From £100",
    pricingType: "bedroom",
    bedroomPrices: {
      studio: "£100",
      oneBed: "£120",
      twoBed: "£160",
      threeBed: "£200",
      fourBedPlus: "£240+",
    },
    shortDescription: "Seasonal refresh or one-off home spruce-up.",
  },
  {
    slug: "end-of-tenancy-cleaning",
    title: "End of Tenancy Cleaning",
    image: "/images/cleaning-equipment.jpg",
    priceFrom: "From £160",
    pricingType: "bedroom",
    bedroomPrices: {
      studio: "£160",
      oneBed: "£180",
      twoBed: "£220",
      threeBed: "£280",
      fourBedPlus: "£320+",
    },
    shortDescription: "Deposit-return standard for tenants and landlords.",
  },
  {
    slug: "after-builders-cleaning",
    title: "After-Builders Cleaning",
    image: "/images/after-builders-cleaning.jpg",
    priceFrom: "From £180",
    pricingType: "bedroom",
    bedroomPrices: {
      studio: "£180",
      oneBed: "£200",
      twoBed: "£280",
      threeBed: "£350",
      fourBedPlus: "£420+",
    },
    shortDescription: "Post-renovation dust and debris removal.",
  },
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    image: "/images/office-cleaning.jpg",
    priceFrom: "From £25/hr",
    pricingType: "hourly",
    hourlyRate: "From £25/hour",
    flatNote: "Commercial quotes based on size and frequency",
    shortDescription: "Offices, retail units and workspaces.",
  },
  {
    slug: "carpet-upholstery-cleaning",
    title: "Carpet & Upholstery",
    image: "/images/carpet-upholstery-cleaning.jpg",
    priceFrom: "From £40/room",
    pricingType: "perRoom",
    perRoomRate: "From £40 per room",
    flatNote: "Sofa cleaning from £50 per item",
    shortDescription: "Stain removal and fabric deep refresh.",
  },
  {
    slug: "gardening",
    title: "Gardening Services",
    image: "/images/gardening.jpg",
    priceFrom: "From £50",
    pricingType: "hourly",
    hourlyRate: "From £50/hour",
    flatNote: "Lawn mowing from £40 · Hedge trimming from £60",
    shortDescription: "Lawn care, pruning and garden maintenance.",
  },
  {
    slug: "emergency-cleaning",
    title: "Emergency Cleaning",
    image: "/images/emergency-cleaning.jpg",
    priceFrom: "From £80",
    pricingType: "flat",
    flatNote: "£80 call-out + £30/hour · Same-day where available",
    shortDescription: "Urgent spills, floods and unexpected messes.",
  },
];

export const propertySizeTable: {
  label: string;
  regular: string;
  deep: string;
  tenancy: string;
}[] = [
  { label: "Studio", regular: "£60", deep: "£130", tenancy: "£160" },
  { label: "1 Bedroom", regular: "£75", deep: "£150", tenancy: "£180" },
  { label: "2 Bedrooms", regular: "£95", deep: "£200", tenancy: "£220" },
  { label: "3 Bedrooms", regular: "£120", deep: "£250", tenancy: "£280" },
  { label: "4+ Bedrooms", regular: "£150+", deep: "£300+", tenancy: "£320+" },
];

export const pricingNotes = [
  "All prices are estimates — final quotes depend on property size, condition, location and workload.",
  "Prices may vary between Harrow, Wembley, Pinner and surrounding areas.",
  "Heavily soiled properties, hoarding or extreme mess may incur additional charges.",
  "All quotes are free and tailored to your property — no hidden fees.",
  "Discounts available for regular weekly or fortnightly bookings.",
];

export function getServicePricing(slug: string): ServicePricing | undefined {
  return servicePricing.find((s) => s.slug === slug);
}
