import { Metadata } from "next";

import { AboutPageContent } from "@/modules/about";

export const metadata: Metadata = {
  title: "Cvte Girly Smonks",
};

export default function Page() {
  return <AboutPageContent />;
}
