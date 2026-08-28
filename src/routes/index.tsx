import { createFileRoute } from "@tanstack/react-router";

import HomePage from "@/components/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "H.P. Tint Window Tint and Distributions | Premium Window Tinting Castroville TX",
      },
      {
        name: "description",
        content:
          "Professional window tinting services in Castroville, TX. Commercial, residential, automotive, and industrial tinting solutions. 5-star Google rated. Lifetime warranty.",
      },
      {
        property: "og:title",
        content:
          "H.P. Tint Window Tint and Distributions | Premium Window Tinting Castroville TX",
      },
      {
        property: "og:description",
        content:
          "Professional window tinting services in Castroville, TX. Commercial, residential, automotive, and industrial tinting solutions. 5-star Google rated. Lifetime warranty.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://cheerful-beginnings-forge.lovable.app/",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://cheerful-beginnings-forge.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "H.P. Tint Window Tint and Distributions",
          description:
            "Industrial, commercial, residential and automotive window tinting and distributions in Castroville, TX.",
          url: "https://cheerful-beginnings-forge.lovable.app/",
          telephone: "+1-210-956-4089",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1306 US-90 W Suite 1",
            addressLocality: "Castroville",
            addressRegion: "TX",
            postalCode: "78009",
            addressCountry: "US",
          },
          areaServed: "Castroville, San Antonio and surrounding areas",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "17:00",
            },
          ],
          sameAs: [
            "https://www.facebook.com/hptintgraphicsandsigns/",
            "https://www.instagram.com/hptintgraphicsandsigns",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              q: "How long does tinting take?",
              a: "Most tinting jobs take about 1-2 hours, depending on the size and complexity of the project. Automotive tinting typically takes 1-3 hours, while larger commercial or residential projects may take longer.",
            },
            {
              q: "Is my tint street-legal?",
              a: "Yes, we strictly follow all Texas state regulations for window tinting. We ensure all automotive tints meet legal VLT requirements and provide documentation to prove compliance.",
            },
            {
              q: "Do you offer warranty?",
              a: "Yes. We provide a lifetime warranty on both the film and our workmanship, covering bubbling, peeling, discoloration, and installation defects.",
            },
            {
              q: "What types of film do you use?",
              a: "We install PremiumTech Window Film (PTWF) exclusively, including the Premium Series (Richmond IR, Indy Ceramic IR) and the Economy Series, in shades from 05% to 86% VLT.",
            },
            {
              q: "Can you remove old tint?",
              a: "Yes, we provide professional tint removal without damaging your windows or leaving adhesive residue.",
            },
            {
              q: "Do you service commercial buildings?",
              a: "Yes. We install commercial window film for offices, retail stores, restaurants, and industrial facilities, including energy-saving, privacy, decorative and safety films.",
            },
          ].map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});
