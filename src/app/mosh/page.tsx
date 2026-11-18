import type { Metadata } from "next";

import MoshPageContent from "@/features/mosh";

export const metadata: Metadata = {
  title: "Destroy Data, Not People!",
  openGraph: {
    title: "🟥 Destroy Data, Not People!",
    description: "Webtool for LIVE GLITCH animations",
  },
};

export default function Page() {
  return <MoshPageContent />;
}
