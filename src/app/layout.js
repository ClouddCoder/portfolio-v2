import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />

        {/* ****** faviconit.com favicons ****** */}
        <link rel="shortcut icon" href="/portfolio/favicon.ico" />
        <link rel="icon" sizes="16x16 32x32 64x64" href="/portfolio/favicon.ico" />
        <link rel="icon" type="image/png" sizes="196x196" href="/portfolio/favicon-192.png" />
        <link rel="icon" type="image/png" sizes="160x160" href="/portfolio/favicon-160.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/portfolio/favicon-96.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/portfolio/favicon-64.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/portfolio/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/portfolio/favicon-16.png" />
        <link rel="apple-touch-icon" href="/portfolio/favicon-57.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/portfolio/favicon-114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/portfolio/favicon-72.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/portfolio/favicon-144.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/portfolio/favicon-60.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/portfolio/favicon-120.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/portfolio/favicon-76.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/portfolio/favicon-152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/portfolio/favicon-180.png" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/portfolio/favicon-144.png" />
        <meta name="msapplication-config" content="/portfolio/browserconfig.xml" />
        {/* ****** faviconit.com favicons ****** */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
