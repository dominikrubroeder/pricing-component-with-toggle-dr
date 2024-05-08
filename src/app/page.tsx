import PricingCard from "@/components/pricing-card";

export default function Home() {
  return (
    <div>
      <section className="mx-auto grid max-w-screen-xl grid-cols-3 gap-4 px-4">
        <PricingCard
          title="Basic"
          price="19.99"
          buttonLabel="Learn More"
          className="bg-white"
        >
          <ul className="border-t">
            <li className="border-b py-3">500 GB Storage</li>
            <li className="border-b py-3">2 Users Allowed</li>
            <li className="border-b py-3">Send up to 3 GB</li>
          </ul>
        </PricingCard>

        <PricingCard
          title="Professional"
          price="24.99"
          buttonLabel="Learn More"
          className="bg-gradient-primary text-white"
        >
          <ul>
            <li>
              <hr className="opacity-25" />
            </li>
            <li className="py-3">1 TB Storage</li>
            <li>
              <hr className="opacity-25" />
            </li>
            <li className="py-3">5 Users Allowed</li>
            <li>
              <hr className="opacity-25" />
            </li>
            <li className="py-3">Send up to 10 GB</li>
            <li>
              <hr className="opacity-25" />
            </li>
          </ul>
        </PricingCard>

        <PricingCard
          title="Master"
          price="39.99"
          buttonLabel="Learn More"
          className="bg-white"
        >
          <ul className="border-t">
            <li className="border-b py-3">2 TB Storage</li>
            <li className="border-b py-3">10 Users Allowed</li>
            <li className="border-b py-3">Send up to 20 GB</li>
          </ul>
        </PricingCard>
      </section>
    </div>
  );
}
