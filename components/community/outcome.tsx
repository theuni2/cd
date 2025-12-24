"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function OutcomesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <Award className="h-5 w-5 text-gray-900" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Outcomes & Learning Gains
            </h2>
          </div>

          <p className="mt-3 text-base text-gray-600 max-w-3xl mx-auto">
            Every engagement is structured to generate tangible proof of learning —
            outcomes students can confidently present to universities, mentors,
            and scholarship committees.
          </p>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {[
            {
              title: "Verified Certification",
              desc: "An official certificate detailing role, duration, and contribution.",
            },
            {
              title: "Impact Report",
              desc: "A concise summary outlining objectives, execution, and community impact.",
            },
            {
              title: "Mentor Evaluation",
              desc: "Qualitative feedback highlighting initiative, leadership, and teamwork.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <h3 className="text-base font-medium text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certificate Preview */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gray-50 p-8"
        >
          <div className="grid gap-10 md:grid-cols-2 items-center">
            
            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                What Students Receive
              </h3>
              <p className="mt-3 text-xl text-gray-600">
                Upon successful completion, students receive a verified
                community service certificate acknowledging their role,
                commitment, and real-world contribution.
              </p>
              <p className="mt-3 text-xl text-gray-600">
                This certificate is commonly used in university applications,
                extracurricular portfolios, and interviews to demonstrate
                sustained civic engagement.
              </p>
            </div>

            {/* A4 Certificate Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <img
                  src="/launchpad/cert/img3.png"
                  alt="Sample Community Service Certificate"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

