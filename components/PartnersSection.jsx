"use client";

import { Leaf } from "lucide-react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "./ui/scroll-based-velocity";

export default function AgricultureTicker() {
  return (
    <div className="relative w-full flex items-center bg-[#F8F7F0] justify-center overflow-hidden pb-12">
      <ScrollVelocityContainer className="text-4xl md:text-7xl font-bold tracking-tight flex gap-10 whitespace-nowrap">
        
        {/* Row 01 */}
        <ScrollVelocityRow baseVelocity={3} direction={-1}>
          <TickerContent />
        </ScrollVelocityRow>

      </ScrollVelocityContainer>
    </div>
  );
}

/* Ticker words component */
function TickerContent() {
  return (
    <div className="flex items-center gap-12">
      <TickerWord text="beautiful" />
      <StarIcon />
      <TickerWord text="sustainable" />
      <StarIcon />
      <TickerWord text="Organic" />
      <StarIcon />
      <TickerWord text="Uniquely" />
      <StarIcon />
    </div>
  );
}

/* Word Style WITH STROKE */
function TickerWord({ text }) {
  return (
    <span className="ticker-text text-[#404A3D] uppercase select-none">
      {text}
    </span>
  );
}

/* Yellow Star SVG  */
function StarIcon() {
  return (
   <Leaf color="#5B8C51"/>
  );
}
