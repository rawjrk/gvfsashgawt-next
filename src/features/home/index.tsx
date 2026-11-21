import { GibText } from "@/components/gibberish";
import {
  Body,
  CentralSection,
  DefaultHeader,
  PageContainer,
} from "@/components/layout";
import { Navbar } from "@/components/layout/navbar";
import { asset } from "@/lib/asset";

export function HomePageContent() {
  return (
    <Body
      style={{ backgroundImage: `url("${asset("/apple-tree/mosh.jpg")}")` }}
    >
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
