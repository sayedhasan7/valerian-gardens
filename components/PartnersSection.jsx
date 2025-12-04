"use client";

import { Leaf } from "lucide-react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "./ui/scroll-based-velocity";

export default function AgricultureTicker() {
  return (
    <div className="relative w-full flex items-center bg-[#F8F7F0] justify-center overflow-hidden pb-12">
      <ScrollVelocityContainer className="text-xl md:text-3xl font-bold tracking-tight flex gap-10 whitespace-nowrap">
        
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
      <StarIcon />
      <TickerWord text="Let us help you reimagine your outdoor space." />
      <StarIcon />
      <TickerWord text="Design, Grow, Enjoy" />
      <StarIcon/>
      <TickerWord text="Let your garden bloom !!!" />
      <StarIcon/>
    </div>
  );
}

/* Word Style WITH STROKE */
function TickerWord({ text }) {
  return (
    <span className="text-[#404A3D] capitalize font-signika">
      {text}
    </span>
  );
}

/* Yellow Star SVG  */
function StarIcon() {
  return (
   <Leaf color="#8b8e7c"/>
  );
}
