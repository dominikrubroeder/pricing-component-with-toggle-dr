export type PricingOption = {
  title: string;
  priceMonthly: string;
  priceAnnually: string;
  priority?: boolean;
  features: string[];
};

export type PaymentInterval = "monthly" | "annually";
