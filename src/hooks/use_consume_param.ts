import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export const useConsumeSearchParam = (name: string) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const consumedParam = useRef(searchParams.get(name));

  useEffect(() => {
    if (consumedParam) {
      const params = new URLSearchParams(searchParams);
      params.delete(name);

      const query = params.toString();
      const newUrl = query ? `${pathname}?${query}` : pathname;
      window.history.replaceState(null, "", newUrl);
    }
  }, [name, pathname, searchParams]);

  return consumedParam.current;
};
