import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Shuffle, 
  GitBranch, 
  FileCode, 
  BarChart3, 
  Search,
  ArrowRight
} from "lucide-react";

const tagDefinitions: Record<string, string> = {
  "Uncertainty Handling": "Designing interfaces that gracefully communicate and manage probabilistic outputs",
  "Failure Modes": "Mapping potential system failures and designing recovery patterns",
  "Graceful Degradation": "Ensuring systems maintain core functionality when components fail",
  "Multi-Agent": "Systems where multiple AI agents coordinate to solve complex tasks",
  "Router Logic": "Decision trees that direct requests to appropriate specialized agents",
  "Autonomy Matrices": "Frameworks defining when AI acts alone vs. requires human approval",
  "System Prompts": "Instructions that define an AI agent's personality, constraints, and capabilities",
  "JSON Schemas": "Structured output formats that bridge natural language to deterministic UIs",
  "Component Ontologies": "Taxonomies of UI components an AI can generate",
  "Golden Datasets": "Curated evaluation sets representing ideal system behavior",
  "Evals": "Automated tests measuring AI behavior quality beyond accuracy",
  "LLM-as-Judge": "Using language models to evaluate other model outputs",
  "Glass Box UX": "Making AI decision-making transparent and visible to users",
  "Provenance": "Tracing AI outputs back to their source data and reasoning",
  "Debug Interfaces": "Developer tools for understanding AI system behavior",
};

const competencies = [
  {
    icon: Shuffle,
    title: "Probabilistic Behavior & Failure Design",
    description:
      "Design uncertainty handling, fallback logic, and recovery behavior that keeps core tasks reliable under low confidence.",
    tags: ["Uncertainty Handling", "Failure Modes", "Graceful Degradation"],
    relatedProject: "projects",
  },
  {
    icon: GitBranch,
    title: "Orchestration & Agent Topologies",
    description:
      "Define multi-agent routing, delegation, and escalation rules so complex workflows remain predictable and debuggable.",
    tags: ["Multi-Agent", "Router Logic", "Autonomy Matrices"],
    relatedProject: "projects",
  },
  {
    icon: FileCode,
    title: "System Prompting & Generative UI",
    description:
      "Create prompt and schema contracts that turn open-ended intent into deterministic interface behavior.",
    tags: ["System Prompts", "JSON Schemas", "Component Ontologies"],
    relatedProject: "projects",
  },
  {
    icon: BarChart3,
    title: "Evaluation Design & Behavioral Metrics",
    description:
      "Build evaluation systems that track behavior quality, regression risk, and reliability beyond basic accuracy scores.",
    tags: ["Golden Datasets", "Evals", "LLM-as-Judge"],
    relatedProject: "projects",
  },
  {
    icon: Search,
    title: "Observability & Reasoning Traces",
    description:
      "Design observability surfaces that explain AI decisions to users and accelerate debugging for product teams.",
    tags: ["Glass Box UX", "Provenance", "Debug Interfaces"],
    relatedProject: "projects",
  },
];

export function CompetenciesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

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
                className="h-full p-6 hover-elevate group transition-all duration-300"
                data-testid={`card-competency-${index}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-muted group-hover:bg-foreground/10 transition-colors">
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
                      <Tooltip key={tag}>
                        <TooltipTrigger asChild>
                          <span
                            className="px-2 py-1 text-xs font-mono bg-muted rounded-sm text-muted-foreground cursor-help hover:bg-muted/80 transition-colors"
                            data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {tag}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-xs">{tagDefinitions[tag]}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>

                  <button
                    onClick={scrollToProjects}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-2 opacity-0 group-hover:opacity-100"
                    data-testid={`link-see-project-${index}`}
                  >
                    <span>View related work</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
