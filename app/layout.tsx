import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Hospitality Group | Hotel & Resort Consulting",
  description: "Strategic hospitality consulting for hotels, resorts, and restaurants. Revenue management, operations, guest experience, and concept development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<html lang="en"><body className="antialiased">{children}</body></html>);
}
