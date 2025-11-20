import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(var(--gradient-via))] to-[hsl(var(--gradient-to))] rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-card rounded-full border-2 border-primary/50 flex items-center justify-center overflow-hidden">
                  <img 
                    src={new URL('../assets/profile.jpg', import.meta.url).href} 
                    alt="Shrikant Ambatkar" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <div className="relative p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                   I am <span className="text-primary font-semibold">Shrikant Ambatkar</span>, a full stack developer and AI/ML enthusiast.
                  I build practical solutions that range from smart agriculture platforms
                   to real time visual monitoring systems. I work with React, Python, Flask,
                    and machine learning to create projects that solve real problems. I am also
                     expanding my skills in Java to strengthen my overall development foundation.

                  </p>
                </div>


              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {['Problem Solver', 'Innovation Driven', 'Team Player', 'Quick Learner'].map((trait, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <div className="pt-6">
                <Button 
                  size="lg"
                  className="group"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
