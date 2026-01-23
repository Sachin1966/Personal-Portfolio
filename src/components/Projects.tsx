import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Multi-Organ Disease Detector",
    description: "AI system that predicts multiple diseases using medical data and ML models.",
    tech: ["Python", "ML", "Flask", "Pandas", "Scikit-learn"],
    features: ["Multi-disease prediction", "Risk scoring", "Dashboard"],
    category: "AI/ML",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Cyber Forensic Toolkit",
    description: "Digital forensics and evidence analysis platform for security investigations.",
    tech: ["Python", "AI", "Log Analysis", "NLP"],
    features: ["File analysis", "Threat logs", "Anomaly detection"],
    category: "Security",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    id: 3,
    title: "Cybersecurity Threat Detection",
    description: "ML-based system that detects malicious activity and network threats in real-time.",
    tech: ["Python", "ML", "Security Logs"],
    features: ["Real-time detection", "Alert system", "Threat analysis"],
    category: "Security",
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "RailFlow AI",
    description: "AI-powered railway analytics and safety monitoring system for smart transportation.",
    tech: ["Python", "ML", "Data Analytics"],
    features: ["Delay prediction", "Safety insights", "Route optimization"],
    category: "AI/ML",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 5,
    title: "Telemetry Agent",
    description: "System monitoring tool that collects performance and system data efficiently.",
    tech: ["Python", "APIs", "Monitoring"],
    features: ["Logs collection", "CPU/memory tracking", "Alerts"],
    category: "Tools",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    id: 6,
    title: "AegisML",
    description: "Self-monitoring AI model framework that detects model drift and auto-fixes errors.",
    tech: ["Python", "ML Ops", "Automation"],
    features: ["Drift detection", "Retraining", "Performance alerts"],
    category: "AI/ML",
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 7,
    title: "Urban Analytics",
    description: "Data analytics platform for smart city insights and urban planning.",
    tech: ["Power BI", "SQL", "Python"],
    features: ["Traffic analysis", "Pollution metrics", "Population insights"],
    category: "Analytics",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    id: 8,
    title: "InsightFlow",
    description: "Business intelligence and data dashboard system for enterprise analytics.",
    tech: ["Power BI", "SQL", "Pandas"],
    features: ["KPI dashboards", "Forecasting", "Data visualization"],
    category: "Analytics",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    id: 9,
    title: "Pencil Sketch Generator",
    description: "Image-to-sketch AI converter with real-time processing capabilities.",
    tech: ["OpenCV", "Python"],
    features: ["Real-time conversion", "Multiple styles", "Batch processing"],
    category: "AI/ML",
    gradient: "from-gray-500/20 to-slate-500/20",
  },
  {
    id: 10,
    title: "Library Management System",
    description: "OOP-based library automation system with comprehensive admin features.",
    tech: ["Python", "OOP", "SQLite"],
    features: ["Issue/return", "Fine calculation", "Admin login"],
    category: "Tools",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

const categories = ["All", "AI/ML", "Security", "Analytics", "Tools"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-mono text-primary uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of AI, data analytics, and security projects that showcase 
              my technical expertise and problem-solving abilities.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground neon-glow"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`group p-6 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 bg-gradient-to-br ${project.gradient}`}
                >
                  {/* Category Badge */}
                  <Badge variant="secondary" className="mb-4">
                    {project.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 rounded-md bg-background/50 text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;