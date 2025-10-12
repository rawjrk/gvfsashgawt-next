import { Metadata } from "next";

import {
  CenteredBodyTemplate,
  DefaultHeader,
  ExternalLinks,
  MainContainer,
  NavigationBar,
  Paragraph,
} from "@/components/layout";
import { SmonksVideo } from "@/components/layout";

export const metadata: Metadata = {
  title: "Cvte Girly Smonks",
};

export default function Page() {
  return (
    <CenteredBodyTemplate
      style={{ backgroundImage: `url("/apple-tree/color2.jpg")` }}
    >
      <DefaultHeader />

      <MainContainer className="flex flex-col items-center justify-center gap-6">
        <Paragraph>Raw,St J$Rk in t8e WoRld l1ves h@re.</Paragraph>

        <SmonksVideo />

        <div>
          <Paragraph>Links? Yae, thanks.</Paragraph>
          <ExternalLinks />
        </div>
      </MainContainer>

      <NavigationBar currentHref="/about" />
    </CenteredBodyTemplate>
  );
}
