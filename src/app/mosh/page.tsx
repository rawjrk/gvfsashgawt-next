import type { Metadata } from "next";

import { BaseBodyTemplate } from "@/components/layout";
import { MoshForm } from "@/modules/mosh";

export const metadata: Metadata = {
  title: "Destroy Data, Not People!",
  openGraph: {
    title: "🟥 Destroy Data, Not People!",
    description: "Webtool for LIVE GLITCH animations",
  },
};

export default function Page() {
  return (
    <BaseBodyTemplate className="flex flex-row">
      <div className="bg-foreground flex h-screen flex-1 items-center justify-center">
        <canvas className="bg-secondary" />
      </div>

      <div className="h-screen w-100 p-6">
        <menu className="bg-background m-0 h-full w-full p-4">
          <MoshForm />
        </menu>
      </div>
    </BaseBodyTemplate>
  );
}
