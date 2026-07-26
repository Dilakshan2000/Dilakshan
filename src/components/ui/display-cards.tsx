"use client";

import React from "react";
import { cn } from "@/src/lib/utils";
import { Sparkles } from "lucide-react";

export interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  onClick?: () => void;
  isActive?: boolean;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
  onClick,
  isActive = false,
}: DisplayCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex h-auto sm:h-36 w-full max-w-[22rem] skew-y-0 sm:-skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:px-4 sm:py-3 transition-all duration-700 sm:after:absolute sm:after:-right-1 sm:after:top-[-5%] sm:after:h-[110%] sm:after:w-[20rem] sm:after:bg-gradient-to-l sm:after:from-[#0a0a0a] sm:after:to-transparent sm:after:content-[''] hover:border-white/20 hover:bg-white/8 [&>*]:flex [&>*]:items-center [&>*]:gap-2 gap-2",
        onClick && "cursor-pointer",
        isActive && "border-white/30 bg-white/10 ring-1 ring-white/20",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-blue-800/80 p-1">
          {icon}
        </span>
        <p className={cn("text-base sm:text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="text-sm sm:text-lg text-white/90 line-clamp-1">{description}</p>
      <p className="text-white/40 text-xs sm:text-sm">{date}</p>
    </div>
  );
}

export interface DisplayCardsProps {
  cards?: DisplayCardProps[];
  onCardClick?: (index: number) => void;
  activeIndex?: number | null;
}

export default function DisplayCards({ cards, onCardClick, activeIndex = null }: DisplayCardsProps) {
  const defaultCards = [
    {
      className:
        "sm:[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#0a0a0a]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className:
        "sm:[grid-area:stack] sm:translate-x-16 sm:translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#0a0a0a]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className:
        "sm:[grid-area:stack] sm:translate-x-32 sm:translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="flex flex-col sm:grid sm:[grid-template-areas:'stack'] gap-4 sm:gap-0 place-items-center opacity-100 animate-in fade-in-0 duration-700 w-full max-w-full overflow-hidden sm:overflow-visible">
      {displayCards.map((cardProps, index) => (
        <DisplayCard
          key={index}
          {...cardProps}
          isActive={activeIndex === index}
          onClick={onCardClick ? () => onCardClick(index) : cardProps.onClick}
        />
      ))}
    </div>
  );
}
