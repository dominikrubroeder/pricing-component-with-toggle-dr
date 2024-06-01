"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useCreateQueryString } from "@/hooks/useCreateQueryString";

export default function PricingToggle() {
  const router = useRouter();
  const { createQueryString, searchParams } = useCreateQueryString();
  const payment = searchParams.get("payment");

  const toggle = () =>
    router.push(
      createQueryString(
        "payment",
        payment && payment === "annually" ? "monthly" : "annually",
      ),
      {
        scroll: false,
      },
    );

  const setAnnually = () =>
    router.push(createQueryString("payment", "annually"), {
      scroll: false,
    });

  const setMonthly = () =>
    router.push(createQueryString("payment", "monthly"), {
      scroll: false,
    });

  return (
    <div className="inline-flex select-none items-center gap-2">
      <button className="text-grayish-blue" onClick={setAnnually}>
        Annually
      </button>

      <button
        className="relative w-14 rounded-full bg-gradient-primary p-1"
        onClick={toggle}
      >
        <span
          className={cn(
            "block size-6 rounded-full bg-white transition duration-200",
            payment === "annually" ? "translate-x-0" : "translate-x-full",
          )}
        ></span>
      </button>

      <button className="text-grayish-blue" onClick={setMonthly}>
        Monthly
      </button>
    </div>
  );
}
