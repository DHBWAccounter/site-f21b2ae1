"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", active: true },
  {
    label: "News",
    href: "/blog",
    children: [
      { label: "News", href: "/bitcoin-association-switzerland" },
      { label: "Archive", href: "/archive" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Roadshow 2025", href: "/roadshow-2025" },
      { label: "Bitcoin Meetup (Zurich)", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland/", external: true },
      { label: "Bitcoin Meetup Geneva", href: "https://www.meetup.com/Bitcoin-Meetup-Geneva", external: true },
      { label: "Bitcoin Meetup Luzern", href: "https://www.meetup.com/Bitcoin-Meetup-Luzern/", external: true },
      { label: "Bitcoin Meetup Neuchatel", href: "https://www.meetup.com/Bitcoin-Meetup-Neuchatel/", external: true },
      { label: "Bitcoin Meetup Basel", href: "https://www.meetup.com/bitcoin-meetup-basel/", external: true },
    ],
  },
  {
    label: "Membership",
    href: "/membership",
    children: [
      { label: "Private", href: "/private" },
      { label: "Corporate", href: "/corporate" },
      { label: "Our Corporate Members", href: "/our-corporate-members" },
    ],
  },
  {
    label: "Participate",
    href: "/participate",
    children: [
      { label: "Meetups & Events", href: "/meetups-events" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About", href: "/about-1" },
      { label: "Board", href: "/board" },
      { label: "Finances", href: "/finances" },
      { label: "Statutes", href: "/statutes" },
      { label: "Media Kit", href: "/media-kit" },
      { label: "Contact", href: "/contact-1" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-start">
            {/* Bitcoin Triangle Logo */}
            <div className="relative mr-2">
              <svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 2L34 38H2L18 2Z"
                  fill="#c41e3a"
                  stroke="#c41e3a"
                  strokeWidth="1"
                />
                <text
                  x="18"
                  y="29"
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontWeight="bold"
                  fontFamily="Georgia, serif"
                >
                  B
                </text>
              </svg>
            </div>
            {/* Text Logo */}
            <div className="flex flex-col leading-tight">
              <span className="text-[8px] sm:text-[9px] text-white font-semibold tracking-[0.1em] uppercase">
                Bitcoin
              </span>
              <span className="text-[8px] sm:text-[9px] text-white font-semibold tracking-[0.1em] uppercase">
                Association
              </span>
              <span className="text-[8px] sm:text-[9px] text-white font-semibold tracking-[0.1em] uppercase">
                Switzerland
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <>
                  <button className="nav-link flex items-center gap-1 py-2">
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <div
                    className={`absolute top-full left-0 min-w-[220px] bg-[#1F1F1F] shadow-lg transition-all duration-200 z-50 ${
                      openDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="py-2">
                      {item.children.map((child) => (
                        child.external ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-[12px] text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-[12px] text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            {child.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`nav-link py-2 ${item.active ? "text-white" : ""}`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark/95 backdrop-blur-sm border-t border-white/10">
          <nav className="px-6 py-4">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                {item.children ? (
                  <>
                    <div className="text-white/60 text-[11px] uppercase tracking-wider font-semibold mb-2">
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-2">
                      {item.children.map((child) => (
                        child.external ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-white/80 text-[13px] hover:text-white transition-colors"
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block text-white/80 text-[13px] hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-white text-[13px] font-semibold uppercase tracking-wider"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
