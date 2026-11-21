import { GibLink, GibWord } from "@/components/gibberish";
import { Body, Navbar, Paragraph } from "@/components/layout";
import { CentralSection, PageContainer } from "@/components/layout";
import { APPLE_TREE } from "@/constants/backgrounds";
import { EXT_LINKS } from "@/constants/navigation";
import { asset } from "@/lib/asset";

import { SmonksVideo } from "./components/video";

const HUE_ROTATE = "animate-(--hue-rotation)";
const HUE_CANCEL = "animate-(--hue-rotation-cancel)";

export function AboutPageContent() {
  return (
    <Body
      className={HUE_ROTATE}
      style={{ backgroundImage: `url("${asset(APPLE_TREE.COLOR_2.url)}")` }}
    >
      <Navbar className={HUE_CANCEL} currentHref="/about" />

      <PageContainer>
        <CentralSection className="flex flex-col items-center justify-center gap-6">
          <Paragraph>
            <GibWord
              className="capitalize"
              title="Raw,st"
              override={{ at: 3, char: "," }}
            />{" "}
            <GibWord
              className="capitalize"
              title="J$Rk"
              override={{ at: 1, char: "$" }}
            />{" "}
            in t8e WoRld l1ves h@re.
          </Paragraph>

          <SmonksVideo className={HUE_CANCEL} />

          <div>
            <Paragraph>Links? Yae, thanks.</Paragraph>
            <ExternalLinks />
          </div>
        </CentralSection>
      </PageContainer>
    </Body>
  );
}

function ExternalLinks() {
  return (
    <Paragraph>
      &lt;{" "}
      {EXT_LINKS.map(({ href, title }, index) => (
        <span key={title}>
          {index > 0 ? " * " : ""}
          <GibLink
            key={title}
            className="uppercase"
            href={href}
            title={title}
          />
        </span>
      ))}{" "}
      &gt;
    </Paragraph>
  );
}
