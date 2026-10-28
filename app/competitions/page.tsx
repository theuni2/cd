import { Metadata } from "next";
import CompetitionsClient from "@/components/competitions/CompetitionsClient";

export const metadata: Metadata = {
  title: "Global High School Competitions & Challenges 2026 | Career Discovery",
  description:
    "Explore prestigious international competitions for high school students in essay writing, STEM innovation, business pitch, and social impact. Evaluated by Oxford, Cambridge, and Ivy League faculty.",
  keywords: [
    "High School Competitions",
    "FORGE Essay Competition",
    "ISIP Innovation Prize",
    "Novus Essay Competition Dubai",
    "SOLVE Challenge",
    "Apex Pitch Competition",
    "Student Business Competitions",
    "International Essay Competitions",
    "Ivy League Admissions Competitions",
    "Career Discovery"
  ],
  alternates: {
    canonical: "https://www.thecareerdiscovery.com/competitions",
  },
  openGraph: {
    title: "Global High School Competitions & Challenges 2026 | Career Discovery",
    description:
      "Compete on global stages in essay writing, STEM innovation, and business pitches judged by Oxford, Cambridge, and Ivy League faculty.",
    url: "https://www.thecareerdiscovery.com/competitions",
    siteName: "Career Discovery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global High School Competitions & Challenges 2026 | Career Discovery",
    description:
      "Prestigious international competitions for ambitious high school students.",
  },
};

export default function CompetitionsPage() {
  return <CompetitionsClient />;
}
