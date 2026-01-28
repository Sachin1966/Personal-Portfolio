import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Rocket, Target, Lightbulb } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "ML Intern at Cognifyz Technologies",
    description: "Worked on end-to-end machine learning pipelines, including data preprocessing, model training, and evaluation. Implemented predictive models and collaborated on integrating AI solutions into real-world applications.",
  },
  {
    icon: Rocket,
    title: "15+ Real-World Projects",
    description: "Built comprehensive AI, data analytics, and system projects solving real-world problems across healthcare, security, and smart cities.",
  },
  {
    icon: Target,
    title: "Strong Problem-Solving",
    description: "Deep expertise in system design, algorithm optimization, and creating scalable solutions for complex technical challenges.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Actively learning ML Ops, cloud technologies, and full-stack AI systems to stay at the cutting edge of technology.",
  },
];

const certifications = [
  {
    icon: GraduationCap,
    title: "Prompt Engineering",
    description: "AWS certification in prompt engineering techniques and best practices.",
  },
  {
    icon: Award,
    title: "Database Management Systems",
    description: "Udemy certification in DBMS concepts and SQL database management.",
  },
  {
    icon: Briefcase,
    title: "AI for Leadership",
    description: "Udemy certification on leveraging AI for strategic leadership and decision making.",
  },
  {
    icon: Award,
    title: "Foundation of Data Analytics",
    description: "LinkedIn Learning certification in data analytics fundamentals.",
  },
  {
    icon: GraduationCap,
    title: "Fundamentals of Web Development",
    description: "LinkedIn Learning certification in modern web development practices.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative bg-muted/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-mono text-primary uppercase tracking-widest">
              Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Learning <span className="gradient-text">Experience</span>
            </h2>
          </motion.div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-xl glass-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                  <exp.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{exp.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-mono text-primary uppercase tracking-widest">
              Credentials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Certifications & <span className="gradient-text">Learning</span>
            </h2>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group p-6 rounded-xl glass-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-sm">{cert.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;