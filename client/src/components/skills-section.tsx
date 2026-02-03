import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const skillEvolutions = [
  {
    traditional: "Wireframing user flows",
    aiNative: "Designing agent topologies",
    artifact: "Planner-worker topology diagram with router logic",
  },
  {
    traditional: "Information architecture",
    aiNative: "Context & knowledge architecture",
    artifact: "Memory schema with entity types, TTL, context injection rules",
  },
  {
    traditional: "Design system components",
    aiNative: "Component ontology & JSON Schemas",
    artifact: "TaskList, InsightPanel schemas with validation rules",
  },
  {
    traditional: "UX copy & microcopy",
    aiNative: "System prompts & safety messaging",
    artifact: "System prompt files with structured sections, refusal templates",
  },
  {
    traditional: "Usability testing scripts",
    aiNative: "Golden Datasets & Evals",
    artifact: "150+ QA pairs, eval rubrics, LLM-as-a-Judge instructions",
  },
  {
    traditional: "Journey maps",
    aiNative: "Intent models & outcome distributions",
    artifact: "Intent\u2192outcome matrix with success criteria",
  },
  {
    traditional: "Error states",
    aiNative: "Failure-mode & hallucination design",
    artifact: "Failure-mode trees with fallback logic, escalation triggers",
  },
  {
    traditional: "Motion & micro-interactions",
    aiNative: "Streaming & reasoning motion",
    artifact: "Token streaming specs, trace expansion behaviors",
  },
  {
    traditional: "Prototype in Figma",
    aiNative: "Prototype with real models & schemas",
    artifact: "GitHub repo with prompts, schemas, eval scripts",
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            From Traditional UX to AI-Native Design
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            How existing design skills evolve into engineering-grade deliverables.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-[1fr_auto_1fr_1fr] gap-4 bg-muted p-4 rounded-t-md">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Traditional Skill
              </span>
              <span className="w-8" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                AI-Native Evolution
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground hidden lg:block">
                Example Artifact
              </span>
            </div>

            <div className="border border-t-0 border-border rounded-b-md divide-y divide-border">
              {skillEvolutions.map((skill, index) => (
                <motion.div
                  key={skill.traditional}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className={`grid grid-cols-[1fr_auto_1fr_1fr] gap-4 p-4 items-center transition-colors ${
                    hoveredIndex === index ? "bg-muted/50" : "bg-background"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className="text-muted-foreground text-sm">
                    {skill.traditional}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium text-sm text-foreground">
                    {skill.aiNative}
                  </span>
                  <span className="text-xs text-muted-foreground leading-relaxed hidden lg:block">
                    {skill.artifact}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 lg:hidden"
        >
          <p className="text-xs text-muted-foreground italic">
            Hover or tap on rows to see example artifacts on larger screens.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
