"use client";

import { Leaf } from "lucide-react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "./ui/scroll-based-velocity";

export default function AgricultureTicker() {
  return (
    <div className="relative w-full pb-5                 flex items-center bg-[#F8F7F0] justify-center overflow-hidden pt-5">
      <ScrollVelocityContainer className="text-4xl md:text-5xl font-bold tracking-tight flex gap-10 whitespace-nowrap">
        
        {/* Row 01 */}
        <ScrollVelocityRow baseVelocity={3} direction={-1}>
          <TickerContent />
        </ScrollVelocityRow>

      </ScrollVelocityContainer>
      <div className="from-[#F8F7F0] pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-[#F8F7F0] pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}

/* Ticker words component */
function TickerContent() {
  return (
    <div className="flex items-center">
      <TickerWord text="Let us help you reimagine your outdoor space" />
      <StarIcon />
      <TickerWord text="Design. Grow. Enjoy" />
      <StarIcon />
      <TickerWord text="Let your garden bloom !!!" />
      <StarIcon isLast={true}/>
      {/* <TickerWord text="Uniquely" />
      <StarIcon /> */}
    </div>
  );
}

/* Word Style WITH STROKE */
function TickerWord({ text }) {
  return (
    <span className={`text-[#404A3D] uppercase select-none`}>
      {text}
    </span>
  );
}

/* Yellow Star SVG  */
function StarIcon() {
  return (
   <Leaf color="#5B8C51" className="mx-4 size-12"/>
  );
}
