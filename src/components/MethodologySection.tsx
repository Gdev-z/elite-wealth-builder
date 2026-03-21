import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { TrendingUp, Zap, HeadphonesIcon } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Planejamento Financeiro",
    desc: "Análise completa do seu perfil para montar a estratégia ideal de aquisição patrimonial.",
  },
  {
    icon: Zap,
    title: "Aceleração de Contemplação",
    desc: "Técnicas de lance embutido e estratégias inteligentes para contemplar antes do prazo.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Pós-Venda",
    desc: "Acompanhamento contínuo até a entrega das chaves e além. Você nunca fica sozinho.",
  },
];

const MethodologySection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto scroll-reveal">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Sua Tese de Investimento
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-[1.15]">
            O Segredo dos Grandes Patrimônios não é Sorte, é Estratégia.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Não sou uma vendedora de cotas. Sou uma especialista em alavancagem patrimonial e lances embutidos inteligentes — minha missão é fazer seu dinheiro trabalhar por você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="scroll-reveal flex flex-col items-center text-center p-8 rounded-xl bg-background border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <p.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
