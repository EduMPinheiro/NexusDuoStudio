import { useRef, useState } from "react";

type ScrollMockupProps = {
  image: string;
  alt: string;
};

function ScrollImage({ image, alt, phone = false }: ScrollMockupProps & { phone?: boolean }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(true);

  return <div ref={viewportRef} tabIndex={0} role="region" aria-label={`Explorar ${alt}`} onScroll={() => showHint && setShowHint(false)} className={`mockup-viewport relative overflow-x-hidden overflow-y-auto focus-ring ${phone ? "h-[360px]" : "h-[370px] md:h-[540px]"}`}>
    <img src={image} alt={alt} className="mockup-scroll-image block h-auto min-h-full w-full max-w-none object-top" />
    <span className={`pointer-events-none sticky bottom-4 left-1/2 z-10 mx-auto block w-fit -translate-x-1/2 bg-[#1c1b19]/85 px-3 py-2 text-[9px] font-bold uppercase tracking-[.14em] text-white transition-opacity duration-300 ${showHint ? "opacity-100" : "opacity-0"}`}>Role para explorar ↓</span>
  </div>;
}

export function DesktopScrollMockup({ image, alt }: ScrollMockupProps) {
  return <div className="mockup-frame overflow-hidden border border-[#1c1b19] bg-[#d8d2c8] shadow-[14px_14px_0_#1c1b19]">
    <div className="flex h-9 items-center gap-2 border-b border-[#1c1b19] bg-[#e9e4dc] px-4"><span className="h-2 w-2 rounded-full bg-[#f05a24]" /><span className="h-2 w-2 rounded-full bg-[#aaa49c]" /><span className="h-2 w-2 rounded-full bg-[#1c1b19]" /><span className="ml-3 truncate text-[9px] uppercase tracking-[.12em] text-[#817e76]">nexusduo / projeto</span></div>
    <ScrollImage image={image} alt={alt} />
  </div>;
}

export function PhoneScrollMockup({ image, alt }: ScrollMockupProps) {
  return <div className="w-[168px] rounded-[22px] border-[5px] border-[#1c1b19] bg-[#1c1b19] p-1 shadow-[8px_8px_0_#d9d4ca]"><div className="relative overflow-hidden rounded-[14px] bg-white"><div className="absolute left-1/2 top-2 z-10 h-3 w-14 -translate-x-1/2 rounded-full bg-[#1c1b19]" /><ScrollImage image={image} alt={alt} phone /></div></div>;
}
