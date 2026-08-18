export type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  status: string;
  desktopImage: string;
  mobileImage?: string;
  liveUrl: string;
  tone: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Bete Gauna",
    category: "Caligrafia & engraving",
    description: "Uma presença delicada para transformar técnica artesanal em desejo.",
    status: "Projeto realizado",
    desktopImage: "/assets/projects/bete-gauna.png",
    liveUrl: "https://betegauna.com.br",
    tone: "bg-[#e8e0d5]",
  },
  {
    title: "Tarot da Joli",
    category: "Espiritualidade & experiência",
    description: "Atmosfera, confiança e clareza para aproximar pessoas do atendimento.",
    status: "Projeto realizado",
    desktopImage: "/assets/projects/tarot-da-joli.png",
    liveUrl: "https://tarotdajoli.com.br",
    tone: "bg-[#29203d]",
  },
  {
    title: "Dra. Jéssica",
    category: "Dermatologia clínica",
    description: "Autoridade visual para uma marca pessoal que cuida de cada detalhe.",
    status: "Projeto realizado",
    desktopImage: "/assets/projects/dra-jessica.png",
    liveUrl: "https://jessica-dermato.vercel.app",
    tone: "bg-[#e6e6de]",
  },
  {
    title: "Mariana Oliveira",
    category: "Psicologia clínica",
    description: "Um espaço digital seguro, humano e preparado para acolher.",
    status: "Projeto realizado",
    desktopImage: "/assets/projects/psicologa-mariana.png",
    liveUrl: "https://psic-mariana-demo.vercel.app",
    tone: "bg-[#dfe9df]",
  },
  {
    title: "Rafael Montenegro",
    category: "Advocacia & direito empresarial",
    description: "Uma presença institucional para comunicar estratégia, clareza e segurança.",
    status: "Projeto realizado",
    desktopImage: "/assets/projects/rafael-montenegro.png",
    liveUrl: "https://rafaelmontenegro-advocacia.vercel.app",
    tone: "bg-[#dce2e8]",
  },
];
