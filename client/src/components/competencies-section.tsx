import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dice5, 
  GitBranch, 
  FileCode2, 
  BarChart3, 
  Layers,
  ChevronDown
} from "lucide-react";

const competencies = [
  {
    icon: Dice5,
    title: "Probabilistic Behavior & Failure Design",
    shortDesc: "Designing for distributions of outputs, not single \"happy paths.\"",
    fullDesc: "Mapping failure modes (hallucinations, tool mismatches, retrieval failures) and specifying fallback strategies, confidence thresholds, and human escalation points.",
    artifacts: ["Uncertainty communication specs", "Failure-mode trees", "Regeneration policies", "Logprob thresholds"],
  },
  {
    icon: GitBranch,
    title: "Orchestration & Agent Topologies",
    shortDesc: "Architecting multi-agent systems with sequential, hierarchical, or parallel topologies.",
    fullDesc: "Specifying router logic, autonomy matrices, and state machines that determine how agents collaborate to fulfill user intents.",
    artifacts: ["Agent topology diagrams", "Router decision tables", "Autonomy matrices", "Orchestration state machines"],
  },
  {
    icon: FileCode2,
    title: "System Prompting & Generative UI",
    shortDesc: "Authoring system prompts as machine-addressable contracts.",
    fullDesc: "Defining component ontologies with strict JSON Schemas. Designing generative UI where agents emit structured UI state that maps to renderable components.",
    artifacts: ["System prompts", "Tool definitions", "Component ontologies", "JSON Schemas", "Generative UI state specs"],
  },
  {
    icon: BarChart3,
    title: "Evaluation Design & Behavioral Metrics",
    shortDesc: "Creating Golden Datasets (50-200+ examples) and evaluation suites.",
    fullDesc: "Measuring regeneration rate, override rate, safety violations, and task-specific quality using LLM-as-a-Judge and rule-based scoring.",
    artifacts: ["Golden Datasets", "Eval rubrics", "Behavioral metrics", "LLM-as-a-Judge instructions", "Feedback mechanisms"],
  },
  {
    icon: Layers,
    title: "Observability & Reasoning Traces",
    shortDesc: "Designing Glass Box experiences that reveal model reasoning at appropriate abstraction levels.",
    fullDesc: "Specifying trace schemas, provenance labels, and developer debugging interfaces aligned with OpenTelemetry-style spans.",
    artifacts: ["Trace schemas", "Glass Box UI specs", "Provenance labeling rules", "Developer debugging views", "Explainability components"],
  },
];

export function CompetenciesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
            The 5 Core Domains
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Engineering-grade competencies that define AI-Native product design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {competencies.map((comp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card
                  className={`h-full p-6 cursor-pointer transition-all duration-300 hover-elevate ${
                    isExpanded ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  data-testid={`card-competency-${index}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-primary/10">
                          <comp.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-mono text-xs text-muted-foreground">
                          0{index + 1}
                        </span>
                      </div>
                      <ChevronDown 
                        className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <h3 className="font-display font-semibold text-base leading-tight">
                      {comp.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {comp.shortDesc}
                    </p>

                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0
                      }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {comp.fullDesc}
                        </p>
                        <div>
                          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                            Key Artifacts
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {comp.artifacts.map((artifact) => (
                              <Badge
                                key={artifact}
                                variant="secondary"
                                className="text-xs font-mono"
                              >
                                {artifact}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
