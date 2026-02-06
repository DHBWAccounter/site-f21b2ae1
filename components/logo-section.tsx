"use client";

export function LogoSection() {
  return (
    <section className="py-12 lg:py-16 px-6 lg:px-8 bg-white">
      <div className="max-w-[200px] mx-auto">
        <div className="flex flex-col items-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486226923132-GES7LLNU167XSPW77W83/image-asset.png"
            alt="Bitcoin Association Switzerland Logo"
            className="w-full max-w-[160px] h-auto"
          />
          <div className="text-center mt-3">
            <h2 className="text-[#c41e3a] text-[18px] font-serif italic">
              Bitcoin Association
            </h2>
            <p className="text-[#c41e3a] text-[16px] font-serif italic">
              Switzerland
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
