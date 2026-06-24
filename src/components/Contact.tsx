"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-32 sm:py-48 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-zinc-600 mb-8 block">
              Contact
            </span>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-12 leading-tight">
              Let&apos;s build the <br />
              next standard.
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-md">
              Available for venture collaborations, high-level technical consulting, and strategic product development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-medium text-zinc-600 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-zinc-900 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-medium text-zinc-600 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-zinc-900 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-medium text-zinc-600 uppercase tracking-widest">Message</label>
                <textarea
                  rows={1}
                  className="w-full bg-transparent border-b border-zinc-900 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none placeholder:text-zinc-800"
                  placeholder="How can I help?"
                />
              </div>

              <button className="group flex items-center gap-4 text-[11px] font-semibold uppercase tracking-widest text-white pt-4">
                Send Inquiry
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-zinc-500 group-hover:text-white" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
