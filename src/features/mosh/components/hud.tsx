import Overlay from "@/components/overlay";

export function MoshHUDOverlay() {
  return (
    <Overlay.Container aria-label="mosh controls">
      <Overlay.Panel position="top-right" className="bg-background/50 p-2">
        {/* TODO: add main inputs */}
      </Overlay.Panel>
      <Overlay.Panel position="bottom-stretch" className="bg-background/50 p-2">
        {/* TODO: add sliders */}
      </Overlay.Panel>
    </Overlay.Container>
  );
}
