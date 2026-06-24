"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden px-6 pt-32 pb-24">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #27272a 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
        
        {/* Spotlight Effect */}
        <motion.div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            background: useTransform(
              [dx, dy],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(39, 39, 42, 0.4), transparent 80%)`
            ),
          }}
        />

        {/* Large Atmospheric Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute -bottom-20 -right-20 text-[20vw] font-bold text-white leading-none select-none"
        >
          FOUNDER
        </motion.div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-8 bg-zinc-800" />
              <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-zinc-500">
                Cloud Native & Intelligent Systems
              </span>
            </div>
            
            <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-medium tracking-tighter text-white mb-12 leading-[0.85] mix-blend-difference">
              Sushanth <br />
              <span className="text-zinc-500 italic font-light">Lakshmikaanth</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed font-light">
                Architecting resilient cloud infrastructure and deploying intelligent systems. Bridging the gap between 
                <span className="text-white"> robust automation</span> and <span className="text-white"> artificial intelligence</span>.
              </p>

              <div className="flex flex-col gap-6 md:items-end">
                <div className="flex items-center gap-8">
                  <motion.a
                    href="#projects"
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white"
                  >
                    View Projects
                    <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <ArrowRight size={14} />
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Details */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 right-6 flex justify-between items-end border-t border-zinc-900/50 pt-8 pointer-events-none"
      >
        <div className="flex gap-12">
          <div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-700 mb-2">Location</div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Globe size={10} className="text-zinc-600" />
              India / Remote
            </div>
          </div>
          <div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-700 mb-2">Availability</div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">Limited Capacity</div>
          </div>
        </div>
        <div className="text-[10px] font-medium uppercase tracking-widest text-zinc-600">
          Est. 2026
        </div>
      </motion.div>
    </section>
  );
}
