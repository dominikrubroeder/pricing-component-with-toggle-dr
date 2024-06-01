import React from "react";
import PricingCard from "@/components/pricing/pricing-card";
import { pricingOptions } from "@/components/pricing/data";
import PricingToggle from "@/components/pricing/pricing-toggle";
import { SearchParam } from "@/lib/types";

export default function Pricing({ payment }: { payment: SearchParam }) {
  return (
    <section className="w-full space-y-12 px-4">
      <h1 className="text-center text-4xl font-bold text-grayish-blue">
        Our pricing
      </h1>

      <div className="mx-auto text-center">
        <PricingToggle />
      </div>

      <div className="mx-auto grid gap-4 px-4 lg:max-w-screen-xl lg:grid-cols-3 lg:gap-0">
        {pricingOptions.map((pricingOption) => (
          <PricingCard
            key={pricingOption.title}
            pricingOption={pricingOption}
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
