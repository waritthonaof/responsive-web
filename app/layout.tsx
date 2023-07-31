import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { ScreenProvider } from '@/context/ScreenContext';
import './globals.css';

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Athlets - Players',
  description: 'Responsive web',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <ScreenProvider>{children}</ScreenProvider>
      </body>
    </html>
  );
};

export default RootLayout;
