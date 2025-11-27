import { BaseBodyTemplate } from "@/components/layout";

import { MoshForm } from "./form";
import { MoshCanvasElement, MoshCanvasProvider } from "./providers/canvas";

export default function MoshPageContent() {
  return (
    <BaseBodyTemplate className="flex flex-row">
      <MoshCanvasProvider>
        <div className="bg-foreground flex h-screen flex-1 items-center justify-center">
          <MoshCanvasElement className="max-h-full max-w-full" />
        </div>

        <div className="h-screen w-100">
          <menu className="bg-background m-0 h-full w-full p-8">
            <MoshForm />
          </menu>
        </div>
      </MoshCanvasProvider>
    </BaseBodyTemplate>
  );
}
