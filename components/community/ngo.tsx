"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export default function NGOCollaborationsSection() {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-gray-900" />
            <h2 className="text-3xl font-semibold text-gray-900">
              NGO Collaborations
            </h2>
          </div>
          <p className="mt-4 max-w-3xl text-gray-600">
            We work with a trusted network of NGOs across education, sustainability,
            governance, and community development. Students are matched with
            organisations based on their interests and the kind of impact they
            want to create.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Education-focused NGOs",
            "Environmental & sustainability NGOs",
            "Community welfare organisations",
            "Governance & policy initiatives",
            "Local grassroots organisations",
            "Social awareness groups",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <p className="text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
