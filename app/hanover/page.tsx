import type { Metadata } from "next";
import BehavioralEconomicsClient from "@/components/applied_behavioral_economics/BehavioralEconomicsClient";

export const metadata: Metadata = {
  title: "The Applied Behavioral Economics Scholar Program | Career Discovery Fellowship",
  description:
    "A 6-week fellowship plus Week Zero in Applied Behavioral Economics taught by Professor Kimberly Rose Clark, Ph.D. (Dartmouth College & 25-yr CRO). Produce a client-ready Behavioral Strategy Brief.",
  keywords: [
    "Applied Behavioral Economics",
    "Behavioral Economics Scholar Program",
    "Dartmouth Professor Fellowship",
    "Kimberly Rose Clark",
    "High School Economics Fellowship",
    "Behavioral Strategy Brief",
    "Choice Architecture High School",
    "Merchant Mechanics",
    "Career Discovery",
  ],
  openGraph: {
    title: "The Applied Behavioral Economics Scholar Program",
    description:
      "Taught by Dartmouth Professor Kimberly Rose Clark, Ph.D. Learn choice architecture, diagnose commercial friction, and publish a client-ready Behavioral Strategy Brief.",
    url: "https://www.thecareerdiscovery.com/applied-behavioral-economics-scholar",
    siteName: "Career Discovery",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "The Applied Behavioral Economics Scholar Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Applied Behavioral Economics Scholar Program",
    description:
      "A 6-week high school fellowship in Applied Behavioral Economics taught by Dartmouth Senior Lecturer Dr. Kimberly Rose Clark.",
  },
  alternates: {
    canonical: "https://www.thecareerdiscovery.com/applied-behavioral-economics-scholar",
  },
};

export default function Page() {
  return <BehavioralEconomicsClient />;
}
