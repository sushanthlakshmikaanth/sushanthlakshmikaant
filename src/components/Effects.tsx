"use client";

import { motion } from "framer-motion";

  export default function Effects() {
    return (
      <>
        {/* Very Subtle Grain/Noise Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </>
    );
  }

