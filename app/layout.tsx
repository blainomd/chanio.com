import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "chanio — Making the web surfable and memorable.",
  description: "Your AI finds your channels. You browse. It remembers.",
  metadataBase: new URL("https://chanio.com"),
  openGraph: {
    title: "chanio — Making the web surfable and memorable.",
    description: "Your AI finds your channels. You browse. It remembers.",
    url: "https://chanio.com",
    siteName: "chanio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://solvinghealth.com/footer.js"
          data-brand="solvinghealth"
          data-theme="dark"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
