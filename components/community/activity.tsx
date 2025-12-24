"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Megaphone, Building2 } from "lucide-react";

const activities = [
  {
    title: "Collaborate with NGOs",
    description:
      "Students work closely with NGOs to understand community needs and design meaningful initiatives.",
    icon: Building2,
  },
  {
    title: "Run Workshops",
    description:
      "Plan and conduct awareness or learning workshops for schools, NGOs, and local communities.",
    icon: Users,
  },
  {
    title: "Lead Awareness Drives",
    description:
      "Create and execute campaigns around education, sustainability, governance, and social issues.",
    icon: Megaphone,
  },
  {
    title: "Donate Books & Resources",
    description:
      "Organise book drives and resource collections to support under-resourced communities.",
    icon: BookOpen,
  },
];

export default function WhatStudentsDoSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-900">
            What Students Actually Do
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600">
            Community service at Launchpad is hands-on. Students don’t observe
            from the sidelines; they plan, lead, and reflect.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                  <Icon className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

