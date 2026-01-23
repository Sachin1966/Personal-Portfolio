import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI & ML Expert",
    description: "Deep expertise in Machine Learning, Deep Learning, and Neural Networks",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Strong skills in SQL, Power BI, and data-driven decision making",
  },
  {
    icon: Sparkles,
    title: "Automation",
    description: "Creating intelligent automation platforms and monitoring systems",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-mono text-primary uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Building the Future with{" "}
              <span className="gradient-text">Intelligent Systems</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an <span className="text-foreground font-medium">AI & ML Engineer</span> with 
                a strong foundation in Python, SQL, Deep Learning, and Data Analytics. My passion 
                lies in building intelligent systems that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience in developing real-world AI systems, analytics 
                dashboards, and automation platforms, I bring a comprehensive approach to every project.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My interests span across <span className="text-primary font-medium">AI for healthcare</span>, 
                cybersecurity, monitoring systems, and smart cities — areas where technology 
                can make the most significant impact.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 rounded-lg glass-card">
                  <div className="text-3xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 rounded-lg glass-card">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground">Tech Stacks</div>
                </div>
                <div className="text-center p-4 rounded-lg glass-card">
                  <div className="text-3xl font-bold gradient-text">∞</div>
                  <div className="text-sm text-muted-foreground">Curiosity</div>
                </div>
              </div>
            </motion.div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group p-6 rounded-xl glass-card hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;