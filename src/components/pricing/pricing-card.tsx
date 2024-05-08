import Card from "@/components/card";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function PricingCard({
  title,
  priceMonthly,
  priceAnnually,
  children,
  className,
  priority,
  paymentInterval,
}: {
  title: string;
  priceMonthly: string;
  priceAnnually: string;
  children: ReactNode;
  className?: string;
  priority?: boolean;
  paymentInterval: string | undefined;
}) {
  return (
    <Card
      className={cn(
        "space-y-4 rounded-md p-8 text-center",
        priority ? "bg-gradient-primary text-white" : "bg-white",
        className,
      )}
    >
      <h2>{title}</h2>
      <p
        className={cn(
          "mb-8 mt-6 inline-flex items-center gap-2",
          priority ? "text-white" : "text-dark-grayish-blue",
        )}
      >
        <span className="text-4xl">$</span>
        <span className="text-7xl font-bold">{priceMonthly}</span>
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
    </Card>
  );
}
