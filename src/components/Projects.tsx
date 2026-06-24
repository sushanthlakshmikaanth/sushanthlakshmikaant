"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, GitBranch, Network, Server } from "lucide-react";

const projects = [
  {
    title: "RAGHost",
    category: "RAG Platform",
    description:
      "Production-ready RAG chatbot platform — build, embed, and manage AI-powered bots with your own knowledge base.",
    github: "https://github.com/sushanthlakshmikaanth/RAGHost",
    tags: ["React", "Node.js", "Pinecone", "Gemini"],
    icon: <Bot size={18} />,
  },
  {
    title: "Quantora AI",
    category: "FinTech / AI",
    description:
      "Graph-based fraud detection platform using the SAGRA risk engine to expose fraud rings and financial anomalies in real time.",
    github: "https://github.com/sushanthlakshmikaanth/quantora-ai",
    tags: ["Next.js", "FastAPI", "NetworkX", "Graph AI"],
    icon: <Network size={18} />,
  },
  {
    title: "CI/CD",
    category: "DevOps",
    description:
      "Automated CI/CD pipelines and deployment workflows for scalable, production-grade software delivery.",
    github: "https://github.com/sushanthlakshmikaanth/CI-CD",
    tags: ["GitHub Actions", "Automation", "DevOps"],
    icon: <GitBranch size={18} />,
  },
  {
    title: "KuberMinds AI",
    category: "AI Platform",
    description:
      "AI-powered Kubernetes management platform for intelligent cloud-native orchestration, automated scaling, and cluster health diagnostics.",
    github: "https://github.com/sushanthlakshmikaanth/KuberMinds-AI",
    tags: ["Kubernetes", "AI Ops", "Cloud Native"],
    icon: <Server size={18} />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-32 sm:py-64 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />

      <div className="container mx-auto px-6 max-w-7xl">
        <header className="mb-24 sm:mb-40 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-600 mb-8 block">
              Open Source / 02
            </span>
            <h2 className="text-5xl sm:text-7xl font-medium tracking-tighter text-white leading-[0.9]">
              Selected <span className="text-zinc-500">projects</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed font-light">
            Full-stack platforms and infrastructure tools — each linked to its GitHub repository.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-black p-10 sm:p-14 hover:bg-zinc-950 transition-colors relative overflow-hidden block"
            >
              <div className="absolute top-0 right-0 p-8 text-zinc-800 opacity-20 group-hover:opacity-40 transition-opacity">
                {project.icon}
              </div>

              <div className="flex items-start justify-between gap-6 mb-6">
                <span className="text-[9px] font-bold tracking-[0.3em] text-zinc-600 uppercase">
                  {project.category}
                </span>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white group-hover:bg-white/5 transition-all duration-500 shrink-0"
                >
                  <ArrowUpRight size={16} />
                </motion.div>
              </div>

              <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-zinc-300 transition-colors tracking-tight">
                {project.title}
              </h3>

              <p className="text-sm text-zinc-500 leading-relaxed font-light mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-zinc-600 font-medium uppercase tracking-widest"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
