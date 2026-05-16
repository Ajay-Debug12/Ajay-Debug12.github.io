import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

interface TimelineItem {
  type: "work" | "education" | "certification";
  title: string;
  organization: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  tags?: string[];
}

export function Experience() {
  const timeline: TimelineItem[] = [
    {
      type: "work",
      title: "Junior Developer Intern",
      organization: "Z3Connect",
      period: "Apr 2026",
      duration: "1 month",
      location: "Nagercoil, Tamil Nadu · On-site",
      description: "Developed websites and landing pages using React.js, Next.js, and Firebase. Explored and worked with modern development tools while contributing to front-end development and web design projects.",
      tags: ["React.js", "Next.js", "Firebase", "Web Design"],
    },
    {
      type: "work",
      title: "AI & ML Intern",
      organization: "Fortura Tech",
      period: "Aug 2025 – Oct 2025",
      duration: "3 months",
      location: "Nagercoil, Tamil Nadu · On-site",
      description: "Used Python for data processing, automation, API integration, and implementing application logic while working with datasets to analyze business and user-related information and generate actionable insights.",
      tags: ["Python", "Data Analytics", "API Integration", "Automation"],
    },
    {
      type: "work",
      title: "Web Development Intern",
      organization: "AK Infopark Pvt Ltd",
      period: "Sep 2024 – Oct 2024",
      duration: "2 months",
      location: "Nagercoil, Tamil Nadu · On-site",
      description: "Developed responsive and user-friendly websites using HTML, CSS, and JavaScript. Contributed to front-end development by creating structured product sections, optimized layouts, and improving mobile rendering performance.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
    {
      type: "education",
      title: "B.Tech in AI & Data Science",
      organization: "St. Xavier's Catholic College of Engineering, Nagercoil",
      period: "2022 – 2026",
      duration: "4 years",
      location: "Nagercoil, Tamil Nadu",
      description: "Specializing in Artificial Intelligence & Data Science with a CGPA of 8.2. Active participant in technical seminars on Digital Twin Technologies, NCC, and led U14 & U17 Kabaddi teams.",
      tags: ["AI", "Data Science", "CGPA: 8.2"],
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Experience & Education</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg px-2">
          My journey through the world of data, AI, and technology — from academic foundations to hands-on industry impact.
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent"></div>

        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start mb-10 md:mb-12 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background shadow-sm -translate-x-[50%] mt-8 z-10 box-content">
              </div>

              {/* Content card */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                <div className="glass p-5 md:p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                  <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                    <div className={`p-2 rounded-lg ${
                      item.type === "work" ? "bg-primary/15 text-primary" : 
                      item.type === "certification" ? "bg-amber-400/15 text-amber-400" :
                      "bg-secondary/15 text-secondary"
                    }`}>
                      {item.type === "work" ? <Briefcase className="w-4 h-4" /> : 
                       item.type === "certification" ? <Award className="w-4 h-4" /> :
                       <GraduationCap className="w-4 h-4" />}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] md:text-xs font-mono text-muted-foreground tracking-wider uppercase">{item.period}</span>
                      <span className="text-[9px] md:text-[10px] text-muted-foreground/60">{item.duration} · {item.location}</span>
                    </div>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-xs md:text-sm font-medium text-primary/80 mb-3">{item.organization}</p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>

                  {item.tags && (
                    <div className={`flex flex-wrap gap-1.5 md:gap-2 mt-4 ${isLeft ? "md:justify-end" : ""}`}>
                      {item.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="text-[9px] md:text-[10px] uppercase tracking-wider font-semibold px-2 md:px-2.5 py-1 bg-muted border border-border rounded text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
