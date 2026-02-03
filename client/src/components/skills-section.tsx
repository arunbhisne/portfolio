import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const skillEvolutions = [
  {
    traditional: "Wireframes & Mockups",
    aiNative: "Agent Topology Diagrams",
  },
  {
    traditional: "UI Components",
    aiNative: "Component Ontologies & JSON Schemas",
  },
  {
    traditional: "User Flows",
    aiNative: "Orchestration & Routing Logic",
  },
  {
    traditional: "Error States",
    aiNative: "Failure-Mode Trees & Recovery Patterns",
  },
  {
    traditional: "Design Systems",
    aiNative: "Machine-Addressable Design Systems",
  },
  {
    traditional: "User Testing",
    aiNative: "Evaluation Design & Golden Datasets",
  },
  {
    traditional: "Analytics Dashboards",
    aiNative: "Observability & Reasoning Traces",
  },
  {
    traditional: "Personas & Journeys",
    aiNative: "Intent Modeling & Behavior Specifications",
  },
];

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
            From traditional UX to engineering-grade AI deliverables
          </h2>
        </motion.div>

        <div className="grid gap-0.5 overflow-hidden rounded-md border border-border">
          <div className="grid grid-cols-[1fr_auto_1fr] bg-muted p-4 gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Traditional UX
            </span>
            <span className="w-8" />
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              AI-Native Engineering
            </span>
          </div>

          {skillEvolutions.map((skill, index) => (
            <motion.div
              key={skill.traditional}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="grid grid-cols-[1fr_auto_1fr] bg-background p-4 gap-4 items-center"
            >
              <span className="text-muted-foreground text-sm">
                {skill.traditional}
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="font-medium text-sm text-foreground">
                {skill.aiNative}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-sm text-muted-foreground max-w-xl"
        >
          This evolution reflects the shift from designing static interfaces to
          architecting autonomous systems that operate with probabilistic
          behaviors and require engineering-grade specifications.
        </motion.p>
      </div>
    </section>
  );
}
