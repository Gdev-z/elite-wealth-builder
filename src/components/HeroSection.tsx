import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import consultantImg from "@/assets/consultant-hero.jpg";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consultoria estratégica gratuita.";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 section-padding">
      <div className="container-narrow flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Image */}
        <div
          className="w-full max-w-sm lg:max-w-md animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={consultantImg}
              alt="Consultora de elite Ademicon"
              className="w-full h-auto object-cover"
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-foreground animate-fade-in-up"
          >
            Transforme seu Capital em{" "}
            <span className="text-primary">Patrimônio Sólido</span> com a Estratégia de Consórcio que os Grandes Investidores Usam.
          </h1>
          <p
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            A consultoria de elite que organiza suas finanças e acelera sua contemplação — sem juros abusivos.
          </p>
          <div
            className="mt-8 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <Button variant="cta" size="xl" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agende sua Consultoria Estratégica Gratuita
                <ArrowRight className="size-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
