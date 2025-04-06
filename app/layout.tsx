import '@mantine/core/styles.css';
import './globals.css'
import Head from 'next/head';
import { Header } from './Header';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';

export const metadata = {
  title: 'Tim Forrer',
  description: 'Personal website of Tim Forrer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <Head>
        <link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/favicon.svg" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Tim Forrer" />
        <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
        <ColorSchemeScript />
      </Head>
      <body>
        <MantineProvider>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}