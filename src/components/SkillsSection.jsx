import { useEffect, useRef, useState } from "react";

function SkillsComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "Spring Boot", icon: "devicon-spring-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Flask", icon: "devicon-flask-original" },
    { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
    { name: "OpenCV", icon: "devicon-opencv-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Eclipse", icon: "devicon-eclipse-plain colored" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => skillsRef.current && observer.unobserve(skillsRef.current);
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="py-16 bg-background/50">
      <div 
        className={`px-6 py-12 max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/5 p-5 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
            >
              <i className={`${skill.icon} text-6xl`}></i>
              <p className="mt-3 text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsComponent;
