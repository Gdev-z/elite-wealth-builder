import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useRef, useState, useEffect } from "react";

const results = [
  { label: "Imóvel de R$ 1.5M contemplado em 8 meses com lance embutido", color: "bg-primary/5" },
  { label: "Carro premium R$ 280K — contemplação em 4 meses", color: "bg-accent/5" },
  { label: "Apartamento de R$ 750K para investimento — contemplado em 6 meses", color: "bg-primary/5" },
  { label: "\"Melhor decisão financeira da minha vida!\" — Cliente contemplado", color: "bg-accent/5" },
  { label: "Casa de R$ 2.1M no litoral — estratégia de lance embutido", color: "bg-primary/5" },
  { label: "SUV R$ 320K — contemplação acelerada em 3 meses", color: "bg-accent/5" },
];

const ResultsSection = () => {
  const ref = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: true });

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScroll({
      left: el.scrollLeft > 4,
      right: el.scrollLeft < el.scrollWidth - el.clientWidth - 4,
    });
  };

  useEffect(() => {
    checkScroll();
  }, []);

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto scroll-reveal">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Vitrine de Resultados
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-[1.15]">
            A Prova de que Nossa Estratégia Funciona: Sonhos Realizados.
          </h2>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mt-14">
          {results.map((r, i) => (
            <div
              key={i}
              className={`scroll-reveal rounded-xl ${r.color} border border-border/40 overflow-hidden group`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center">
                <span className="text-muted-foreground/40 text-sm">Foto do resultado</span>
              </div>
              <p className="p-4 text-sm font-medium text-foreground leading-snug">{r.label}</p>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden mt-10 relative scroll-reveal">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {results.map((r, i) => (
              <div
                key={i}
                className={`min-w-[280px] flex-shrink-0 snap-center rounded-xl ${r.color} border border-border/40 overflow-hidden`}
              >
                <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center">
                  <span className="text-muted-foreground/40 text-xs">Foto do resultado</span>
                </div>
                <p className="p-4 text-sm font-medium text-foreground leading-snug">{r.label}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-3">
            {results.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
