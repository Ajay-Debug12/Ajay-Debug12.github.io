import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Users, BarChart3, Globe } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export function Projects() {
  const categories = [
    {
      id: "team",
      title: "Team Works",
      icon: <Users className="w-5 h-5 text-primary" />,
      projects: [
        {
          title: "Friday — The Life OS",
          description: "A comprehensive browser-based life management system. Built as a team flagship project, it integrates task management, calendar coordination, and memory tracking in a modern AI-inspired interface.",
          image: "/project-friday.png",
          tech: ["React", "AI Integration", "SPA", "Context APIs"],
          github: "https://github.com/Ajay-Debug12",
          link: "https://friday-736.pages.dev/",
        },
        {
          title: "AI-Enabled Smart Glass",
          description: "A collaborative hardware-software project. Developed a wearable device prototype featuring real-time voice assistance, BLE communication, and a full Python-based LLM pipeline for intelligent interaction.",
          image: "/project-smartglass.png",
          tech: ["Python", "NLTK", "BLE", "Edge Computing"],
          github: "https://github.com/Ajay-Debug12",
        }
      ]
    },
    {
      id: "analytics",
      title: "Data Analytics",
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
      projects: [
        {
          title: "Supersale KPI Dashboard",
          description: "Interactive Sales KPI Dashboard built in Microsoft Excel. Features multi-dimensional analysis of sales, profit, and regional performance using Pivot Tables, XLOOKUP, and advanced Conditional Formatting.",
          image: "/project-supersale.png",
          tech: ["Excel", "Pivot Tables", "XLOOKUP", "KPIs"],
          github: "https://github.com/Ajay-Debug12/Supersale_KPI_dashboard",
        },
        {
          title: "Customer Behavior Analysis",
          description: "End-to-end EDA project using Python to analyze customer purchasing behavior and revenue drivers. Features seasonal trend analysis, customer segmentation, and actionable business insights.",
          image: "/project-customer-behavior.png",
          tech: ["Python", "Pandas", "Seaborn", "EDA"],
          github: "https://github.com/Ajay-Debug12/customer_behavior_analysis",
        },
        {
          title: "Sales Engagement Dashboard",
          description: "Professional analytics suite visualizing multi-dimensional sales data. Features interactive slicers, KPI tracking, and trend analysis to drive data-informed business decisions.",
          image: "/project-dashboard-v2.jpeg",
          tech: ["Excel", "Power Query", "Pivot Analysis", "KPIs"],
          github: "https://github.com/Ajay-Debug12/Sales-dashboard-",
        }
      ]
    },
    {
      id: "web-software",
      title: "Websites & Softwares",
      icon: <Globe className="w-5 h-5 text-secondary" />,
      projects: [
        {
          title: "Premium Clothing Brand",
          description: "A visually stunning multi-page digital showroom for a boutique clothing line. Implements advanced hover states, responsive layouts, and a clean minimalist aesthetic.",
          image: "/project-clothing.png",
          tech: ["HTML5", "CSS3", "JavaScript", "Animation"],
          github: "https://github.com/Ajay-Debug12",
          link: "https://luxepr.netlify.app/",
        },
        {
          title: "Personal Goal Tracker",
          description: "A specialized system software for objective tracking and performance metrics. Designed to optimize personal focus and goal attainment through structured data recording.",
          image: "/project-portfolio.png", // Reusing this for now as a placeholder for the goal tracker
          tech: ["TypeScript", "System Design", "Local Storage"],
          github: "https://github.com/Ajay-Debug12",
        }
      ]
    }
  ];

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-10 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Portfolio Showcase</h2>
        <div className="w-20 h-1 bg-secondary rounded-full mb-6 relative">
          <div className="absolute inset-0 bg-secondary blur-sm"></div>
        </div>
        <p className="text-muted-foreground max-w-xl text-base md:text-lg">
          Explore my work categorized by domain — from large-scale team projects to focused data analytics and specialized software.
        </p>
      </motion.div>

      <div className="space-y-20">
        {categories.map((category, catIndex) => (
          <div key={category.id}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2.5 rounded-xl glass border border-foreground/10">
                {category.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-wide">{category.title}</h3>
              <div className="flex-grow h-px bg-gradient-to-r from-foreground/10 to-transparent ml-4"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {category.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col md:flex-row bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden h-full min-h-[260px]"
                >
                  {/* Image Container */}
                  <div className="w-full md:w-2/5 relative overflow-hidden bg-muted/30">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                  </div>

                  {/* Content Container */}
                  <div className="w-full md:w-3/5 p-6 flex flex-col justify-between relative">
                    {/* Floating Links - Visible on Hover for Desktop, Always for Mobile */}
                    <div className="absolute top-4 right-4 flex gap-2 z-20">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-card hover:bg-muted rounded-lg shadow-sm border border-border transition-all text-muted-foreground hover:text-primary">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-card hover:bg-muted rounded-lg shadow-sm border border-border transition-all text-muted-foreground hover:text-primary">
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>

                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors pr-10">{project.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tag, tIndex) => (
                        <span key={tIndex} className="text-[10px] font-medium px-2.5 py-1 bg-muted border border-border rounded-full text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <a href="https://github.com/Ajay-Debug12" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card hover:bg-muted border border-border shadow-sm px-8 py-4 rounded-2xl font-semibold text-foreground transition-all group">
            View Expanded Archive on GitHub 
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
