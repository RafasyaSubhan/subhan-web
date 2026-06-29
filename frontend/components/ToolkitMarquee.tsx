import { TOOLKITS } from "@/constants/toolkits";

export function ToolkitMarquee() {
    return (
        <div className="w-full mt-12 md:mt-20 relative z-10">
            <div className="w-full max-w-6xl mx-auto px-5 mb-6">
                <h2 className="font-serif text-4xl md:text-5xl text-white">
                    Toolkit
                </h2>
            </div>

            <div className="w-full py-4 md:py-6 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <div className="animate-marquee flex w-max">
                    <div className="flex items-center gap-10 md:gap-16 px-5 md:px-8 shrink-0">
                        {TOOLKITS.map((tool, index) => (
                            <ToolkitItem key={`group1-${index}`} tool={tool} />
                        ))}
                    </div>
                    <div className="flex items-center gap-10 md:gap-16 px-5 md:px-8 shrink-0">
                        {TOOLKITS.map((tool, index) => (
                            <ToolkitItem key={`group2-${index}`} tool={tool} />
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
    );
}

function ToolkitItem({ tool }: { tool: (typeof TOOLKITS)[0] }) {
    return (
        <div className="group relative flex items-center justify-center cursor-pointer">
            <img 
                src={tool.src} 
                alt={tool.name} 
                className="h-10 md:h-12 object-contain transition-all duration-300 group-hover:blur-[2px] group-hover:opacity-40" 
            />
            <span className="absolute text-white font-sans text-xs md:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap drop-shadow-md">
                {tool.name}
            </span>
        </div>
    );
}
