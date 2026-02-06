"use client";

export function Hero() {
  return (
    <section className="relative w-full h-[550px] sm:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w')`,
        }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-12 lg:px-16 text-center">
        <h1 className="text-white text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px] xl:text-[19px] font-semibold uppercase tracking-[0.1em] max-w-4xl leading-[1.6]">
          A Bright New Dawn for Digital Transfers, Sound Money and Personal Freedom.
        </h1>
      </div>

      {/* Decorative Bitcoin symbol */}
      <div className="absolute top-[20%] right-[12%] opacity-30 hidden lg:block">
        <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1.5" fill="none"/>
          <text x="50" y="64" textAnchor="middle" fill="white" fontSize="36" fontFamily="Georgia, serif">B</text>
        </svg>
      </div>
    </section>
  );
}
