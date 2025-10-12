import { Metadata } from "next";

const hostUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://gvfsashgawt.zip";

export const sharedMetadata = {
  title: "F*ck it! Nothing...",
  metadataBase: new URL(hostUrl),
  openGraph: {
    title: "GVFSASHGWAT's PAGE",
    description: "Digiart enjoyer, glitch enthusiast",
  },
} satisfies Metadata;
