import type { Metadata } from "next";
import ISIPClient from "@/components/isip/ISIPClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thecareerdiscovery.com"),
  title: "ISIP — International Schools Innovation Prize | 8-Week Venture Incubator",
  description:
    "The International Schools Innovation Prize (ISIP) is an 8-week faculty-led venture incubator for students in Grades 8–12. Solve real problems across Tech Innovation & Social Impact with Google & OpenAI mentors and university faculty, advance through checkpoints, and compete for ₹75,000 in seed prizes.",
  keywords: [
    "International Schools Innovation Prize",
    "ISIP",
    "ISIP Competition",
    "High School Innovation Prize",
    "Student Venture Incubator",
    "Tech Innovation Competition",
    "Social Impact High School Prize",
    "Faculty Led High School Program",
    "High School Startup Challenge",
    "Career Discovery",
    "Uni Discovery",
  ],
  openGraph: {
    title: "International Schools Innovation Prize (ISIP)",
    description:
      "An 8-week faculty-led innovation prize for school students (Grades 8–12). Build a breakthrough venture framework with Google & OpenAI mentors and university faculty, advance to the Top 100 & Top 20, and compete for ₹75,000 in seed prizes. No coding required.",
    url: "https://www.thecareerdiscovery.com/isip",
    siteName: "Career Discovery",
    images: [
      {
        url: "/images/isip_hero_banner.jpg",
        width: 1200,
        height: 630,
        alt: "International Schools Innovation Prize Trophy and Global Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "International Schools Innovation Prize (ISIP)",
    description:
      "An 8-week faculty-led innovation prize for students in Grades 8–12. Compete for ₹75,000 in seed prizes across Tech & Social Impact tracks.",
    images: ["/images/isip_hero_banner.jpg"],
  },
  alternates: {
    canonical: "https://www.thecareerdiscovery.com/isip",
  },
};

export default function Page() {
  return <ISIPClient />;
}
