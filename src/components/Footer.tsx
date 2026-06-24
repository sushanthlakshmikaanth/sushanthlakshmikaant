"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const networkLinks = [
  {
    name: "sushanthlakshmikaanthk@gmail.com",
    url: "mailto:sushanthlakshmikaanthk@gmail.com",
    icon: <Mail size={14} />,
  },
  {
    name: "+91 63699 74110",
    url: "tel:+916369974110",
    icon: <Phone size={14} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sushanth-lakshmikaanth-443043318",
    icon: <Linkedin size={14} />,
    external: true,
  },
  {
    name: "GitHub",
    url: "https://github.com/sushanthlakshmikaanth",
    icon: <Github size={14} />,
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-zinc-900 pt-16">
          <div className="md:col-span-6 space-y-8">
            <Link href="/" className="group flex items-center">
              <span className="text-sm font-semibold tracking-tight text-white">SL</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm font-normal">
              Engineering high-performance digital infrastructure and scalable ventures. Focused on technical excellence and strategic vision.
            </p>
          </div>

          <div className="md:col-span-3 space-y-6">
            <span className="text-[10px] font-medium text-zinc-600 uppercase tracking-[0.3em]">Sections</span>
            <div className="flex flex-col gap-4">
              <Link href="#about" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">About</Link>
              <Link href="#work" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">Work</Link>
              <Link href="#projects" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">Projects</Link>
              <Link href="#contact" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <span className="text-[10px] font-medium text-zinc-600 uppercase tracking-[0.3em]">Network</span>
            <div className="flex flex-col gap-4">
              {networkLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-3 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 flex flex-col sm:flex-row justify-between items-center gap-8 text-[10px] font-medium text-zinc-600 uppercase tracking-[0.2em]">
          <p>© 2026 Sushanth Lakshmikaanth. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>System Status: Optimal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
