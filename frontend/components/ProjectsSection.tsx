"use client";

import { useState } from "react";
import FilterTabBar from "./FilterTabBar";

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "UI/UX", "Web Dev", "Mobile App"];

    return (
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

            <div className="relative w-full flex justify-center z-30 mt-8 md:mt-32 mb-8 md:mb-12">
                <FilterTabBar 
                    filters={filters} 
                    activeFilter={activeFilter} 
                    onFilterChange={setActiveFilter} 
                />
            </div>

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
                            className="mt-4 md:mt-5 inline-flex items-center justify-center py-2 px-5 md:py-2.5 md:px-6 bg-[#020617] rounded-lg transition-all duration-300 border border-white/10 cursor-pointer hover:bg-[#E6E6E8] group/button"
                            >
                                <span className="font-sans font-bold text-sm md:text-base text-[#E6E6E8] group-hover/button:text-[#020617] transition-colors duration-300">
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
                            className="mt-4 md:mt-5 inline-flex items-center justify-center py-2 px-5 md:py-2.5 md:px-6 bg-[#020617] rounded-lg transition-all duration-300 border border-white/10 cursor-pointer hover:bg-[#E6E6E8] group/button"
                            >
                                <span className="font-sans font-bold text-sm md:text-base text-[#E6E6E8] group-hover/button:text-[#020617] transition-colors duration-300">
                                    View Prototype
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}