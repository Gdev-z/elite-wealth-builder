import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consultoria estratégica.";

const Footer = () => {
  return (
    <>
      <footer className="section-padding bg-foreground text-background/80 pb-12">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-semibold text-background text-lg">Consultora de Elite</p>
              <p className="text-sm mt-1 text-background/50">Homologada Ademicon</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-background/10 text-center text-xs text-background/40">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button variant="whatsapp" size="icon" className="w-14 h-14 rounded-full shadow-xl" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle className="size-6" />
          </a>
        </Button>
      </div>
    </>
  );
};

export default Footer;
