import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, Code } from "lucide-react";

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef(null);

  // All achievements as separate items
  const achievements = [
    {
      title: "Smart India Hackathon 2025",
      subtitle: "Top 7 Team",
      description: "Developed the Campus Virtual Power Plant project.",
      icon: <Award className="h-6 w-6" />,
      period: "2025"
    },
    {
      title: "Kod-E-Thon Winner",
      subtitle: "1st Prize",
      description: "Created Finacraft Assistant, an AI powered budgeting app.",
      icon: <Award className="h-6 w-6" />,
      period: "2025"
    },
    {
      title: "National Hackathon Participation",
      subtitle: "8+ Hackathons",
      description: "Participated in various national level and online hackathons.",
      icon: <Award className="h-6 w-6" />,
      period: "2022 - 2025"
    },
    {
      title: "National Level Organizer",
      subtitle: "Hackathon & Quiz",
      description: "Organizing committee member for national hackathon and quiz competition.",
      icon: <Award className="h-6 w-6" />,
      period: "2024"
    },
    {
      title: "Project Leadership",
      subtitle: "Major AI/ML Projects",
      description: "Led Smart Krishi, SafeVisionAI, Multi Disease Detection, MediScan AI.",
      icon: <Award className="h-6 w-6" />,
      period: "2023 - 2025"
    },
    {
      title: "Coding Achievement",
      subtitle: " second Place",
      description: "Secured Second place in a competitive college coding event.",
      icon: <Award className="h-6 w-6" />,
      period: "2023"
    },
    {
      title: "Technical Event Organizer",
      subtitle: "College Events",
      description: "Organized multiple tech and quiz competitions at college.",
      icon: <Award className="h-6 w-6" />,
      period: "2023 - 2025"
    },
    {
      title: "DSA Challenge",
      subtitle: "GFG 160 Days Challenge",
      description: "Completed majority of the challenge tasks with consistency.",
      icon: <Award className="h-6 w-6" />,
      period: "2024"
    },
    {
      title: "Project Development",
      subtitle: "ML, CV, IoT, Full Stack",
      description: "Built more than 5 real world end to end projects.",
      icon: <Award className="h-6 w-6" />,
      period: "2022 - 2025"
    },
    {
      title: "Google Hackathons",
      subtitle: "Active Participant",
      description: "Worked on creative and impactful Google hackathon ideas.",
      icon: <Award className="h-6 w-6" />,
      period: "2024 - 2025"
    }
  ];

  // Show only first 4 when collapsed
  const visibleAchievements = showMore ? achievements : achievements.slice(0, 4);

  // Your education + achievements
  const timeline = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Computer Science Engineering",
      subtitle: "Ballarpur Institute of Technology",
      description: "Final Year | CGPA: 7.7",
      period: "2022 - 2026",
    },
    ...visibleAchievements
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30"
    >
      <div className="container mx-auto max-w-5xl">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            My academic journey and accomplishments
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-[hsl(var(--gradient-via))] to-[hsl(var(--gradient-to))]" />

            {/* Timeline List */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="relative pl-20 group"
                >
                  {/* Icon */}
                  <div className="absolute left-4 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-primary/50">
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                    </div>

                    <p className="text-primary font-medium mb-2">{item.subtitle}</p>
                    <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-6">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition"
              >
                {showMore ? "View Less" : "View More"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
