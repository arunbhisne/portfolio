import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Palette, Code } from "lucide-react";

const skillEvolutions = [
  {
    traditional: "Wireframes & Mockups",
    aiNative: "Agent Topology Diagrams",
    level: 5,
  },
  {
    traditional: "UI Components",
    aiNative: "Component Ontologies & JSON Schemas",
    level: 5,
  },
  {
    traditional: "User Flows",
    aiNative: "Orchestration & Routing Logic",
    level: 4,
  },
  {
    traditional: "Error States",
    aiNative: "Failure-Mode Trees & Recovery Patterns",
    level: 4,
  },
  {
    traditional: "Design Systems",
    aiNative: "Machine-Addressable Design Systems",
    level: 5,
  },
  {
    traditional: "User Testing",
    aiNative: "Evaluation Design & Golden Datasets",
    level: 4,
  },
  {
    traditional: "Analytics Dashboards",
    aiNative: "Observability & Reasoning Traces",
    level: 4,
  },
  {
    traditional: "Personas & Journeys",
    aiNative: "Intent Modeling & Behavior Specifications",
    level: 5,
  },
];

function SkillLevel({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            dot <= level ? "bg-foreground" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 md:py-32 px-6 bg-card"
      data-testid="section-skills"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground font-mono text-sm tracking-wider uppercase mb-4" data-testid="text-skills-label">
            Skills Evolution
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl" data-testid="text-skills-heading">
            From UX deliverables to production AI specifications
          </h2>
        </motion.div>

        <div className="grid gap-0.5 overflow-hidden rounded-md border border-border">
          <div className="grid grid-cols-[1fr_auto_1fr_auto] bg-muted p-4 gap-4">
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-muted-foreground" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Traditional UX
              </span>
            </div>
            <span className="w-8" />
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-foreground" />
              <span className="font-mono text-xs uppercase tracking-wider text-foreground">
                AI-Native Engineering
              </span>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground hidden md:block">
              Depth
            </span>
          </div>

          {skillEvolutions.map((skill, index) => (
            <motion.div
              key={skill.traditional}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="grid grid-cols-[1fr_auto_1fr_auto] bg-background p-4 gap-4 items-center group"
            >
              <span className="text-muted-foreground text-sm group-hover:text-muted-foreground/70 transition-colors">
                {skill.traditional}
              </span>
              <div className="relative">
                <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 1 + index * 0.1,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <div className="w-1 h-1 rounded-full bg-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>
              <span className="font-medium text-sm text-foreground bg-gradient-to-r from-foreground to-foreground bg-clip-text">
                {skill.aiNative}
              </span>
              <div className="hidden md:block">
                <SkillLevel level={skill.level} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-sm text-muted-foreground max-w-xl"
        >
          This progression reflects how I deliver deployable behavior specs,
          orchestration logic, and evaluation requirements for production AI
          systems.
        </motion.p>
      </div>
    </section>
  );
}
