import type {Metadata} from 'next';
import localFont from 'next/font/local';

import './globals.css';

const font = localFont({
  src: './Flavors-Regular.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATABASE_URL),
  title: 'Basecasso',
  description: 'Basecasso',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
