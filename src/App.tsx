import { useState, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Camera,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import { ProjectsSection } from "./components/ProjectsSection";
import { StrategicMonitoring } from "./components/StrategicMonitoring";

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  href: string;
  tone: string;
};

const projects: Project[] = [
  {
    title: "Bete Gauna",
    category: "Caligrafia & engraving",
    image: "/assets/projects/bete-gauna.png",
    description: "Uma presença delicada para transformar técnica artesanal em desejo.",
    href: "https://betegauna.com.br",
    tone: "bg-[#e8e0d5]",
  },
  {
    title: "Tarot da Joli",
    category: "Espiritualidade & experiência",
    image: "/assets/projects/tarot-da-joli.png",
    description: "Atmosfera, confiança e clareza para aproximar pessoas do atendimento.",
    href: "https://tarotdajoli.com.br",
    tone: "bg-[#29203d]",
  },
  {
    title: "Dra. Jéssica",
    category: "Dermatologia clínica",
    image: "/assets/projects/dra-jessica.png",
    description: "Autoridade visual para uma marca pessoal que cuida de cada detalhe.",
    href: "https://jessica-dermato.vercel.app",
    tone: "bg-[#e6e6de]",
  },
  {
    title: "Mariana Oliveira",
    category: "Psicologia clínica",
    image: "/assets/projects/psicologa-mariana.png",
    description: "Um espaço digital seguro, humano e preparado para acolher.",
    href: "https://psic-mariana-demo.vercel.app",
    tone: "bg-[#dfe9df]",
  },
  {
    title: "Rafael Montenegro",
    category: "Advocacia & direito empresarial",
    image: "/assets/projects/rafael-montenegro.png",
    description: "Uma presença institucional para comunicar estratégia, clareza e segurança.",
    href: "https://rafaelmontenegro-advocacia.vercel.app",
    tone: "bg-[#dce2e8]",
  },
];

const services = [
  { number: "01", title: "Sites institucionais", text: "Estruturas claras para apresentar seu negócio com presença, confiança e personalidade." },
  { number: "02", title: "Landing pages", text: "Páginas objetivas para campanhas, lançamentos e ações que precisam converter." },
  { number: "03", title: "Redesign de sites", text: "Transformamos uma presença antiga em uma experiência atual, rápida e alinhada à marca." },
  { number: "04", title: "Performance & SEO", text: "Cuidamos da base técnica para sua experiência carregar bem e ser encontrada." },
];

const processSteps = [
  { number: "01", title: "Conversa", text: "Entendemos seu negócio, público e o que precisa mudar na sua presença digital." },
  { number: "02", title: "Prévia", text: "Desenhamos uma direção visual concreta para você enxergar o caminho antes do código." },
  { number: "03", title: "Desenvolvimento", text: "Construímos uma experiência sob medida, responsiva e pronta para crescer." },
  { number: "04", title: "Publicação", text: "Colocamos tudo no ar e deixamos a base preparada para os próximos passos." },
];

// Troque esta configuração quando quiser destacar outro projeto na hero.
const heroProjectImage = {
  src: "/assets/projects/bete-gauna.png",
  alt: "Prévia visual do projeto Bete Gauna",
};

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-[min(100%-40px,1180px)] ${className}`}>{children}</div>;
}

function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <div className={`eyebrow flex items-center gap-3 text-[10px] font-bold uppercase ${dark ? "text-[#f5a789]" : "text-[#f05a24]"}`}><span className={`h-px w-8 ${dark ? "bg-[#f5a789]" : "bg-[#f05a24]"}`} />{children}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Projetos", href: "#projetos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "Monitoramento", href: "#monitoramento" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <header className="relative z-20 border-b border-[#d9d4ca] bg-[#f5f2ec]/95 backdrop-blur-md">
      <Container className="flex h-[78px] items-center justify-between">
        <a href="#inicio" className="focus-ring flex items-center gap-2 font-extrabold tracking-[-.08em]" onClick={() => setOpen(false)}>
          <span className="text-[15px]">NEXUS DUO</span><span className="grid h-6 w-6 rotate-[-9deg] place-items-center bg-[#f05a24] text-xs text-white">✦</span>
        </a>
        <nav className={`${open ? "absolute left-5 right-5 top-[88px] flex" : "hidden"} flex-col gap-5 border border-[#d9d4ca] bg-[#f5f2ec] p-6 text-sm md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
          {links.map((link) => <a key={link.label} href={link.href} className="line-hover focus-ring" onClick={() => setOpen(false)}>{link.label}</a>)}
          <a href="#contato" className="focus-ring inline-flex items-center justify-center bg-[#1c1b19] px-4 py-3 text-[11px] font-bold uppercase tracking-[.12em] text-white transition-colors hover:bg-[#f05a24]">Solicitar uma prévia</a>
        </nav>
        <button className="focus-ring md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
      </Container>
    </header>
  );
}

