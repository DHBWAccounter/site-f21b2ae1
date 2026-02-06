"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutJoin() {
  return (
    <section className="py-4 pb-12 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* About Card */}
          <div className="text-center">
            <div className="relative overflow-hidden mb-6">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg"
                alt="About Bitcoin Association Switzerland"
                className="w-full aspect-[3/2] object-cover"
              />
            </div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              <Link href="/about-1" className="hover:text-primary-dark transition-colors">
                About
              </Link>
            </h3>
            <p className="text-[15px] text-gray-600 mb-3 font-serif leading-relaxed">
              Find out about our organization and mission.
            </p>
            <Link
              href="/about-1"
              className="card-link inline-flex items-center"
            >
              Learn More <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Join Us Card */}
          <div className="text-center">
            <div className="relative overflow-hidden mb-6">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg"
                alt="Join Bitcoin Association Switzerland"
                className="w-full aspect-[3/2] object-cover"
              />
            </div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              <Link href="/meetups-events" className="hover:text-primary-dark transition-colors">
                Join US
              </Link>
            </h3>
            <p className="text-[15px] text-gray-600 mb-3 font-serif leading-relaxed">
              You can become a contributor to our cause, or participate
              yourself.
            </p>
            <Link
              href="/meetups-events"
              className="card-link inline-flex items-center"
            >
              Find Out How <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
