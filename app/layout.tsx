import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ce Requin — Le catalogue français des requins",
  description: "Un catalogue factuel pour retrouver et comparer les requins.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
