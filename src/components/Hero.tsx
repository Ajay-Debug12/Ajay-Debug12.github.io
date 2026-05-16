import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 dark:opacity-40">
        <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 rounded-full blur-[100px] md:blur-[150px] -top-40 -right-20 animate-pulse-slow"></div>
        <div className="absolute w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-secondary/20 rounded-full blur-[80px] md:blur-[120px] bottom-10 md:-bottom-20 -left-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-5 md:gap-6 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary w-fit text-xs md:text-sm font-medium mx-auto md:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
            Building Context <br />
            From <span className="text-primary">Chaos.</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-lg leading-relaxed mx-auto md:mx-0">
            I'm <span className="text-foreground font-medium">Ajay A</span>, a B.Tech AI & Data Science Graduate passionate about building practical web solutions and diving deep into data analytics.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 mt-2 md:mt-4">
            <a href="#projects" className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 md:px-6 py-3 rounded-md font-semibold transition-all text-sm md:text-base">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/Ajay_Resume.pdf" download="Ajay_Resume.pdf" className="px-5 md:px-6 py-3 rounded-md font-semibold border border-foreground/10 hover:bg-foreground/5 transition-all text-foreground text-sm md:text-base">
              Download Resume
            </a>
            <a href="/Ajay_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 md:px-6 py-3 rounded-md font-semibold border border-foreground/10 hover:bg-foreground/5 transition-all text-foreground text-sm md:text-base hidden sm:inline-flex">
              View Resume
            </a>
            <a href="#contact" className="px-5 md:px-6 py-3 rounded-md font-semibold text-muted-foreground hover:text-foreground transition-all text-sm md:text-base">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Profile Photo */}
          {/* Profile Container - Modern Squircle Design */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[24rem] lg:h-[24rem]">
            {/* Primary soft glow */}
            <div className="absolute inset-0 bg-primary/15 rounded-[3rem] blur-3xl opacity-60"></div>
            
            {/* Secondary tech-aura glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/10 to-transparent rounded-[4rem] blur-2xl opacity-40 animate-pulse-slow"></div>

            {/* Main Image Frame */}
            <div className="relative w-full h-full rounded-[3.5rem] border border-border p-3 bg-white shadow-xl dark:bg-card">
              <div className="w-full h-full rounded-[2.8rem] overflow-hidden border border-border/50 bg-stone-50 relative group">
                <img 
                  src="/ajay-photo.jpeg" 
                  alt="Ajay A" 
                  className="
                    w-full 
                    h-full 
                    object-cover 
                    object-[40%_42%]
                    scale-[1.7]
                    transition-all 
                    duration-700 
                    group-hover:scale-[1.8]
                  "
                />
                {/* Subtle overlay for depth - using a warm tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent opacity-60"></div>
              </div>
            </div>

            {/* Floating badge - top right (AI Focus) */}
            <motion.div 
              className="absolute -top-4 -right-4 glass px-5 py-2.5 rounded-2xl shadow-lg border border-border flex items-center gap-2 animate-float"
              style={{ animationDelay: '0s' }}
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-primary font-bold text-xs md:text-sm uppercase tracking-wider">AI Builder</span>
            </motion.div>

            {/* Floating badge - bottom left (Data Focus) */}
            <motion.div 
              className="absolute -bottom-4 -left-4 glass px-5 py-2.5 rounded-2xl shadow-lg border border-border flex items-center gap-2 animate-float text-xs md:text-sm"
              style={{ animationDelay: '-3s' }}
            >
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              <span className="text-secondary font-bold uppercase tracking-wider">Data Analyst</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-[10px] md:text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
