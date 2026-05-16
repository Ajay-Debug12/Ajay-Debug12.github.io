import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail } from "lucide-react";

export function About() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="glass p-6 md:p-10 rounded-2xl border border-foreground/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main bio */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Energetic and fast-learning <span className="text-foreground font-medium">B.Tech Graduate</span> with hands-on experience in web development and data analytics. Passionate about building practical solutions and continuously improving technical skills.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I specialize in creating responsive, well-structured web applications and transforming raw data into meaningful insights. From building smart glass prototypes with AI to developing analytics dashboards, I thrive at the intersection of technology and problem-solving.
            </p>
          </div>

          {/* Quick info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <p className="text-foreground font-medium text-sm">B.Tech AI & Data Science</p>
                <p className="text-muted-foreground text-xs">St. Xavier's, Nagercoil</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-foreground font-medium text-sm">Nagercoil, India</p>
                <p className="text-muted-foreground text-xs">Available remotely</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="p-2 bg-emerald-400/10 rounded-lg text-emerald-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-foreground font-medium text-sm">ajayaj004@gmail.com</p>
                <p className="text-muted-foreground text-xs">Reach out anytime</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
