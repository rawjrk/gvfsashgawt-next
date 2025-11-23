import { BaseBodyTemplate } from "@/components/layout";

import { CanvasElement, CanvasProvider } from "./canvas";
import { MoshForm } from "./form";

export default function MoshPageContent() {
  return (
    <BaseBodyTemplate className="flex flex-row">
      <CanvasProvider>
        <div className="bg-foreground flex h-screen flex-1 items-center justify-center">
          <CanvasElement />
        </div>

        <div className="h-screen w-100">
          <menu className="bg-background m-0 h-full w-full p-8">
            <MoshForm />
          </menu>
        </div>
      </CanvasProvider>
    </BaseBodyTemplate>
  );
}
