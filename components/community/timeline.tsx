"use client";

import { motion } from "framer-motion";
import { ClipboardList, Lightbulb, Handshake, Users, Calendar } from "lucide-react";

const steps = [
  {
    title: "Apply & Requirement Mapping",
    duration: "Week 1",
    icon: ClipboardList,
    description:
      "Students apply to the program and share their interests, availability, and learning goals. Our team understands the kind of community exposure and impact the student is looking for.",
  },
  {
    title: "Ideation & Custom Planning",
    duration: "Week 1",
    icon: Lightbulb,
    description:
      "Based on the student’s profile and available NGOs in our network, we design a customised community initiative. This includes defining the objective, scope of work, and expected outcomes.",
  },
  {
    title: "NGO Alignment & Introduction",
    duration: "Week 2",
    icon: Handshake,
    description:
      "We connect the student with a relevant NGO from our network. A dedicated Point of Contact (PIC) from Launchpad acts as a mediator to ensure smooth coordination between the student and the NGO.",
  },
  {
    title: "Execution & Ongoing Support",
    duration: "Weeks 3–10",
    icon: Users,
    description:
      "Students execute workshops, awareness drives, visits, or donation initiatives. The PIC supports planning, scheduling, communication, and problem-solving throughout the engagement.",
  },
  {
    title: "Reflection, Documentation & Closure",
    duration: "Weeks 11–12",
    icon: Calendar,
    description:
      "The initiative concludes with reflections, documentation, certificates, and mentor feedback. Students consolidate their learning and impact into structured outcomes.",
  },
];

export default function HowCommunityServiceWorks() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-900">
            How the Community Service Program Works
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600">
            Each community engagement is thoughtfully designed and executed over
            approximately three months, ensuring depth, structure, and real
            impact rather than short-term volunteering.
          </p>
        </motion.div>

        <div className="space-y-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="flex flex-col gap-6 rounded-2xl border border-gray-200 p-8 sm:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                  <Icon className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-3 max-w-3xl text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
