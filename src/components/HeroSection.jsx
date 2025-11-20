import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileDown, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={new URL('../assets/hero-bg.jpg', import.meta.url).href} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-gradient-shift bg-[length:200%_200%]" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Shrikant Ambatkar</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            Full-Stack Web Developer | AI/ML Innovator | Creator of Practical Solutions
          </p>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about building innovative solutions that combine modern web technologies 
            with artificial intelligence to solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-6 text-lg group"
              asChild
            >
              <a 
                href="/shrikant_resume.pdf" 
                download="Shrikant_Ambatkar_Resume.pdf"
              >
                <FileDown className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/SHRIKANTAMBATKAR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/shrikant-ambatkar-803174246" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:shrikantambatkar8@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
