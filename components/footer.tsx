"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a]">
      {/* Back to Top */}
      <div className="py-4 text-center border-b border-white/5">
        <a
          href="#"
          className="inline-block text-[10px] text-white/50 uppercase tracking-[0.15em] hover:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to Top
        </a>
      </div>

      {/* Footer Links */}
      <div className="py-8 px-6">
        <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
          <Link
            href="/privacy"
            className="text-[10px] text-white/50 uppercase tracking-[0.15em] font-medium hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[10px] text-white/50 uppercase tracking-[0.15em] font-medium hover:text-white transition-colors"
          >
            Terms and Conditions
          </Link>
        </nav>
      </div>

      {/* Bottom spacing */}
      <div className="h-8" />
    </footer>
  );
}
