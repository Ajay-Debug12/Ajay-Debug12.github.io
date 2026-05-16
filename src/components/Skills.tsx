import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, Code2, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../lib/firebase";

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "skills")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const skillsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSkills(skillsData);
    });
    return () => unsubscribe();
  }, []);

  // Helper to pick an icon based on title or fallback to a default
  const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("program") || t.includes("web") || t.includes("code")) return <Code2 className="w-7 h-7 md:w-8 md:h-8 text-primary" />;
    if (t.includes("data") || t.includes("analy")) return <BarChart3 className="w-7 h-7 md:w-8 md:h-8 text-emerald-400" />;
    if (t.includes("ai") || t.includes("machine") || t.includes("intel")) return <BrainCircuit className="w-7 h-7 md:w-8 md:h-8 text-secondary" />;
    return <Wrench className="w-7 h-7 md:w-8 md:h-8 text-amber-400" />;
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Core Competencies</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg px-2">
          My technical expertise spans web development, data analytics, and AI — always focused on building practical, impactful solutions.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 max-w-6xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className="group relative h-full"
          >
            {/* Clean subtle hover shadow instead of neon glow */}
            
            <div className="glass p-6 md:p-8 rounded-2xl border border-border group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-300 h-full flex flex-col relative overflow-hidden">
               
              <div className="mb-5 md:mb-6 p-3 md:p-4 glass w-fit rounded-xl border border-foreground/10 shadow-lg">
                {getIcon(skill.title || "")}
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 tracking-wide">{skill.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 md:mb-8 flex-grow">
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {(skill.tags || []).map((tag: string, tagIndex: number) => (
                  <span 
                    key={tagIndex} 
                    className="text-[10px] font-medium px-2.5 py-1 bg-muted border border-border rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
