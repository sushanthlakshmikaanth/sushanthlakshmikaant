"use client";

import { motion } from "framer-motion";

export default function About() {
  const principles = [
    {
      title: "Cloud Native",
      text: "Architecting resilient, secure, and multi-tenant environments with Kubernetes, AWS, and serverless topologies."
    },
    {
      title: "DevOps & CI/CD",
      text: "Implementing robust GitOps delivery, infrastructure-as-code, and automated zero-downtime pipelines."
    },
    {
      title: "AI Development",
      text: "Designing intelligent applications, LLM orchestration frameworks, and model deployment runtimes."
    },
    {
      title: "Observability",
      text: "Establishing proactive logging, metrics, and telemetry loops for high-throughput cloud environments."
    }
  ];

  return (
    <section id="about" className="bg-black py-32 sm:py-48 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-zinc-600 mb-8 block">
              Background
            </span>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-12 leading-tight">
              A synthesis of cloud automation <br />
              and artificial intelligence.
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed max-w-xl">
              <p>
                I operate at the convergence of Cloud Engineering, DevOps automation, and Artificial Intelligence. I design and build highly resilient cloud-native infrastructures and AI-driven platforms that solve complex engineering challenges.
              </p>
              <p>
                My philosophy is rooted in automation and intelligence: provisioning self-healing Kubernetes clusters, implementing declarative infrastructure-as-code, and deploying scalable machine learning architectures for production-ready software.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 lg:pt-24">
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[11px] font-medium text-white uppercase tracking-widest mb-4">{item.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
