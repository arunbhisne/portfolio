import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Target, 
  GitBranch, 
  FileCode2, 
  Palette, 
  BarChart3, 
  Layers,
  Rocket
} from "lucide-react";
import { Card } from "@/components/ui/card";

const processSteps = [
  {
    icon: Target,
    number: "01",
    title: "Intent & Behavior Modeling",
    description: "Map user intents and desired system behaviors. Define success criteria and acceptable failure modes.",
    deliverables: ["Intent model", "Behavior specifications"],
  },
  {
    icon: GitBranch,
    number: "02",
    title: "Agent Topology Design",
    description: "Architect sequential, hierarchical, or hybrid agent structures. Specify router logic and decision policies.",
    deliverables: ["Topology diagrams", "Router decision tables"],
  },
  {
    icon: FileCode2,
    number: "03",
    title: "System Prompting & Tool Definition",
    description: "Author system prompts as versioned configuration files. Define tool contracts with input/output schemas.",
    deliverables: ["System prompt files", "Tool definitions"],
  },
  {
    icon: Palette,
    number: "04",
    title: "Generative UI & Component Design",
    description: "Define component ontology with JSON Schemas. Design generative UI state specifications.",
    deliverables: ["Component catalog", "GenUI schemas"],
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Evaluation Framework Design",
    description: "Create Golden Datasets with edge cases. Design eval rubrics and scoring functions.",
    deliverables: ["Golden Datasets", "Eval configs", "Dashboards"],
  },
  {
    icon: Layers,
    number: "06",
    title: "Observability & Glass Box UX",
    description: "Specify trace schemas and visibility rules. Design reasoning trace visualizations.",
    deliverables: ["Trace specs", "Glass Box UI mocks"],
  },
  {
    icon: Rocket,
    number: "07",
    title: "Testing, Iteration & Deployment",
    description: "Run evals and analyze distributions. Iterate on prompts, schemas, and UX based on metrics.",
    deliverables: ["Eval reports", "Iteration logs", "Monitoring"],
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="py-24 md:py-32 px-6 bg-card"
      data-testid="section-process"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-muted-foreground font-mono text-sm tracking-wider uppercase mb-4" data-testid="text-process-label">
            Design Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl" data-testid="text-process-heading">
            The AI-Native Design Process
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            From intent modeling to production-ready agentic systems.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[27px] w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                <div className="flex gap-6">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-14 h-14 rounded-lg bg-background border border-border flex items-center justify-center shrink-0 relative z-10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <Card className="flex-1 p-6 hover-elevate" data-testid={`card-process-${index}`}>
                    <div className="flex md:hidden items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-mono text-sm text-muted-foreground">
                        Step {step.number}
                      </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="hidden md:flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs text-muted-foreground">
                            Step {step.number}
                          </span>
                        </div>
                        <h3 className="font-display font-semibold text-lg">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <div className="md:text-right md:min-w-[180px]">
                        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                          Deliverables
                        </p>
                        <div className="flex flex-wrap md:justify-end gap-1.5">
                          {step.deliverables.map((deliverable) => (
                            <span
                              key={deliverable}
                              className="px-2 py-1 text-xs font-mono bg-muted rounded-sm text-muted-foreground"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
