"use client";

import { useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";

export default function Home() {

  const shootingStarRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (shootingStarRef.current) {
        shootingStarRef.current.currentTime = 0;
        const playPromise = shootingStarRef.current.play();

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Bintang jatuh tertahan (mode hemat daya / tab di background).");
          });
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toolkits = [
    { name: "Figma", src: "/logos/figma.svg" },
    { name: "HTML5", src: "/logos/html.svg" },
    { name: "CSS3", src: "/logos/css.svg" },
    { name: "JavaScript", src: "/logos/javascript.svg" },
    { name: "TypeScript", src: "/logos/typescript.svg" },
    { name: "Tailwind", src: "/logos/tailwind.svg" },
    { name: "Next.js", src: "/logos/nextjs.svg" },
    { name: "Flutter", src: "/logos/flutter.svg" },
    { name: "Java", src: "/logos/java.svg" },
    { name: "Spring Boot", src: "/logos/springboot.svg" },
    { name: "Python", src: "/logos/python.svg" },
    { name: "Django", src: "/logos/django.svg" },
    { name: "PostgreSQL", src: "/logos/postgresql.svg" },
    { name: "Supabase", src: "/logos/supabase.svg" },
    { name: "Postman", src: "/logos/postman.svg" }
  ];

  return (
    <main>
      <HeroSection />

      {/* About Me Section */}
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

        {/* Toolkit */}
        <div className="w-full mt-12 md:mt-20 relative z-10">
          <div className="w-full max-w-6xl mx-auto px-5 mb-6">
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Toolkit
            </h2>
          </div>

          <div className="w-full py-4 md:py-6 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee flex w-max">
              <div className="flex items-center gap-10 md:gap-16 px-5 md:px-8 shrink-0">
                {toolkits.map((tool, index) => (
                  <div key={`group1-${index}`} className="group relative flex items-center justify-center cursor-pointer">
                    <img 
                      src={tool.src} 
                      alt={tool.name} 
                      className="h-10 md:h-12 object-contain transition-all duration-300 group-hover:blur-[2px] group-hover:opacity-40" 
                    />
                    <span className="absolute text-white font-sans text-xs md:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap drop-shadow-md">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-10 md:gap-16 px-5 md:px-8 shrink-0">
                {toolkits.map((tool, index) => (
                  <div key={`group2-${index}`} className="group relative flex items-center justify-center cursor-pointer">
                    <img 
                      src={tool.src} 
                      alt={tool.name} 
                      className="h-10 md:h-12 object-contain transition-all duration-300 group-hover:blur-[2px] group-hover:opacity-40" 
                    />
                    <span className="absolute text-white font-sans text-xs md:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap drop-shadow-md">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <div className="mt-6 md:mt-8 text-center w-full relative z-20">
            <span className="font-sans text-sm md:text-base text-white/70">
              ...and more
            </span>
          </div> 
        </div>
      </section>

      {/* My Projects Section*/}
      <section className="min-h-screen bg-primary pt-24 pb-32 px-8 md:px-24 relative z-20 overflow-hidden">
        <img 
          src="/star-3.svg" 
          alt="Star" 
          className="absolute -top-12 left-8 md:left-12 w-64 md:w-100 opacity-80 -z-10 pointer-events-none" 
        />
        <img 
          src="/star-4.svg" 
          alt="Star" 
          className="absolute top-20 right-4 md:right-24 w-60 md:w-100 -z-10 pointer-events-none" 
        />
        <img 
          src="/saturn.svg" 
          alt="Saturn" 
          className="absolute -top-4 -right-2 md:-right-4 w-60 md:w-160 z-0 pointer-events-none" 
        />
        <h2 className="font-serif flex flex-col items-center justify-center w-full mb-16 md:mb-24 -translate-y-4 md:translate-y-20 relative z-20">
          <span className="text-secondary text-6xl md:text-[7rem] leading-none mr-48 md:mr-92 -rotate-[9deg] origin-bottom-right">
            MY
          </span>

          <span className="text-primary-light text-6xl md:text-[7rem] leading-none ml-16 md:ml-32 -mt-6 md:-mt-12 relative z-10">
            PROJECT<span className="text-4xl md:text-[5rem] tracking-normal">s</span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[1100px] mx-auto w-full mt-16 md:mt-40 relative z-30">
          <div tabIndex={0} className="relative group p-[13px] md:p-4 w-full max-w-[522px] justify-self-center rounded-lg bg-secondary/20 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden cursor-pointer outline-none">
            <div className="w-full aspect-[3/2] relative rounded bg-primary/50 overflow-hidden">
              <img 
                src="/projects/DPD Task.svg" 
                alt="RISTEK DPD Assignment" 
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:blur-md group-hover:scale-110 group-focus:blur-md group-focus:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-700 flex flex-col justify-center items-center p-5 md:p-6 z-10 text-center">
                <div className="flex flex-col items-center gap-2">
                  <h3 className="font-sans font-bold text-lg md:text-xl text-primary-light leading-tight drop-shadow-md">
                    RISTEK DPD Assignment
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-primary-light/90 leading-relaxed drop-shadow-md line-clamp-3">
                    Redesigning an outdated university website to highlight the new AI program, focusing on intuitive navigation and visual accessibility for non-tech-savvy users.
                  </p>

                  <div className="mt-2">
                    <img src="/logos/figma.svg" alt="Figma" className="w-6 h-6 md:w-8 md:h-8 drop-shadow-md" />
                  </div>
                </div>
                <a 
                  href="https://www.figma.com/proto/hfnsmaOcuCMM6Nm3QUQEvu/DPD-Tugas-Khusus?node-id=108-264&viewport=128%2C253%2C0.15&t=SEzkjHbQNdrrFNxQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=108%3A264&page-id=15%3A3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-5 inline-flex items-center justify-center py-2 px-5 md:py-2.5 md:px-6 bg-primary rounded-lg hover:bg-primary-lighter transition-colors duration-300 border border-white/10 cursor-pointer"
                >
                  <span className="font-sans font-bold text-sm md:text-base text-primary-light">
                    View Prototype
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div tabIndex={0} className="relative group p-[13px] md:p-4 w-full max-w-[522px] justify-self-center rounded-lg bg-secondary/20 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden cursor-pointer outline-none">
            <div className="w-full aspect-[3/2] relative rounded bg-primary/50 overflow-hidden">
              <img 
                src="/projects/SuruhIn.svg"
                alt="Project 2" 
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:blur-md group-hover:scale-110 group-focus:blur-md group-focus:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-700 flex flex-col justify-center items-center p-5 md:p-6 z-10 text-center">
                <div className="flex flex-col items-center gap-2">
                  <h3 className="font-sans font-bold text-lg md:text-xl text-primary-light leading-tight drop-shadow-md">
                    Suruh-IN
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-primary-light/90 leading-relaxed drop-shadow-md line-clamp-3">
                    Designing a peer-to-peer errand platform connecting users with freelance runners. The interface streamlines custom daily requests and intuitive task-claiming.
                  </p>
                  <div className="mt-2 flex gap-2">
                    <img src="/logos/figma.svg" alt="Figma" className="w-6 h-6 md:w-8 md:h-8 drop-shadow-md" />
                  </div>
                </div>
                <a 
                  href="https://www.figma.com/proto/q93TTnEABQf0HG48j9cmdp/Suruh-IN-?node-id=245-1425&viewport=1360%2C658%2C0.14&t=L10VvsD82jdJOFVS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=245%3A1425&show-proto-sidebar=1&page-id=1%3A3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-5 inline-flex items-center justify-center py-2 px-5 md:py-2.5 md:px-6 bg-primary rounded-lg hover:bg-primary-lighter transition-colors duration-300 border border-white/10 cursor-pointer"
                >
                  <span className="font-sans font-bold text-sm md:text-base text-primary-light">
                    View Prototype
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}