import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-3 h-3 bg-accent rounded-full"
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-neon-cyan rounded-full"
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">Sachin A</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-primary mb-4"
          >
            AI Engineer | Data Analyst | Fullstack Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            I build intelligent systems that analyze, detect, automate, and protect
            using AI, ML, data analytics, and secure software engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow group"
              asChild
            >
              <a href="#projects">
                <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                View Projects
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 group"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="hover:bg-accent/10 text-accent group"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Contact Me
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;