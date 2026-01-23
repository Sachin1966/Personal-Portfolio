import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Rocket, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Anna University Zone Handball Winners",
    year: "2023-2026",
    description: "Consecutive zone-level handball championship victories.",
  },
  {
    icon: Medal,
    title: "Anna University Interzone Handball Runners",
    year: "2023-2025",
    description: "Runner-up at the interzone handball competition.",
  },
  {
    icon: Rocket,
    title: "ISRO Hackathon Participant",
    year: "",
    description: "Participated in the prestigious ISRO hackathon event.",
  },
  {
    icon: Award,
    title: "TCS Quiz Participant",
    year: "",
    description: "Participated in TCS national level quiz competition.",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 md:py-32 relative">
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
              Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              <span className="gradient-text">Achievements</span>
            </h2>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <achievement.icon className="h-7 w-7 text-primary" />
                </div>
                {achievement.year && (
                  <span className="text-xs font-mono text-primary mb-2 block">
                    {achievement.year}
                  </span>
                )}
                <h3 className="font-semibold mb-2 text-sm">{achievement.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
