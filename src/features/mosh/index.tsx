import { Body, Navbar, PageContainer } from "@/components/layout";

import { MoshHUDOverlay } from "./components";
import {
  MoshCanvasContainer,
  MoshCanvasElement,
  MoshCanvasProvider,
} from "./providers/canvas";

export default function MoshPageContent() {
  return (
    <Body>
      <Navbar currentHref="/mosh" />
      <PageContainer className="bg-foreground min-h-0">
        <MoshCanvasProvider>
          <MoshCanvasContainer className="relative flex-1">
            <MoshCanvasElement className="max-h-full max-w-full" />
            <MoshHUDOverlay />
          </MoshCanvasContainer>
        </MoshCanvasProvider>
      </PageContainer>
    </Body>
  );
}
