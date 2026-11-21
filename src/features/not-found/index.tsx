import { GibVoid } from "@/components/gibberish";
import {
  Body,
  CentralSection,
  DefaultHeader,
  Navbar,
  PageContainer,
} from "@/components/layout";
import { asset } from "@/lib/asset";

export function NotFoundPageContent() {
  return (
    <Body
      style={{ backgroundImage: `url("${asset("/apple-tree/mosh.jpg")}")` }}
    >
      <Navbar currentHref={null} />

      <PageContainer>
        <DefaultHeader />

        <CentralSection>
          Like fr. Bruh.{" "}
          <GibVoid className="-m-0.5 p-0.5 capitalize" title="Void" />
        </CentralSection>
      </PageContainer>
    </Body>
  );
}
