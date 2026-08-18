import { ArrowUpRight } from "lucide-react";

const points = [
  {
    number: "01",
    title: "Leitura do mercado",
    text: "Observamos como concorrentes e referências do seu segmento estão se apresentando, comunicando serviços e estruturando sua presença digital.",
  },
  {
    number: "02",
    title: "Oportunidades de diferenciação",
    text: "Identificamos padrões, espaços pouco explorados e possibilidades para sua marca se posicionar de forma mais clara e relevante.",
  },
  {
    number: "03",
    title: "Direção prática",
    text: "Transformamos o que foi observado em recomendações objetivas para evolução do site, comunicação e posicionamento digital.",
  },
];

export function StrategicMonitoring() {
  return <section id="monitoramento" className="border-b border-[#d9d4ca] py-28 md:py-36"><div className="mx-auto w-[min(100%-40px,1180px)]"><div className="grid items-start gap-14 md:grid-cols-[1fr_1fr] md:gap-24">
    <div className="relative border border-[#1c1b19] bg-[#dfd8ce] p-4 md:p-5"><div className="absolute -right-5 -top-5 h-16 w-16 border border-[#f05a24] bg-[#f5f2ec]" /><div className="border border-[#bdb5a9] bg-[#f5f2ec] p-5 md:p-8"><div className="flex items-start justify-between gap-5 border-b border-[#d9d4ca] pb-5"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#f05a24]">Exemplo de leitura estratégica</p><h3 className="display mt-2 text-3xl leading-none">Leitura do mercado</h3></div><ArrowUpRight size={18} className="shrink-0 text-[#f05a24]" /></div><div className="mt-7 grid grid-cols-3 divide-x divide-[#d9d4ca]"><div className="pr-3"><strong className="display text-4xl">12</strong><p className="mt-2 text-[10px] leading-4 text-[#817e76]">Referências acompanhadas</p></div><div className="px-3"><strong className="display text-4xl">8</strong><p className="mt-2 text-[10px] leading-4 text-[#817e76]">Movimentos identificados</p></div><div className="pl-3"><strong className="display text-4xl text-[#f05a24]">3</strong><p className="mt-2 text-[10px] leading-4 text-[#817e76]">Oportunidades encontradas</p></div></div><div className="mt-8 space-y-5 border-t border-[#d9d4ca] pt-6"><div><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#f05a24]">Movimento identificado</p><p className="mt-2 text-xs leading-5 text-[#625f58]">Concorrentes passaram a destacar determinados serviços com mais clareza.</p></div><div><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#f05a24]">Oportunidade</p><p className="mt-2 text-xs leading-5 text-[#625f58]">Poucas marcas do segmento exploram diferenciais e prova social de forma estratégica.</p></div><div><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#f05a24]">Direção</p><p className="mt-2 text-xs leading-5 text-[#625f58]">Reforçar diferenciais, avaliações e pontos de confiança na presença digital.</p></div></div></div></div>
    <div><div className="eyebrow flex items-center gap-3 text-[10px] font-bold uppercase text-[#f05a24]"><span className="h-px w-8 bg-[#f05a24]" />05 / Monitoramento</div><h2 className="display mt-6 text-5xl leading-[.94] tracking-[-.04em] md:text-7xl">Não basta<br /><em className="text-[#f05a24]">estar no ar.</em></h2><p className="mt-7 max-w-[500px] text-base leading-7 text-[#625f58]">Acompanhamos como marcas do seu mercado se posicionam, apresentam seus serviços e evoluem sua presença digital. A partir desse acompanhamento, identificamos movimentos relevantes, referências e oportunidades que ajudam sua marca a tomar decisões com mais clareza.</p><div className="mt-10 border-t border-[#1c1b19]">{points.map((point) => <article key={point.number} className="grid gap-4 border-b border-[#d9d4ca] py-6 sm:grid-cols-[42px_1fr]"><span className="text-[10px] font-bold tracking-[.16em] text-[#f05a24]">{point.number}</span><div><h3 className="display text-2xl leading-none">{point.title}</h3><p className="mt-3 max-w-[520px] text-sm leading-6 text-[#817e76]">{point.text}</p></div></article>)}</div><div className="mt-10 border-l-2 border-[#f05a24] pl-5"><p className="text-base leading-7 text-[#1c1b19]">O objetivo não é acompanhar concorrentes por acompanhar. É entender melhor o cenário para tomar decisões com mais contexto.</p><p className="mt-3 text-xs leading-5 text-[#817e76]">O escopo e a frequência do acompanhamento são definidos de acordo com o segmento e os objetivos de cada negócio.</p></div></div>
  </div></div></section>;
}
