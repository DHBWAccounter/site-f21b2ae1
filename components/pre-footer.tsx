"use client";

import { Youtube, Twitter } from "lucide-react";

export function PreFooter() {
  return (
    <section className="bg-[#1F1F1F] py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3">
          {/* Meetup - Custom M icon */}
          <a
            href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border-2 border-white/40 flex items-center justify-center text-white text-[12px] font-bold hover:border-white hover:bg-white/10 transition-all duration-200"
            aria-label="Meetup"
          >
            M
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all duration-200"
            aria-label="Bitcoin Lectures"
          >
            <Youtube className="w-4 h-4" />
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/bitcoin_ch"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all duration-200"
            aria-label="X"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
