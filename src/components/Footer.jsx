import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-white/10 py-8 mt-12">
      <div className="max-w-[1280px] mx-auto px-2 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-white/60 text-sm font-mono">
          © {year} Tshepho Maimela. All rights reserved.
        </div>

        <nav className="flex gap-6 text-white/80 font-mono">
          <a href="#projects" className="hover:text-blue-500 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex gap-4">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-900 border border-neutral-700 text-white hover:border-blue-500 hover:text-blue-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-900 border border-neutral-700 text-white hover:border-blue-500 hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-900 border border-neutral-700 text-white hover:border-blue-500 hover:text-blue-500 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;