import Image from "next/image";

import { asset } from "@/utils/asset";

export function SmonksVideo({ className }: { className?: string }) {
  return (
    <video className={className} width="200" height="232" autoPlay loop muted>
      <source src={asset("/smonks.mp4")} type="video/mp4" />
      <Image
        src={asset("/smonks-fallback.jpg")}
        alt="Smonks Video"
        width="200"
        height="232"
      />
    </video>
  );
}
