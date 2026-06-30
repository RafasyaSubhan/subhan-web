"use client";

import React, { useState, useRef, useLayoutEffect, useEffect } from "react";

interface FilterTabBarProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterTabBar({
  filters,
  activeFilter,
  onFilterChange,
}: FilterTabBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, height: 0 });

  const updatePillPosition = () => {
    const activeIndex = filters.indexOf(activeFilter);
    const activeButton = buttonRefs.current[activeIndex];
    const container = containerRef.current;

    if (activeButton && container) {
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setPillStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
        height: buttonRect.height,
      });
    }
  };

  useLayoutEffect(() => {
    updatePillPosition();
  }, [activeFilter, filters]);

  useEffect(() => {
    window.addEventListener("resize", updatePillPosition);
    return () => window.removeEventListener("resize", updatePillPosition);
  }, [activeFilter, filters]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center p-2 md:py-[12px] md:px-[20px] gap-2 md:gap-[60px] bg-primary-light/20 backdrop-blur-[10px] rounded-[44px]"
    >
      <div
        className="absolute inset-0 rounded-[44px] pointer-events-none"
        style={{
          padding: "1px",
          background: "linear-gradient(to bottom, #FDF9E8 0%, #97958A00 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {pillStyle.width > 0 && (
        <span
          aria-hidden="true"
          className="absolute top-1/2 -translate-y-1/2 bg-primary/72 border border-[#1E274B] shadow-[0_0_12px_#1E274B] backdrop-blur-[20px] rounded-[44px] pointer-events-none"
          style={{
            left: `${pillStyle.left}px`,
            width: `${pillStyle.width}px`,
            height: `${pillStyle.height}px`,
            transition: "all 300ms ease-in-out",
          }}
        />
      )}

      {filters.map((filter, index) => (
        <button
          key={filter}
          ref={(el) => {
            buttonRefs.current[index] = el;
          }}
          onClick={() => onFilterChange(filter)}
          className={`relative z-10 cursor-pointer px-4 py-2 md:px-[40px] md:py-[12px] font-sans text-sm md:text-[24px] leading-[31px] whitespace-nowrap transition-colors duration-300 ${
            activeFilter === filter
              ? "text-primary-light"
              : "text-primary-light/70 hover:text-primary-light"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}