import React from "react";
import PricingCard from "@/components/pricing/pricing-card";
import { pricingOptions } from "@/components/pricing/data";
import PricingToggle from "@/components/pricing/pricing-toggle/pricing-toggle";

export default function Pricing({
  payment,
}: {
  payment: string | string[] | undefined;
}) {
  return (
    <section className="space-y-12">
      <h1 className="text-center text-4xl font-bold text-grayish-blue">
        Our pricing
      </h1>

      <div className="mx-auto text-center">
        <PricingToggle />
      </div>

      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-3 gap-4 px-4">
        {pricingOptions.map((pricingOption) => (
          <PricingCard
            key={pricingOption.title}
            title={pricingOption.title}
            priceMonthly={pricingOption.priceMonthly}
            priceAnnually={pricingOption.priceMonthly}
            priority={pricingOption.priority}
            paymentInterval={payment}
          >
            <ul>
              {pricingOption.features.map((feature) => (
                <React.Fragment key={feature}>
                  <li>
                    <hr
                      className={
                        pricingOption.priority ? "opacity-25" : "opacity-100"
                      }
                    />
                  </li>
                  <li className="py-3">{feature}</li>
                </React.Fragment>
              ))}
              <li>
                <hr className="opacity-25" />
              </li>
            </ul>
          </PricingCard>
        ))}
      </div>
    </section>
  );
}
