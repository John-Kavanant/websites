import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { AnalyticsScripts } from "@/components/site/analytics";
import { StickyDemoCta } from "@/components/site/sticky-demo-cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atria Health | End-to-End Remote Monitoring",
  description:
    "Atria Health powers RPM, RTM, CCM, and cardiac monitoring with end-to-end services for clinics, hospitals, and physician groups.",
  keywords: [
    "remote patient monitoring",
    "remote therapeutic monitoring",
    "chronic care management",
    "cardiac monitoring",
    "healthcare reimbursement",
  ],
  openGraph: {
    title: "Atria Health | End-to-End Remote Monitoring",
    description:
      "Launch RPM, RTM, CCM, and cardiac services with end-to-end clinical operations and support.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyDemoCta />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
