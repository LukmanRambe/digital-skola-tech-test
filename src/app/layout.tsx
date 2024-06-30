import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const poppins = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Digital Skola',
  description: 'Digital Skola Technical Test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
