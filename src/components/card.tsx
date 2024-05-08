import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
  ...restProps
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("rounded-md p-4", className)} {...restProps}>
      {children}
    </div>
  );
}
