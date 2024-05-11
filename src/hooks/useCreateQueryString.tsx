import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useCreateQueryString = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return pathname + "?" + params.toString();
    },
    [pathname, searchParams],
  );

  return {
    createQueryString,
    searchParams,
  };
};
