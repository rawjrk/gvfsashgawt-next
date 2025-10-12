import "./globals.css";

import type { Metadata } from "next";

import { sharedMetadata } from "@/constants/metadata";

export const metadata: Metadata = {
  ...sharedMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">{children}</html>;
}
