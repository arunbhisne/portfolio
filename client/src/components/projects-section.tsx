import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Users, Sparkles, Check } from "lucide-react";

const projects = [
  {
    icon: ShoppingCart,
    title: "ConsciousCart - AI Agent for Sustainable Product Analysis",
    type: "Agentic System",
    description:
      "Built an AI agent system that scans product barcodes, retrieves sustainability data, and provides actionable recommendations. The system uses a multi-agent architecture (scanner \u2192 analyzer \u2192 recommendation engine) with custom evaluation metrics for accuracy and user trust.",
    techStack: ["Python", "LangChain", "Google AI Studio", "Gradio", "Vector DB"],
    outcomes: [
      "Architected 3-agent sequential topology with router logic",
      "Designed evaluation framework with 150+ golden dataset examples",
      "Achieved 87% recommendation accuracy with < 15% regeneration rate",
    ],
    gradient: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5",
  },
  {
    icon: Users,
    title: "Multi-Agent Customer Service System",
    type: "Thesis Project",
    description:
      "Designed a hierarchical agent system for customer support with intent classification, dynamic routing, and human-in-the-loop confirmations for high-stakes actions. Focused on transparency through reasoning traces and failure recovery patterns.",
    techStack: ["Python", "LangGraph", "FastAPI", "React", "OpenTelemetry"],
    outcomes: [
      "Specified planner-worker hierarchy with 5 specialized worker agents",
      "Designed Glass Box UI revealing step-by-step reasoning to users",
      "Created failure-mode trees with explicit escalation triggers",
    ],
    gradient: "from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5",
  },
  {
    icon: Sparkles,
    title: "Generative UI Co-Pilot",
    type: "Research Prototype",
    description:
      "Prototyped an agent that generates task-specific UI dynamically based on user intent, using a component ontology with strict JSON Schemas. Implemented streaming interactions and memory-driven context chips for personalization.",
    techStack: ["Vercel AI SDK", "React", "TypeScript", "Tailwind CSS"],
    outcomes: [
      "Defined 12-component ontology with validated JSON Schemas",
      "Implemented streaming token display with optimistic UI updates",
      "Designed memory inspector and deletion controls aligned with privacy",
    ],
    gradient: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 md:py-32 px-6"
      data-testid="section-projects"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground font-mono text-sm tracking-wider uppercase mb-4" data-testid="text-projects-label">
            Selected Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl" data-testid="text-projects-heading">
            Portfolio Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Case studies in AI-Native design spanning agentic systems, multi-agent workflows, and generative interfaces.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            >
              <Card
                className="overflow-hidden hover-elevate"
                data-testid={`card-project-${index}`}
              >
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-0">
                  <div
                    className={`bg-gradient-to-br ${project.gradient} p-8 lg:p-10 flex items-center justify-center min-h-[200px]`}
                  >
                    <project.icon className="h-16 w-16 text-primary/60" />
                  </div>

                  <div className="p-6 lg:p-8 space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-2">
                        <Badge variant="secondary" className="text-xs font-mono">
                          {project.type}
                        </Badge>
                        <h3 className="font-display font-semibold text-xl leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono bg-muted rounded-md text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Key Outcomes
                      </p>
                      <ul className="space-y-1.5">
                        {project.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="text-sm text-foreground flex items-start gap-2"
                          >
                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" size="sm" className="font-mono text-xs">
                      View Case Study
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
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
