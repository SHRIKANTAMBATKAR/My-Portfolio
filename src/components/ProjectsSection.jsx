import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    
    {
      title: "SafeVisionAI",
      description: "Real-Time Women Safety Monitoring",
      highlight: "CCTV-based AI system detecting unsafe situations and alerting authorities in real-time.",
      techStack: ["React", "Python", "ML", "OpenCV"],
      image: new URL('../assets/project-safevision.jpg.png', import.meta.url).href,
      github: "https://github.com/SHRIKANTAMBATKAR/Safevision-AI",
    },
    {
      title: "Plant-Disease-detection",
      description: "AI-Powered Crop Disease Detection System",
      highlight: "AI model detects crop diseases and provides instant remedies for multiple crops like tomato, potato, grape, and apple.",
      techStack: ["React", "Python", "MobileNetV2", "EfficientNet"],
      gradient: "from-amber-500 to-orange-600",
  image: new URL('../assets/plant.png', import.meta.url).href,
  github: "https://github.com/SHRIKANTAMBATKAR/Plant-Disease-detection-",
    },
    {
      title: "Finacraft-assistant",
      description: "Expense & Investment Tracker",
      highlight: "Tracks expenses, investments, and provides actionable insights for financial planning.",
      techStack: ["React", "MongoDB", "Node.js", "Express"],
      image: new URL('../assets/finance.png', import.meta.url).href,
      github: "https://github.com/SHRIKANTAMBATKAR/finacraft-assistant",
    },
    {
      title: "MediScan AI – Disease Detection Using Medical Images",
      description: "Image-Based Disease Detection",
      highlight: "Detects skin diseases, eye issues, and X-ray abnormalities using a CNN-based model.",
      techStack: ["React", "Python", "TensorFlow", "CNN"],
  image: new URL('../assets/medisan.png', import.meta.url).href,
  github: "https://github.com/SHRIKANTAMBATKAR/Medisacan",
    },
   
  {
  title: "Foodes: Food Delivery App",
  description: "Java based food ordering and delivery system",
  highlight: "Allows users to browse menus, add items, and place food orders with admin management.",
  techStack: ["Java", "JDBC","spring", "MySQL"],
  image: new URL('../assets/foodes.png', import.meta.url).href,
  github: "https://github.com/SHRIKANTAMBATKAR/-Foodies---Food-Delivery-App-",
 },
{
  title: "Student Management System",
  description: "Web based student record management",
  highlight: "Handles student data with full CRUD operations using JSP and JDBC.",
  techStack: ["Java", "JSP", "Servlets", "JDBC", "MySQL"],
  image: new URL('../assets/sms.png', import.meta.url).href,
  github: "https://github.com/SHRIKANTAMBATKAR/Student-managment-System",
},
{
  title: "CampusVPP – Virtual Power Plant",
  description: "Smart energy monitoring and optimization system",
  highlight: "Tracks campus energy usage, predicts demand, and optimizes power distribution using IoT and analytics.",
  techStack: ["IoT", "Python", "Flask", "Sensors", "ML"],
  image: new URL('../assets/capmus.png', import.meta.url).href,
  github: "https://github.com/SHRIKANTAMBATKAR/campus-power-pulse",
},
{
  title: "Yield Predict Hub",
  description: "ML powered crop yield prediction system",
  highlight: "Predicts crop yield using soil, weather, and fertilizer data with ML models.",
  techStack: ["react", "talwindcss", "JS",],
  image: new URL('../assets/agri.png', import.meta.url).href,
  github: "https://yield-predict-hub.vercel.app/",
},
{
  title: "Smart Krishi",
  description: "Modern & Natural Farming Advisory Platform",
  highlight: "Bilingual web platform guiding users in modern and natural farming techniques with a personal assistant chatbot.",
  techStack: ["React", "Flask", "Python", "ML"],
  image: new URL('../assets/project-smart-krishi.jpg', import.meta.url).href,
  github: "https://github.com/SHRIKANTAMBATKAR/krishi-sathi-gyan",
},

];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      id="projects" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Innovative solutions built with modern technologies
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="card-hover group bg-card/50 backdrop-blur border-border/50 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <CardHeader>
                  <div className={`h-2 w-full rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.highlight}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium group/link mt-4"
                  >
                    View on GitHub
                    <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
