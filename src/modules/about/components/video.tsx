import Image from "next/image";

export function SmonksVideo({ className }: { className?: string }) {
  return (
    <video className={className} width="200" height="232" autoPlay loop muted>
      <source src="/smonks.mp4" type="video/mp4" />
      <Image
        src="/smonks-fallback.jpg"
        alt="Smonks Video"
        width="200"
        height="232"
      />
    </video>
  );
}
