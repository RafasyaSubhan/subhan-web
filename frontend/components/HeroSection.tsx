import React from "react";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  return (
    <section className="relative min-h-[115vh] overflow-hidden flex flex-col justify-center px-8 md:px-24 z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[0%_40%] md:object-[10%_40%] z-0"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-20 flex flex-col items-start max-w-3xl">
        <h1 className="font-serif text-6xl md:text-[7rem] leading-none text-primary-light">
          GET TO KNOW
        </h1>
        
        <h2 className="font-sans text-2xl md:text-[40px] leading-none text-primary-light mt-2">
          <span className="inline">Rafasya Muhammad Subhan.</span>
          <span className="inline-block w-[3px] h-[0.85em] bg-primary-light ml-1 md:ml-2 animate-blink align-baseline"></span>
        </h2>
        
        <p className="font-sans mt-8 text-base md:text-lg text-primary-light leading-relaxed max-w-xl">
          A passionate <strong className="text-primary-light font-semibold">UI/UX Designer</strong> with <strong className="text-primary-light font-semibold">full-stack capabilities</strong> dedicated to building immersive and intuitive digital experiences.
        </p>

        <SocialLinks />
        
      </div>
      <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none z-10 bg-[radial-gradient(ellipse_150%_100%_at_50%_0%,transparent_0%,transparent_30%,var(--color-primary)_100%)]"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-10 bg-gradient-to-t from-primary to-transparent"></div>
    </section>
  );
}