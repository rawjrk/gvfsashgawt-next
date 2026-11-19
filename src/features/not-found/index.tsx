import { GibVoid } from "@/components/gibberish";
import {
  CenteredBodyTemplate,
  DefaultHeader,
  MainContainer,
  NavigationBar,
} from "@/components/layout";
import { asset } from "@/lib/asset";

export function NotFoundPageContent() {
  return (
    <CenteredBodyTemplate
      className="gap-0"
      style={{ backgroundImage: `url("${asset("/apple-tree/mosh.jpg")}")` }}
    >
      <DefaultHeader className="w-100 max-w-100" />

      <MainContainer className="w-100 max-w-100">
        Like fr. Bruh.{" "}
        <GibVoid className="-m-0.5 p-0.5 capitalize" title="Void" />
      </MainContainer>

      <NavigationBar className="w-100 max-w-100" currentHref={null} />
    </CenteredBodyTemplate>
  );
}
