import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elevate Hospitality | Hotel & Resort Consulting Group",
  description: "Strategic hospitality consulting for hotels, resorts, and restaurants. Revenue management, operations, guest experience, and digital transformation. Book your free consultation today.",
  keywords: ["hospitality consulting", "hotel consulting", "resort management", "restaurant consulting", "revenue management", "guest experience"],
  authors: [{ name: "Elevate Hospitality Consulting Group" }],
  openGraph: {
    title: "Elevate Hospitality | Hotel & Resort Consulting Group",
    description: "Strategic hospitality consulting for hotels, resorts, and restaurants. Revenue management, operations, guest experience, and digital transformation.",
    type: "website",
    locale: "en_US",
    siteName: "Elevate Hospitality",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Elevate Hospitality Consulting - Luxury hotel lobby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Hospitality | Hotel & Resort Consulting Group",
    description: "Strategic hospitality consulting for hotels, resorts, and restaurants.",
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Elevate Hospitality Consulting Group",
              description: "Strategic hospitality consulting for hotels, resorts, and restaurants.",
              url: "https://elevatehospitality.com",
              telephone: "+1-555-123-4567",
              email: "hello@elevatehospitality.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "350 Fifth Avenue, Suite 4200",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10118",
                addressCountry: "US",
              },
              openingHours: ["Mo-Fr 09:00-18:00"],
              priceRange: "$$$$",
              image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
              sameAs: ["https://www.linkedin.com/company/elevate-hospitality"],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
          if (typeof window !== 'undefined') {
            const obs = new IntersectionObserver((entries) => {
              entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            document.addEventListener('DOMContentLoaded', () => {
              document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el => obs.observe(el));
            });
            const mo = new MutationObserver(() => {
              document.querySelectorAll('.reveal:not(.visible),.reveal-left:not(.visible),.reveal-scale:not(.visible)').forEach(el => obs.observe(el));
            });
            mo.observe(document.body, { childList: true, subtree: true });
          }
        ` }} />
      </body>
    </html>
  );
}
