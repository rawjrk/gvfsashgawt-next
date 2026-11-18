import { Metadata } from "next";

import { AboutPageContent } from "@/features/about";

export const metadata: Metadata = {
  title: "Cvte Girly Smonks",
};

export default function Page() {
  return <AboutPageContent />;
}