function Hero() {
  return <section id="inicio" className="grain overflow-hidden border-b border-[#d9d4ca]">
    <Container className="relative grid min-h-[640px] items-center gap-14 py-20 md:grid-cols-[.92fr_1.08fr] md:py-20">
      <div className="relative z-10 max-w-[690px]">
        <SectionLabel>Desenvolvimento Web / Nexus Duo Studio</SectionLabel>
        <h1 className="display mt-6 text-[clamp(3.5rem,17vw,6.5rem)] leading-[.9] tracking-[-.065em] md:mt-7 md:text-[clamp(4.3rem,6.8vw,6.8rem)]"><span className="block">Sites que</span><span className="block">traduzem</span><em className="block text-[#f05a24]">a identidade</em><span className="block">da sua marca.</span></h1>
        <p className="mt-8 max-w-[500px] text-base leading-7 text-[#625f58] md:text-lg">Projetos desenvolvidos para transformar marcas em experiências digitais memoráveis — com clareza, intenção e uma presença que faz sentido.</p>
        <div className="mt-9 flex flex-wrap items-center gap-3"><a className="focus-ring arrow-link inline-flex items-center gap-3 bg-[#f05a24] px-5 py-4 text-xs font-bold uppercase tracking-[.1em] text-white transition-transform hover:-translate-y-1" href="#projetos">Ver projetos <ArrowUpRight size={16} /></a><a className="focus-ring inline-flex items-center gap-3 border border-[#bcb6ab] px-5 py-4 text-xs font-bold uppercase tracking-[.1em] transition-colors hover:border-[#1c1b19]" href="#contato">Solicitar uma prévia <ArrowUpRight size={16} /></a></div>
      </div>
      <div className="relative min-h-[360px] md:min-h-[520px]">
        <div className="absolute right-0 top-1/2 h-[350px] w-[92%] -translate-y-1/2 rotate-[4deg] bg-[#e7d8cb] md:h-[510px]" />
        <div className="absolute right-[4%] top-1/2 h-[340px] w-[90%] -translate-y-1/2 overflow-hidden border border-[#1c1b19] bg-[#d4cec4] shadow-[18px_18px_0_#1c1b19] md:h-[490px]"><img src={heroProjectImage.src} alt={heroProjectImage.alt} className="h-full w-full object-cover object-top" /></div>
        <div className="absolute bottom-0 left-0 flex h-24 w-24 rotate-[-10deg] items-center justify-center border border-[#f05a24] bg-[#f5f2ec] text-center text-[10px] font-bold uppercase leading-4 tracking-[.12em] text-[#f05a24] md:h-28 md:w-28">Feito<br />sob medida</div>
      </div>
      <div className="absolute bottom-8 left-0 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-[#817e76] md:flex"><ArrowDownRight size={15} /> Role para explorar</div>
    </Container>
  </section>;
}

function ProjectMeta({ project }: { project: Project }) {
  return <div className="flex items-end justify-between gap-4 border-t border-[#d9d4ca] pt-4"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#f05a24]">{project.category}</p><h3 className="display mt-1 text-2xl tracking-[-.02em]">{project.title}</h3></div><a className="focus-ring arrow-link flex shrink-0 items-center gap-1 text-xs font-bold uppercase tracking-[.12em]" href={project.href} target="_blank" rel="noreferrer">Visitar <ArrowUpRight size={14} /></a></div>;
}

