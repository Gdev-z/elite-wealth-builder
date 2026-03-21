import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ShieldCheck, UserCheck, Target } from "lucide-react";

const diffs = [
  {
    icon: ShieldCheck,
    title: "Especialista Homologada Ademicon",
    desc: "Certificação oficial e acesso a condições exclusivas para meus clientes.",
  },
  {
    icon: UserCheck,
    title: "Atendimento Personalizado de Alto Padrão",
    desc: "Cada cliente recebe uma estratégia única, desenhada para seu perfil e objetivos.",
  },
  {
    icon: Target,
    title: "Foco em ROI e Alavancagem",
    desc: "Meu compromisso é com resultados mensuráveis — seu patrimônio cresce de forma inteligente.",
  },
];

const DifferentialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-primary text-primary-foreground" ref={ref}>
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto scroll-reveal">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Diferenciais
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.15]">
            Por que Nos Escolher?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {diffs.map((d, i) => (
            <div
              key={d.title}
              className="scroll-reveal flex flex-col items-center text-center p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-5">
                <d.icon className="size-7 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">{d.title}</h3>
              <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
