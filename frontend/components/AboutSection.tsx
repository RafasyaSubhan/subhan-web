import { useAutoplayVideo } from "@/hooks/useAutoplayVideo";
import { ToolkitMarquee } from "./ToolkitMarquee";
import React, { useRef } from "react";

export default function AboutSection() {
    const shootingStarRef = useRef<HTMLVideoElement>(null);
    useAutoplayVideo(shootingStarRef)

  return (
    <section className="min-h-screen bg-primary flex flex-col justify-center px-8 md:px-24 relative z-20">
        <img 
            src="/star-1.svg" 
            alt="Star" 
            className="absolute -top-12 left-8 md:left-12 w-64 md:w-100 opacity-80 -z-10 pointer-events-none" 
        />
        <img 
            src="/star-2.svg" 
            alt="Star" 
            className="absolute top-40 right-4 md:right-24 w-60 md:w-100 -z-10 pointer-events-none" 
        />

        <video
            ref={shootingStarRef}
            muted
            playsInline
            className="absolute top-20 right-4 md:top-32 md:right-40 w-48 md:w-80 -z-10 pointer-events-none mix-blend-screen opacity-80"
        >
            <source src="/starfall.mp4" type="video/mp4" />
        </video>

        <h1 className="font-serif flex flex-col items-center justify-center w-full mb-16 md:mb-24 translate-y-8 md:translate-y-20">
            <span className="text-primary-light text-6xl md:text-[7rem] leading-none mr-16 md:mr-32">
            ABOUT
            </span>
            <span className="text-secondary text-6xl md:text-[7rem] leading-none ml-16 md:ml-32 -mt-6 md:-mt-12 relative z-10">
            ME
            </span>
        </h1>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1 flex flex-col space-y-6 text-primary-light/90">
            <h3 className="font-serif text-3xl md:text-6xl leading-none text-primary-light">
                Rafa is...
            </h3>
            <p>
                An Undergraduate <b>Computer Science</b> student from Faculty of Computer Science, Universitas Indonesia.
            </p>
            <p>
                Deeply passionate about <b>UI/UX Design</b>, focusing on crafting intuitive and accessible digital experiences.
            </p>
            <p>
                A huge <b>Music Enthusiast</b>, spending my free time enjoying making music covers.
            </p>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
            <div className="group relative w-64 md:w-80 lg:w-[400px]">
                <img 
                src="/rafa-profile.svg" 
                alt="Rafasya Muhammad Subhan" 
                className="w-full object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-95"
                />

                <img 
                src="/rafa-profile2.svg" 
                alt=""
                className="w-full object-contain absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 scale-105 group-hover:scale-100"
                />
            </div>
            </div>
        </div>

        <ToolkitMarquee />
    </section>
  );
}