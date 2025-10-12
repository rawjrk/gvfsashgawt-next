import { GibLink } from "@/components/gibberish";
import { GibText } from "@/components/gibberish";
import {
  CenteredBodyTemplate,
  DefaultHeader,
  MainContainer,
} from "@/components/layout";

export function HomePageContent() {
  return (
    <CenteredBodyTemplate
      style={{ backgroundImage: `url("/apple-tree/mosh.jpg")` }}
    >
      <DefaultHeader />

      <MainContainer>
        Oops! Sorry, but the page you have requested contains complete{" "}
        <GibText /> <GibLink title="mosh" href="/mosh" /> <GibText />{" "}
        <GibLink title="about" href="/about" /> <GibText />.
      </MainContainer>
    </CenteredBodyTemplate>
  );
}
