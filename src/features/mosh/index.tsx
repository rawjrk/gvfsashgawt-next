import { Body, Navbar, PageContainer } from "@/components/layout";

import { MoshForm } from "./form";
import { MoshCanvasElement, MoshCanvasProvider } from "./providers/canvas";
import { MoshHelpModalProvider } from "./providers/help";

export default function MoshPageContent() {
  return (
    <Body>
      <Navbar currentHref="/mosh" />
      <PageContainer className="flex flex-row gap-0">
        <MoshCanvasProvider>
          <div className="bg-foreground flex h-screen flex-1 items-center justify-center">
            <MoshCanvasElement className="max-h-full max-w-full" />
          </div>

          <div className="h-screen w-100">
            <menu className="bg-background m-0 h-full w-full p-8">
              <MoshHelpModalProvider>
                <MoshForm />
              </MoshHelpModalProvider>
            </menu>
          </div>
        </MoshCanvasProvider>
      </PageContainer>
    </Body>
  );
}
