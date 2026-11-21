import { PropsWithChildren } from "react";

import { Link } from "@/components/link";
import { BaseModalProps, ModalWrapper } from "@/components/modal";
import { Button } from "@/components/ui/button";
import { INSTAGRAM_URL } from "@/constants/navigation";

function Header({ children }: PropsWithChildren) {
  return <h2 className={"m-0 text-xl leading-none"}>{children}</h2>;
}

function Section({ children }: PropsWithChildren) {
  return <section className="py-1 pl-2">{children}</section>;
}

function Row({ children }: PropsWithChildren) {
  return <p className="m-0 text-xl leading-none">{children}</p>;
}

function KeyMarker({ keyCode }: { keyCode: string }) {
  return (
    <span className="bg-secondary text-secondary-foreground border-background border">
      &nbsp;{keyCode}&nbsp;
    </span>
  );
}

export function MoshHelpModal({ show, onClose }: BaseModalProps) {
  return (
    <ModalWrapper containerClassName="relative" show={show} onClose={onClose}>
      <Header>
        destroy data, not people!
        {/* close button */}
        <Button className="absolute top-5 right-5 px-1" onClick={onClose}>
          &nbsp;X&nbsp;
        </Button>
      </Header>
      <Section>
        <Row>a tool for glitch animations.</Row>
        <Row>it directly manipulates image</Row>
        <Row>bytes on the fly, so effects</Row>
        <Row>are generated live.</Row>
      </Section>

      <Header>warning</Header>
      <Section>
        <Row>@ don`t use firefox :3</Row>
        <Row>@ (ugly flickering bug)</Row>
      </Section>

      <Row>controls</Row>
      <Section>
        <Row>
          <KeyMarker keyCode="Q" /> ......... (show/hide) help
        </Row>

        <Row>
          <KeyMarker keyCode="H" /> ......... (show/hide) menu
        </Row>

        <Row>
          <KeyMarker keyCode="9" />
          ,
          <KeyMarker keyCode="0" />
          ... (in/de)crease from
        </Row>

        <Row>
          <KeyMarker keyCode="-" />,
          <KeyMarker keyCode="+" />
          ... (in/de)crease to..
        </Row>

        <Row>
          <KeyMarker keyCode="A" />
          ........ (on/off) animation
        </Row>

        <Row>
          <KeyMarker keyCode="G" /> ........ generate manually
        </Row>

        <Row>
          <KeyMarker keyCode="F" /> ............... choose file
        </Row>
      </Section>

      <Header>feedback</Header>
      <Section>
        <Row>
          DM <Link href={INSTAGRAM_URL}>@gvfsashgawt</Link>
        </Row>
      </Section>
    </ModalWrapper>
  );
}
