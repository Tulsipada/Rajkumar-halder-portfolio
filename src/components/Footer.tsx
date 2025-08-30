import { Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background via-muted/30 to-secondary/50 border-t border-white/10 py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            <span>by</span>
            <a
              href="https://tulsipada.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground group-hover:text-primary transition-colors font-semibold flex items-center gap-1 group"
            >
              Tulsipada
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          
          <div className="text-sm text-foreground mb-4">
            © {new Date().getFullYear()} Rajkumar Halder. All rights reserved.
          </div>
          
          <div className="text-xs text-foreground">
            Portfolio designed and developed by{" "}
            <a
              href="https://rajkumar.itsmywork.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground group-hover:text-primary transition-colors font-medium flex items-center gap-1 group inline-flex"
            >
              Rajkumar
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
