import Overlay from "@/components/overlay";

import { MoshStateProvider } from "../providers/state";
import { MoshHUDInputs } from "./hud-inputs";
import { MoshHUDSliders } from "./hud-sliders";

export function MoshHUDOverlay() {
  return (
    <MoshStateProvider>
      <Overlay.Container aria-label="mosh controls">
        <Overlay.Panel position="top-right" className="bg-background/50 p-2">
          <MoshHUDInputs />
        </Overlay.Panel>
        <Overlay.Panel
          position="bottom-stretch"
          className="bg-background/50 p-2"
        >
          <MoshHUDSliders />
        </Overlay.Panel>
      </Overlay.Container>
    </MoshStateProvider>
  );
}
