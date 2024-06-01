import { PricingOption } from "@/components/pricing/types";

export const pricingOptions: PricingOption[] = [
  {
    title: "Basic",
    priceMonthly: "19.99",
    priceAnnually: "199.99",
    priority: false,
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    title: "Professional",
    priceMonthly: "24.99",
    priceAnnually: "249.99",
    priority: true,
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    title: "Master",
    priceMonthly: "39.99",
    priceAnnually: "399.99",
    priority: false,
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];
