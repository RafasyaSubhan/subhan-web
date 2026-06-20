"use client";

import { useEffect, useRef } from "react";

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
      {/* Hero Section */}
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

          <div className="flex items-center gap-4 text-white mt-8">
            {/* GitHub */}
            <a 
              href="https://github.com/RafasyaSubhan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 hover:text-brand-hover transition-all duration-200"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M25 35C25 35 25 31.2167 25 30C25 28.95 25.25 26.7333 24.1667 25.8333C26.4833 25.6167 28.3 24.8667 30 23.3333C31.7 21.8 32.5 19.4833 32.5 15.8333C32.5 13.3333 32.0833 11.6667 30.8333 10C31.3167 8.7 31.4 6.66667 30.8333 5C28.2333 5 25.8833 6.78333 25 7.5C24.35 7.33333 22.7833 6.66667 20 6.66667C17.2167 6.66667 15.65 7.33333 15 7.5C14.1167 6.78333 11.7667 5 9.16667 5C8.6 6.66667 8.68333 8.7 9.16667 10C7.91667 11.6667 7.5 13.3333 7.5 15.8333C7.5 19.4833 8.3 21.8 10 23.3333C11.7 24.8667 13.5167 25.6167 15.8333 25.8333C14.75 26.7333 15 28.95 15 30C15 31.2167 15 35 15 35" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M15 31.6666C12.65 31.6666 10.2667 30.7333 8.85 29.6833C7.45 28.6333 7.03333 26.9166 5 25.8333" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/rafasyasubhan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 hover:text-brand-hover transition-all duration-200"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M6.66666 9.99998C8.50761 9.99998 9.99999 8.5076 9.99999 6.66665C9.99999 4.8257 8.50761 3.33331 6.66666 3.33331C4.82571 3.33331 3.33333 4.8257 3.33333 6.66665C3.33333 8.5076 4.82571 9.99998 6.66666 9.99998Z" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M3.33333 15H9.99999V35H3.33333V15ZM36.6667 35H30V23.3333C30 22.4493 29.6488 21.6014 29.0237 20.9763C28.3986 20.3512 27.5507 20 26.6667 20C25.7826 20 24.9348 20.3512 24.3096 20.9763C23.6845 21.6014 23.3333 22.4493 23.3333 23.3333V35H16.6667V23.3333C16.6667 20.6811 17.7202 18.1376 19.5956 16.2622C21.471 14.3869 24.0145 13.3333 26.6667 13.3333C29.3188 13.3333 31.8624 14.3869 33.7377 16.2622C35.6131 18.1376 36.6667 20.6811 36.6667 23.3333V35Z" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/rafasya.ms" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 hover:text-brand-hover transition-all duration-200"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M13 3.33331H27C32.3333 3.33331 36.6667 7.66665 36.6667 13V27C36.6667 29.5637 35.6482 32.0225 33.8354 33.8353C32.0225 35.6482 29.5638 36.6666 27 36.6666H13C7.66666 36.6666 3.33333 32.3333 3.33333 27V13C3.33333 10.4362 4.35178 7.97747 6.16463 6.16461C7.97748 4.35176 10.4362 3.33331 13 3.33331ZM12.6667 6.66665C11.0754 6.66665 9.54924 7.29879 8.42402 8.42401C7.2988 9.54922 6.66666 11.0753 6.66666 12.6666V27.3333C6.66666 30.65 9.34999 33.3333 12.6667 33.3333H27.3333C28.9246 33.3333 30.4508 32.7012 31.576 31.576C32.7012 30.4507 33.3333 28.9246 33.3333 27.3333V12.6666C33.3333 9.34998 30.65 6.66665 27.3333 6.66665H12.6667ZM28.75 9.16665C29.3025 9.16665 29.8324 9.38614 30.2231 9.77684C30.6138 10.1675 30.8333 10.6974 30.8333 11.25C30.8333 11.8025 30.6138 12.3324 30.2231 12.7231C29.8324 13.1138 29.3025 13.3333 28.75 13.3333C28.1975 13.3333 27.6676 13.1138 27.2769 12.7231C26.8862 12.3324 26.6667 11.8025 26.6667 11.25C26.6667 10.6974 26.8862 10.1675 27.2769 9.77684C27.6676 9.38614 28.1975 9.16665 28.75 9.16665ZM20 11.6666C22.2101 11.6666 24.3297 12.5446 25.8926 14.1074C27.4554 15.6702 28.3333 17.7898 28.3333 20C28.3333 22.2101 27.4554 24.3297 25.8926 25.8925C24.3297 27.4553 22.2101 28.3333 20 28.3333C17.7899 28.3333 15.6702 27.4553 14.1074 25.8925C12.5446 24.3297 11.6667 22.2101 11.6667 20C11.6667 17.7898 12.5446 15.6702 14.1074 14.1074C15.6702 12.5446 17.7899 11.6666 20 11.6666ZM20 15C18.6739 15 17.4021 15.5268 16.4645 16.4644C15.5268 17.4021 15 18.6739 15 20C15 21.3261 15.5268 22.5978 16.4645 23.5355C17.4021 24.4732 18.6739 25 20 25C21.3261 25 22.5978 24.4732 23.5355 23.5355C24.4732 22.5978 25 21.3261 25 20C25 18.6739 24.4732 17.4021 23.5355 16.4644C22.5978 15.5268 21.3261 15 20 15Z" 
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* X */}
            <a 
              href="https://x.com/RafasyaSubhan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 hover:text-brand-hover transition-all duration-200"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M17.48 24.4183L25.4167 35H37.0833L23.9867 17.5367L34.8833 5H30.4667L21.9383 14.81L14.5833 5H2.91666L15.4333 21.6917L3.86666 35H8.28332L17.48 24.4183ZM27.0833 31.6667L9.58332 8.33333H12.9167L30.4167 31.6667H27.0833Z" 
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none z-10 bg-[radial-gradient(ellipse_150%_100%_at_50%_0%,transparent_0%,transparent_30%,var(--color-primary)_100%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-10 bg-gradient-to-t from-primary to-transparent"></div>
      </section>

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
          className="absolute -top-4 right-4 md:-right-4 w-60 md:w-160 z-0 pointer-events-none" 
        />
        <h2 className="font-serif flex flex-col items-center justify-center w-full mb-16 md:mb-24 -translate-y-4 md:translate-y-20 relative z-20">
          <span className="text-secondary text-6xl md:text-[7rem] leading-none mr-48 md:mr-92 -rotate-[9deg] origin-bottom-right">
            MY
          </span>

          <span className="text-primary-light text-6xl md:text-[7rem] leading-none ml-16 md:ml-32 -mt-6 md:-mt-12 relative z-10">
            PROJECT<span className="text-4xl md:text-[5rem] tracking-normal">s</span>
          </span>
        </h2>
      </section>
    </main>
  );
}