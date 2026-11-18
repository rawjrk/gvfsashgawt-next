import { GibWord } from "@/components/gibberish";
import {
  CenteredBodyTemplate,
  DefaultHeader,
  ExternalLinks,
  MainContainer,
  NavigationBar,
  Paragraph,
} from "@/components/layout";

import { SmonksVideo } from "./components/video";

export function AboutPageContent() {
  return (
    <CenteredBodyTemplate
      className="animate-(--hue-rotation)"
      style={{ backgroundImage: `url("/apple-tree/color2.jpg")` }}
    >
      <DefaultHeader />

      <MainContainer className="flex flex-col items-center justify-center gap-6">
        <Paragraph>
          <span>
            <GibWord
              className="capitalize"
              title="Raw,st"
              override={{ at: 3, char: "," }}
            />{" "}
            <GibWord
              className="capitalize"
              title="J$Rk"
              override={{ at: 1, char: "$" }}
            />
          </span>{" "}
          in t8e WoRld l1ves h@re.
        </Paragraph>

        <SmonksVideo className="animate-(--hue-rotation-cancel)" />

        <div>
          <Paragraph>Links? Yae, thanks.</Paragraph>
          <ExternalLinks />
        </div>
      </MainContainer>

      <NavigationBar currentHref="/about" />
    </CenteredBodyTemplate>
  );
}
