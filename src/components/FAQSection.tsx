import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona o lance embutido?",
    a: "O lance embutido utiliza parte do próprio crédito do consórcio como oferta de lance. Isso significa que você não precisa desembolsar dinheiro extra para ser contemplado — a estratégia é planejada desde o início para maximizar suas chances.",
  },
  {
    q: "Qual o prazo médio de contemplação?",
    a: "Com nossas estratégias de lance embutido e planejamento financeiro, o prazo médio de contemplação dos nossos clientes é de 3 a 12 meses, muito abaixo da média do mercado.",
  },
  {
    q: "O consórcio é realmente mais vantajoso que o financiamento?",
    a: "Sim. No consórcio não há cobrança de juros — apenas uma taxa de administração diluída nas parcelas, que costuma ser significativamente menor do que os juros de um financiamento bancário. O resultado: você paga menos pelo mesmo bem.",
  },
  {
    q: "Preciso dar um valor de entrada?",
    a: "Não. O consórcio não exige entrada. As parcelas começam a ser pagas desde o início, e com a estratégia certa de lance, você pode ser contemplado rapidamente sem desembolso adicional.",
  },
  {
    q: "A consultoria realmente é gratuita?",
    a: "Sim. A primeira consulta é 100% gratuita e sem compromisso. Analisamos seu perfil, apresentamos a melhor estratégia e você decide se faz sentido para você.",
  },
];

const FAQSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container-narrow max-w-3xl">
        <div className="text-center scroll-reveal">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Perguntas Frequentes
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-[1.15]">
            Tire suas Dúvidas
          </h2>
        </div>

        <div className="mt-12 scroll-reveal" style={{ transitionDelay: "100ms" }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border/60 rounded-xl px-6 bg-background shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
