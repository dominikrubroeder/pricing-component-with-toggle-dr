import Card from "@/components/card";
import { cn } from "@/lib/utils";
import { PaymentInterval, PricingOption } from "@/components/pricing/types";
import { ReactNode } from "react";
import { SearchParam } from "@/lib/types";

export default function PricingCard({
  pricingOption,
  paymentInterval,
  className,
  children,
}: {
  pricingOption: PricingOption;
  paymentInterval: PaymentInterval | SearchParam;
  children: ReactNode;
  className?: string;
}) {
  const { priority, title, priceMonthly, priceAnnually } = pricingOption;

  return (
    <Card
      className={cn(
        "overflow-hidden rounded-md p-8 text-center",
        priority ? "z-50 bg-gradient-primary text-white" : "bg-white",
        className,
      )}
    >
      <div className="mx-auto max-w-screen-sm space-y-4">
        <h2>{title}</h2>
        <p
          className={cn(
            "mb-8 mt-6 inline-flex items-center gap-2",
            priority ? "text-white" : "text-dark-grayish-blue",
          )}
        >
          <span className="text-4xl">$</span>
          <span className="text-7xl font-bold lg:text-6xl xl:text-7xl">
            {paymentInterval === "monthly" ? priceMonthly : priceAnnually}
          </span>
        </p>
        <div>{children}</div>
        <button
          className={cn(
            "w-full rounded-md p-3.5 text-xs font-bold uppercase tracking-widest",
            priority
              ? "bg-white text-grayish-blue"
              : "bg-gradient-primary text-white",
          )}
        >
          Learn more
        </button>
      </div>
    </Card>
  );
}
