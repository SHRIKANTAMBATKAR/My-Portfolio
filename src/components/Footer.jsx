import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/SHRIKANTAMBATKAR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/shrikant-ambatkar-803174246" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a 
              href="mailto:shrikantambatkar8@gmail.com"
              className="p-3 rounded-full bg-background hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" /> by Shrikant Ambatkar
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <span className="text-muted-foreground">•</span>
            <button 
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <span className="text-muted-foreground">•</span>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <span className="text-muted-foreground">•</span>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
