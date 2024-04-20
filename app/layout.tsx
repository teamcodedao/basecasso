import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATABASE_URL),
  title: "UTYA Blue",
  description:
    "$UTYAB Spreading Joys and Positivity via The Signature Telegram Duck Emoji. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
