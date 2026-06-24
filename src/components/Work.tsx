"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Cloud Native Systems",
    description: "Designing resilient infrastructure, container orchestration, and automated deployment pipelines at scale.",
  },
  {
    title: "Intelligent Applications",
    description: "Building LLM-powered platforms, RAG pipelines, and graph-based AI systems for real-world production use.",
  },
  {
    title: "Security & Performance",
    description: "Engineering with rate limiting, encrypted key storage, RBAC, and horizontally scalable architectures.",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-black py-32 sm:py-64 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />

      <div className="container mx-auto px-6 max-w-7xl">
        <header className="mb-24 sm:mb-40 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-600 mb-8 block">
              Focus Areas / 01
            </span>
            <h2 className="text-5xl sm:text-7xl font-medium tracking-tighter text-white leading-[0.9]">
              Engineering the <span className="text-zinc-500">unseen</span> infrastructure.
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed font-light">
            Core disciplines behind every venture — from cloud orchestration to production AI systems.
          </p>
        </header>

        <div className="space-y-px bg-zinc-900 border-y border-zinc-900">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-black hover:bg-zinc-950 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 sm:p-16">
                <div className="flex-1 max-w-2xl">
                  <span className="text-[9px] font-bold text-zinc-700 uppercase tracking-[0.3em] block mb-6">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-medium text-white tracking-tighter mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-base leading-relaxed font-light max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
