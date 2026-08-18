import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { portfolioProjects, type PortfolioProject } from "../data/projects";
import { DesktopScrollMockup, PhoneScrollMockup } from "./ProjectMockup";

function ProjectRow({ project, index }: { project: PortfolioProject; index: number }) {
  const rowRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const reversed = index % 2 === 1;

  useEffect(() => {
    const element = rowRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <article ref={rowRef} className={`project-reveal grid items-center gap-10 md:grid-cols-[1.35fr_.65fr] md:gap-20 ${reversed ? "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1" : ""} ${visible ? "is-visible" : ""}`}>
    <div className={`relative ${project.tone} p-3 md:p-5`}><DesktopScrollMockup image={project.desktopImage} alt={`Screenshot completo do projeto ${project.title}`} />{project.mobileImage && <div className="absolute -bottom-10 right-5 hidden md:block"><PhoneScrollMockup image={project.mobileImage} alt={`Versão mobile do projeto ${project.title}`} /></div>}</div>
    <div className="max-w-[350px] py-4"><div className="flex items-center justify-between gap-4 border-b border-[#d9d4ca] pb-4"><span className="text-[10px] font-bold uppercase tracking-[.2em] text-[#f05a24]">0{index + 1} / {project.category}</span><span className="flex items-center gap-2 text-[10px] uppercase tracking-[.1em] text-[#817e76]"><i className="h-2 w-2 rounded-full bg-[#f05a24]" />{project.status}</span></div><h3 className="display mt-7 text-4xl leading-[.95] tracking-[-.04em] md:text-5xl">{project.title}</h3><p className="mt-5 text-sm leading-6 text-[#817e76]">{project.description}</p><a href={project.liveUrl} target="_blank" rel="noreferrer" className="focus-ring arrow-link mt-8 inline-flex items-center gap-3 border-b border-[#1c1b19] pb-2 text-xs font-bold uppercase tracking-[.14em]">Ver projeto <ArrowUpRight size={15} /></a></div>
  </article>;
}

export function ProjectsSection() {
  return <section id="projetos" className="border-b border-[#d9d4ca] py-28 md:py-40"><div className="mx-auto w-[min(100%-40px,1180px)]"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="eyebrow flex items-center gap-3 text-[10px] font-bold uppercase text-[#f05a24]"><span className="h-px w-8 bg-[#f05a24]" />01 / Projetos</div><h2 className="display mt-6 text-6xl leading-[.9] tracking-[-.05em] md:text-8xl">Projetos<br /><em className="text-[#f05a24]">selecionados.</em></h2></div><p className="max-w-[340px] text-sm leading-6 text-[#817e76]">Sites desenvolvidos para refletir a identidade, o posicionamento e os objetivos de cada marca.</p></div><div className="mt-20 space-y-28 md:mt-28 md:space-y-40">{portfolioProjects.map((project, index) => <ProjectRow key={project.title} project={project} index={index} />)}</div><div className="mt-24 flex items-center gap-3 border-t border-[#d9d4ca] pt-5 text-[10px] font-bold uppercase tracking-[.16em] text-[#817e76]"><Check size={15} className="text-[#f05a24]" /> Scroll interno pausável no hover</div></div></section>;
}
