export const pricingOptions: {
  title: string;
  priceAnnually: string;
  priceMonthly: string;
  priority: boolean;
  features: string[];
}[] = [
  {
    title: "Basic",
    priceAnnually: "119.99",
    priceMonthly: "19.99",
    priority: false,
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    title: "Professional",
    priceAnnually: "119.99",
    priceMonthly: "24.99",
    priority: true,
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    title: "Master",
    priceAnnually: "119.99",
    priceMonthly: "39.99",
    priority: false,
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];
