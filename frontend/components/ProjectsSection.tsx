"use client";

import { useState } from "react";
import { PROJECTS } from "@/constants/projects";
import FilterTabBar from "./FilterTabBar";

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "UI/UX", "Web Dev", "Mobile App"];

    const filteredProjects = PROJECTS.filter((project) => {
        if (activeFilter === "All") return true;
        return project.categories.includes(activeFilter);
    });

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[1100px] mx-auto w-full mt-8 md:mt-12 relative z-30">
                {filteredProjects.length === 0 ? (
                    <div className="col-span-1 md:col-span-2 flex justify-center items-center py-20">
                        <p className="font-sans text-xl md:text-2xl text-primary-light/70 italic tracking-wide">
                        Projects On Progress :D
                        </p>
                    </div>
                ) : (
                    filteredProjects.map((project, index) => (
                        <div key={index} tabIndex={0} className="relative group p-[13px] md:p-4 w-full max-w-[522px] justify-self-center rounded-lg bg-secondary/20 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden cursor-pointer outline-none">
                            <div className="w-full aspect-[3/2] relative rounded bg-primary/50 overflow-hidden">
                                <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:blur-md group-hover:scale-110 group-focus:blur-md group-focus:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-700 flex flex-col justify-center items-center p-5 md:p-6 z-10 text-center">
                                    <div className="flex flex-col items-center gap-2">
                                        <h3 className="font-sans font-bold text-lg md:text-xl text-primary-light leading-tight drop-shadow-md">
                                            {project.title}
                                        </h3>
                                        <p className="font-sans text-xs md:text-sm text-primary-light/90 leading-relaxed drop-shadow-md line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="mt-2 flex gap-2">
                                            {project.techStack.map((tech, i) => (
                                                <img key={i} src={tech} alt="Tech Icon" className="w-6 h-6 md:w-8 md:h-8 drop-shadow-md" />
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-4 md:mt-5 inline-flex items-center justify-center py-2 px-5 md:py-2.5 md:px-6 bg-primary rounded-lg hover:bg-brand-hover transition-colors duration-300 border border-white/10 cursor-pointer"
                                    >
                                        <span className="font-sans font-bold text-sm md:text-base text-primary-light">
                                        {project.buttonText}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}