function SelectedProjects() {
  const [featured, second, third] = projects;
  return <section id="projetos" className="border-b border-[#d9d4ca] py-28 md:py-36"><Container>
    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><SectionLabel>01 / Projetos selecionados</SectionLabel><h2 className="display mt-6 max-w-[620px] text-5xl leading-[.92] tracking-[-.05em] md:text-7xl">Trabalho que deixa<br /><em className="text-[#f05a24]">uma impressão.</em></h2></div><p className="max-w-[300px] text-sm leading-6 text-[#817e76]">Cada projeto nasce de uma pergunta simples: como sua marca precisa ser percebida quando alguém chega até ela?</p></div>
    <div className="mt-16 grid gap-12 md:grid-cols-[1.18fr_.82fr] md:items-start"><article className="project-card"><a className="focus-ring block overflow-hidden border border-[#1c1b19] bg-[#e8e0d5]" href={featured.href} target="_blank" rel="noreferrer"><div className="relative aspect-[1.42/1] overflow-hidden"><img src={featured.image} alt={`Prévia completa do site ${featured.title}`} className="project-image h-full w-full object-cover object-top" /><span className="absolute bottom-4 left-4 bg-[#f5f2ec] px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em]">Projeto em destaque</span></div></a><div className="mt-5"><ProjectMeta project={featured} /><p className="mt-3 max-w-[440px] text-sm leading-6 text-[#817e76]">{featured.description}</p></div></article>
      <div className="grid gap-12 md:pt-24"><article className="project-card"><a className="focus-ring block overflow-hidden border border-[#1c1b19] bg-[#29203d]" href={second.href} target="_blank" rel="noreferrer"><div className="aspect-[1.1/1] overflow-hidden"><img src={second.image} alt={`Prévia completa do site ${second.title}`} className="project-image h-full w-full object-cover object-top" /></div></a><div className="mt-5"><ProjectMeta project={second} /></div></article><article className="project-card"><a className="focus-ring block overflow-hidden border border-[#1c1b19] bg-[#e6e6de]" href={third.href} target="_blank" rel="noreferrer"><div className="aspect-[1.5/1] overflow-hidden"><img src={third.image} alt={`Prévia completa do site ${third.title}`} className="project-image h-full w-full object-cover object-top" /></div></a><div className="mt-5"><ProjectMeta project={third} /></div></article></div>
    </div><div className="mt-14 flex justify-end"><a href="#galeria" className="focus-ring arrow-link flex items-center gap-2 border-b border-[#1c1b19] pb-2 text-xs font-bold uppercase tracking-[.15em]">Ver galeria completa <ArrowUpRight size={15} /></a></div>
  </Container></section>;
}

function ProjectsGallery() {
  return <section id="galeria" className="bg-[#ebe7df] py-24 md:py-32"><Container><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><SectionLabel>02 / Galeria</SectionLabel><h2 className="display mt-5 text-5xl tracking-[-.04em] md:text-6xl">Outros trabalhos,<br /><em className="text-[#f05a24]">outras possibilidades.</em></h2></div><p className="max-w-[310px] text-sm leading-6 text-[#817e76]">Direções diferentes, com o mesmo cuidado para que cada negócio encontre sua própria voz.</p></div><div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">{projects.map((project, index) => <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className="project-card focus-ring group"><div className={`relative aspect-[.8/1] overflow-hidden border border-[#1c1b19] ${project.tone}`}><img src={project.image} alt={`Prévia do projeto ${project.title}`} className="project-image h-full w-full object-cover object-top" /><span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-[#f5f2ec] opacity-0 transition-opacity group-hover:opacity-100"><ArrowUpRight size={14} /></span></div><div className="mt-4"><p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#f05a24]">0{index + 1} / {project.category}</p><h3 className="display mt-1 text-2xl">{project.title}</h3></div></a>)}</div></Container></section>;
}

