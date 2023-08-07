import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brayan Sanchez",
  description:
    "Brayan Sanchez is a Software developer focused on building scalable and user-friendly web applications implementing the best tools to optimize the performance.",
  other: {
    "msapplication-TileColor": "#FFFFFF",
    "msapplication-TileImage": "/apple-icon144.png",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
