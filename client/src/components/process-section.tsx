import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Network, 
  MessageSquareCode, 
  TestTube, 
  Eye,
  ChevronDown,
  ChevronUp,
  Download,
  RefreshCw
} from "lucide-react";

const processSteps = [
  {
    icon: Target,
    number: "01",
    title: "Intent Modeling",
    description:
      "Define user goals, system capabilities, and the probabilistic space of possible interactions.",
    details: [
      "Map user intents to system capabilities",
      "Define success criteria for each interaction type",
      "Identify edge cases and ambiguous inputs",
      "Create intent classification taxonomies",
    ],
    output: "Intent Specification Document",
  },
  {
    icon: Network,
    number: "02",
    title: "Agent Topology",
    description:
      "Design the orchestration layer: which agents exist, how they coordinate, and when to escalate.",
    details: [
      "Define agent roles and responsibilities",
      "Map coordination protocols between agents",
      "Design escalation and handoff triggers",
      "Create autonomy matrices for human oversight",
    ],
    output: "Agent Topology Diagram",
    hasLoop: true,
    loopTo: "01",
  },
  {
    icon: MessageSquareCode,
    number: "03",
    title: "System Prompts",
    description:
      "Craft machine-addressable specifications that define agent behaviors and output structures.",
    details: [
      "Write role definitions and constraints",
      "Define output schemas and formats",
      "Create behavioral guidelines and guardrails",
      "Design fallback and error handling prompts",
    ],
    output: "System Prompt Library",
  },
  {
    icon: TestTube,
    number: "04",
    title: "Evaluation Design",
    description:
      "Build golden datasets and evals that measure behavioral quality, not just accuracy.",
    details: [
      "Create golden datasets for each intent",
      "Design behavioral evaluation criteria",
      "Implement LLM-as-Judge frameworks",
      "Set up regression testing pipelines",
    ],
    output: "Evaluation Framework",
    hasLoop: true,
    loopTo: "01",
  },
  {
    icon: Eye,
    number: "05",
    title: "Observability",
    description:
      "Create glass-box interfaces that make AI reasoning visible, auditable, and debuggable.",
    details: [
      "Design reasoning trace visualizations",
      "Create confidence and uncertainty indicators",
      "Build developer debugging dashboards",
      "Implement provenance tracking",
    ],
    output: "Observability Dashboard",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

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
            How I architect AI-Native systems
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            A five-step workflow for designing reliable, auditable AI product
            behavior.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                <div className="absolute left-6 md:left-8 -translate-x-1/2 top-6">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-background border-2 border-border flex items-center justify-center"
                    animate={expandedStep === index ? { scale: 1.2 } : { scale: 1 }}
                  >
                    <div className={`w-2 h-2 rounded-full ${expandedStep === index ? 'bg-foreground' : 'bg-muted'}`} />
                  </motion.div>
                </div>

                {step.hasLoop && (
                  <div className="absolute left-6 md:left-8 -translate-x-1/2 top-[80%]">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 0.3 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-center gap-1 text-xs text-muted-foreground"
                    >
                      <RefreshCw className="h-3 w-3" />
                    </motion.div>
                  </div>
                )}

                <Card
                  className={`ml-12 md:ml-16 p-6 cursor-pointer transition-all duration-300 ${
                    expandedStep === index ? 'ring-1 ring-border' : ''
                  }`}
                  onClick={() => toggleStep(index)}
                  data-testid={`card-process-step-${index}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-muted">
                          <step.icon className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-xs text-muted-foreground">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="font-display font-semibold text-lg">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {expandedStep === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-4 space-y-4"
                        >
                          <div>
                            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                              Key Activities
                            </p>
                            <ul className="space-y-1.5">
                              {step.details.map((detail) => (
                                <li key={detail} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                              Output
                            </p>
                            <span className="text-sm text-foreground">
                              {step.output}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <button className="p-1 hover:bg-muted rounded-sm transition-colors shrink-0">
                      {expandedStep === index ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Button
            variant="outline"
            className="font-display"
            data-testid="button-download-framework"
            onClick={() =>
              window.open(
                "mailto:arun.bhisne@gmail.com?subject=Process%20Framework%20Request",
                "_blank",
              )
            }
          >
            <Download className="mr-2 h-4 w-4" />
            Request Process Framework
          </Button>
          <p className="text-xs text-muted-foreground">
            PDF with templates and checklists, shared on request
          </p>
        </motion.div>
      </div>
    </section>
  );
}
