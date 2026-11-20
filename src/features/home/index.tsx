import { GibText } from "@/components/gibberish";
import {
  Body,
  CentralSection,
  DefaultHeader,
  PageContainer,
} from "@/components/layout";
import { Navbar } from "@/components/layout/navbar";
import { APPLE_TREE } from "@/constants/backgrounds";
import { asset } from "@/lib/asset";

export function HomePageContent() {
  return (
    <Body style={{ backgroundImage: `url("${asset(APPLE_TREE.MOSH.url)}")` }}>
      <Navbar currentHref="/" />

      <PageContainer>
        <DefaultHeader />

        <CentralSection>
          Oops! Sorry, but the page you have requested contains complete{" "}
          <GibText /> <GibText />.
        </CentralSection>
      </PageContainer>
    </Body>
  );
}
