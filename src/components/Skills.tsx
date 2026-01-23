import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Brain, Database, Server, Layout, Wrench,
  BarChart3
} from "lucide-react";

const skillCategories = [
  {
    title: "AI / ML",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "CNN / LSTM", level: 80 },
      { name: "YOLO", level: 75 },
      { name: "NLP", level: 80 },
    ],
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "SQL", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "DAX", level: 80 },
      { name: "Pandas / NumPy", level: 90 },
      { name: "Statistics", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Python", level: 95 },
      { name: "Flask", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Django", level: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "React", level: 80 },
      { name: "Streamlit", level: 85 },
      { name: "HTML / CSS", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "from-indigo-500 to-violet-500",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "PyCharm", level: 85 },
      { name: "OpenCV", level: 80 },
      { name: "APIs", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-muted/30">
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
              Skills & Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              My <span className="gradient-text">Technical Arsenal</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning AI/ML, data analytics, and full-stack development.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="p-6 rounded-xl glass-card hover:border-primary/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;