"use client";

import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PricingIntervalToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const payment = searchParams.get("payment");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return pathname + "?" + params.toString();
    },
    [pathname, searchParams],
  );

  return (
    <button
      className="inline-flex items-center gap-2"
      onClick={() => {
        router.push(
          createQueryString(
            "payment",
            payment && payment === "annually" ? "monthly" : "annually",
          ),
          {
            scroll: false,
          },
        );
      }}
    >
      <div className="text-grayish-blue">Annually</div>
      <div className="relative w-14 rounded-full bg-gradient-primary p-1">
        <span
          className={cn(
            "block size-6 rounded-full bg-white transition duration-200",
            payment === "annually" ? "translate-x-0" : "translate-x-full",
          )}
        ></span>
      </div>
      <div className="text-grayish-blue">Monthly</div>
    </button>
  );
}
