import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "./components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  openGraph: {
    title: "MEZANNINO | Engenharia",
    description:
      "Nosso princípio é atender a população com qualidade e eficiência, trazendo o que há de melhor no mercado.",
    url: "https://mezanninoengenharia.vercel.app/",
    siteName: "MEZANNINO | Engenharia",
    images: [
      {
        url: "/open-graph.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/open-graph.svg",
        width: 1800,
        height: 1600,
        alt: "MEZANNINO Engenharia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
