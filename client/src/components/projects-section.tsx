import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MessageSquare, AlertTriangle, Sparkles } from "lucide-react";

const projects = [
  {
    icon: MessageSquare,
    title: "Agentic Customer Service Agent",
    description:
      "Designed a multi-agent orchestration system for enterprise customer support with human-in-the-loop escalation patterns and real-time observability.",
    outcomes: [
      "40% reduction in escalation time",
      "Real-time reasoning visibility",
      "Seamless agent handoffs",
    ],
    tags: ["Orchestration", "HITL", "Observability"],
    accent: "from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5",
  },
  {
    icon: AlertTriangle,
    title: "Uncertainty & Recovery Patterns",
    description:
      "Created a framework for handling probabilistic outputs with confidence scoring, uncertainty communication, and graceful degradation patterns.",
    outcomes: [
      "Trust calibration system",
      "Confidence visualization",
      "Failure mode mapping",
    ],
    tags: ["Failure Design", "Trust Building", "UX Patterns"],
    accent: "from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5",
  },
  {
    icon: Sparkles,
    title: "Generative UI Co-Pilot",
    description:
      "Built a streaming generative interface with memory-driven context that adapts UI components based on conversation history and user intent.",
    outcomes: [
      "Dynamic component generation",
      "Context-aware responses",
      "Streaming UI updates",
    ],
    tags: ["Generative UI", "Streaming", "Memory"],
    accent: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5",
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
            Case studies in AI-Native design
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            >
              <Card
                className="h-full overflow-hidden hover-elevate group"
                data-testid={`card-project-${index}`}
              >
                <div
                  className={`h-32 bg-gradient-to-br ${project.accent} flex items-center justify-center`}
                >
                  <project.icon className="h-10 w-10 text-muted-foreground/50" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-semibold text-lg leading-tight">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Key Outcomes
                    </p>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="text-sm text-foreground flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
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
