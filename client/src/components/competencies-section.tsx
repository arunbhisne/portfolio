import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { 
  Shuffle, 
  GitBranch, 
  FileCode, 
  BarChart3, 
  Search 
} from "lucide-react";

const competencies = [
  {
    icon: Shuffle,
    title: "Probabilistic Behavior & Failure Design",
    description:
      "Designing for uncertainty, hallucinations, and failure modes. Building systems that degrade gracefully and maintain user trust even when AI outputs are unexpected.",
    tags: ["Uncertainty Handling", "Failure Modes", "Graceful Degradation"],
  },
  {
    icon: GitBranch,
    title: "Orchestration & Agent Topologies",
    description:
      "Multi-agent systems, router logic, autonomy matrices. Designing how AI agents coordinate, delegate, and escalate across complex workflows.",
    tags: ["Multi-Agent", "Router Logic", "Autonomy Matrices"],
  },
  {
    icon: FileCode,
    title: "System Prompting & Generative UI",
    description:
      "Component ontologies, JSON schemas, machine-addressable design. Creating structured outputs that bridge natural language with deterministic interfaces.",
    tags: ["System Prompts", "JSON Schemas", "Component Ontologies"],
  },
  {
    icon: BarChart3,
    title: "Evaluation Design & Behavioral Metrics",
    description:
      "Golden datasets, evals, LLM-as-a-Judge frameworks. Building measurement systems that track AI behavior quality beyond simple accuracy.",
    tags: ["Golden Datasets", "Evals", "LLM-as-Judge"],
  },
  {
    icon: Search,
    title: "Observability & Reasoning Traces",
    description:
      "Glass Box UX, provenance, developer debugging interfaces. Making AI decision-making visible and auditable for both users and developers.",
    tags: ["Glass Box UX", "Provenance", "Debug Interfaces"],
  },
];

export function CompetenciesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="competencies"
      ref={ref}
      className="py-24 md:py-32 px-6"
      data-testid="section-competencies"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground font-mono text-sm tracking-wider uppercase mb-4" data-testid="text-competencies-label">
            Core Competencies
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl" data-testid="text-competencies-heading">
            Five domains of AI-Native product design
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {competencies.map((comp, index) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card
                className="h-full p-6 hover-elevate"
                data-testid={`card-competency-${index}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-muted">
                      <comp.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-base leading-tight">
                    {comp.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {comp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {comp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-muted rounded-sm text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
