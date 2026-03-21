import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consultoria estratégica.";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container-narrow flex items-center justify-between h-16 px-5 md:px-8">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground tracking-wide">
            Consultora de Elite
          </span>
          <span className="text-muted-foreground text-sm font-light">|</span>
          <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
            Ademicon
          </span>
        </div>
        <Button variant="whatsapp" size="sm" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="size-4" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
