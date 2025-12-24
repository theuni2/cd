"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CommunityServiceHero() {
  return (
    <section className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Community Service
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            At Launchpad, community service is not an add-on. It is a learning
            journey where students collaborate with NGOs, design awareness
            programs, and engage directly with communities to understand real
            social challenges.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">Apply Now</Button>
            <Button variant="outline" size="lg">
              View Impact
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
