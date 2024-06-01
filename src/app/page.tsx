import Pricing from "@/components/pricing/pricing";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const payment = searchParams.payment;

  return (
    <div className="flex min-h-svh items-center justify-center">
      <Pricing payment={payment} />
    </div>
  );
}