function Services() {
  return <section id="servicos" className="border-b border-[#d9d4ca] py-28 md:py-36"><Container><SectionLabel>03 / Serviços</SectionLabel><div className="mt-6 grid gap-10 md:grid-cols-[.75fr_1.25fr] md:gap-20"><h2 className="display text-5xl leading-[.94] tracking-[-.04em] md:text-7xl">O que precisa<br /><em className="text-[#f05a24]">ser dito.</em></h2><div className="grid border-t border-[#1c1b19] sm:grid-cols-2">{services.map((service) => <article key={service.number} className="border-b border-[#d9d4ca] py-7 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"><span className="text-[10px] font-bold tracking-[.15em] text-[#f05a24]">{service.number}</span><h3 className="display mt-7 text-3xl tracking-[-.02em]">{service.title}</h3><p className="mt-3 text-sm leading-6 text-[#817e76]">{service.text}</p></article>)}</div></div></Container></section>;
}

function Process() {
  return <section id="processo" className="bg-[#1c1b19] py-28 text-[#f5f2ec] md:py-36"><Container><div className="grid gap-14 md:grid-cols-[.7fr_1.3fr] md:gap-24"><div><SectionLabel dark>04 / Processo</SectionLabel><h2 className="display mt-6 text-5xl leading-[.94] tracking-[-.04em] md:text-7xl">Do primeiro<br /><em className="text-[#f05a24]">olhar ao ar.</em></h2><p className="mt-8 max-w-[300px] text-sm leading-6 text-[#aaa49c]">Um processo simples, próximo e transparente para seu site chegar ao mundo com intenção.</p></div><div className="grid border-t border-[#4d4943] sm:grid-cols-2">{processSteps.map((step) => <article key={step.number} className="border-b border-[#4d4943] py-8 sm:odd:border-r sm:odd:pr-9 sm:even:pl-9"><span className="text-[10px] font-bold tracking-[.16em] text-[#f05a24]">{step.number}</span><h3 className="display mt-5 text-3xl">{step.title}</h3><p className="mt-3 text-sm leading-6 text-[#aaa49c]">{step.text}</p></article>)}</div></div></Container></section>;
}

function CompetitorMonitoring() {
  return <section id="monitoramento" className="border-b border-[#d9d4ca] py-28 md:py-36"><Container><div className="grid items-center gap-14 md:grid-cols-[1fr_1fr] md:gap-24"><div className="relative min-h-[330px] border border-[#1c1b19] bg-[#dfd8ce] p-5"><div className="absolute -right-5 -top-5 h-16 w-16 border border-[#f05a24] bg-[#f5f2ec]" /><div className="border border-[#bdb5a9] bg-[#f5f2ec] p-5 md:p-8"><div className="flex items-center justify-between border-b border-[#d9d4ca] pb-4"><span className="text-[10px] font-bold uppercase tracking-[.16em]">Painel de leitura</span><span className="flex items-center gap-2 text-[10px] text-[#817e76]"><i className="h-2 w-2 rounded-full bg-[#f05a24]" /> Atualizado hoje</span></div><div className="mt-8 grid grid-cols-3 gap-3"><div className="h-28 bg-[#1c1b19] p-3 text-white"><span className="text-[9px] uppercase tracking-[.1em] text-[#aaa49c]">Clareza</span><strong className="mt-7 block text-3xl">82</strong></div><div className="h-28 bg-[#f05a24] p-3 text-white"><span className="text-[9px] uppercase tracking-[.1em]">Presença</span><strong className="mt-7 block text-3xl">67</strong></div><div className="h-28 border border-[#d9d4ca] p-3"><span className="text-[9px] uppercase tracking-[.1em] text-[#817e76]">Ritmo</span><strong className="mt-7 block text-3xl">94</strong></div></div><div className="mt-7 flex items-end gap-2 border-b border-[#d9d4ca] pb-5"><span className="h-8 w-1/5 bg-[#d9d4ca]" /><span className="h-14 w-1/5 bg-[#bdb5a9]" /><span className="h-10 w-1/5 bg-[#d9d4ca]" /><span className="h-20 w-1/5 bg-[#f05a24]" /><span className="h-16 w-1/5 bg-[#1c1b19]" /></div></div></div><div><SectionLabel>05 / Monitoramento</SectionLabel><h2 className="display mt-6 text-5xl leading-[.94] tracking-[-.04em] md:text-7xl">Não basta<br /><em className="text-[#f05a24]">estar no ar.</em></h2><p className="mt-7 max-w-[480px] text-base leading-7 text-[#625f58]">Acompanhamos como marcas do seu mercado se apresentam, onde existem oportunidades e quais movimentos podem deixar sua presença digital mais competitiva.</p><ul className="mt-8 space-y-3 text-sm text-[#625f58]">{["Leitura de concorrentes e referências", "Oportunidades de diferenciação", "Recomendações práticas de evolução"].map((item) => <li key={item} className="flex items-center gap-3"><Check size={15} className="text-[#f05a24]" />{item}</li>)}</ul></div></div></Container></section>;
}

