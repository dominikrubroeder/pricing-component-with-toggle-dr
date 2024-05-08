import Card from "@/components/card";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function PricingCard({
  title,
  price,
  buttonLabel,
  children,
  className,
}: {
  title: string;
  price: string;
  buttonLabel: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("space-y-4 rounded-md p-4 text-center", className)}>
      <h2>{title}</h2>
      <p className="mb-8 mt-6 inline-flex items-center gap-2">
        <span className="text-4xl">$</span>
        <span className="text-7xl font-bold">{price}</span>
      </p>
      <div>{children}</div>
      <button className="p-3.5 text-xs uppercase tracking-widest">
        {buttonLabel}
      </button>
    </Card>
  );
}