function FinalCTA() {
  return <section id="contato" className="bg-[#f05a24] py-24 md:py-32"><Container><div className="grid gap-12 md:grid-cols-[1fr_.65fr] md:items-end"><div><SectionLabel dark>06 / Vamos conversar</SectionLabel><h2 className="display mt-6 max-w-[780px] text-6xl leading-[.86] tracking-[-.05em] text-white md:text-8xl">Seu negócio merece uma presença digital <em className="text-[#1c1b19]">à altura.</em></h2></div><div><p className="max-w-[330px] text-sm leading-6 text-[#ffe3d8]">Conte um pouco sobre o momento da sua marca. A primeira conversa é o começo de uma direção mais clara.</p><a href="https://wa.me/5511994196200" target="_blank" rel="noreferrer" className="focus-ring arrow-link mt-8 inline-flex items-center gap-3 bg-[#1c1b19] px-5 py-4 text-xs font-bold uppercase tracking-[.1em] text-white transition-transform hover:-translate-y-1">Solicitar uma prévia <ArrowUpRight size={16} /></a></div></div></Container></section>;
}

function Footer() {
  return <footer className="bg-[#1c1b19] py-10 text-[#f5f2ec]"><Container><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><a href="#inicio" className="focus-ring flex items-center gap-2 font-extrabold tracking-[-.08em]"><span className="text-[15px]">NEXUS DUO</span><span className="grid h-6 w-6 rotate-[-9deg] place-items-center bg-[#f05a24] text-xs text-white">✦</span></a><p className="mt-5 max-w-[300px] text-sm leading-6 text-[#aaa49c]">Sites sob medida para negócios que querem ser percebidos com mais clareza.</p></div><div className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#aaa49c]"><a className="line-hover focus-ring" href="#projetos">Projetos</a><a className="line-hover focus-ring" href="#servicos">Serviços</a><a className="line-hover focus-ring" href="#processo">Processo</a><a className="line-hover focus-ring" href="#contato">Contato</a><a aria-label="Instagram" className="focus-ring" href="https://instagram.com/edu_mpinheiro" target="_blank" rel="noreferrer"><Camera size={17} /></a></div></div><div className="mt-12 flex flex-col justify-between gap-3 border-t border-[#4d4943] pt-5 text-[10px] uppercase tracking-[.16em] text-[#817e76] md:flex-row"><span>© 2026 Nexus Duo Studio</span><span>São Paulo / Brasil</span></div></Container></footer>;
}

export default function App() {
  return <><Header /><main><Hero /><ProjectsSection /><Services /><Process /><StrategicMonitoring /><FinalCTA /></main><Footer /><a href="https://wa.me/5511994196200" target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" className="focus-ring fixed bottom-5 right-5 z-30 grid h-12 w-12 place-items-center rounded-full bg-[#1c1b19] text-white shadow-lg transition-transform hover:-translate-y-1"><MessageCircle size={19} /></a></>;
}
