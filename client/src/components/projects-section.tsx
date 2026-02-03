import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  MessageSquare, 
  AlertTriangle, 
  Sparkles,
  Github,
  TrendingUp,
  Clock,
  CheckCircle2,
  Plus
} from "lucide-react";

const projects = [
  {
    icon: MessageSquare,
    title: "Agentic Customer Service Agent",
    subtitle: "Multi-agent orchestration for enterprise support",
    description:
      "Designed a multi-agent orchestration system for enterprise customer support with human-in-the-loop escalation patterns and real-time observability.",
    context: "Personal Project",
    outcomes: [
      { metric: "40%", label: "Faster escalation" },
      { metric: "Real-time", label: "Reasoning visibility" },
      { metric: "Seamless", label: "Agent handoffs" },
    ],
    techStack: ["LangGraph", "Python", "FastAPI", "React"],
    tags: ["Orchestration", "HITL", "Observability"],
    accent: "from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5",
    hasDemo: true,
    hasRepo: true,
  },
  {
    icon: AlertTriangle,
    title: "Uncertainty & Recovery Patterns",
    subtitle: "Framework for probabilistic output handling",
    description:
      "Created a framework for handling probabilistic outputs with confidence scoring, uncertainty communication, and graceful degradation patterns.",
    context: "Research Project",
    outcomes: [
      { metric: "Trust", label: "Calibration system" },
      { metric: "Visual", label: "Confidence scoring" },
      { metric: "Mapped", label: "Failure modes" },
    ],
    techStack: ["Python", "Streamlit", "OpenAI Evals"],
    tags: ["Failure Design", "Trust Building", "UX Patterns"],
    accent: "from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5",
    hasDemo: false,
    hasRepo: true,
  },
  {
    icon: Sparkles,
    title: "Generative UI Co-Pilot",
    subtitle: "Streaming interface with memory-driven context",
    description:
      "Built a streaming generative interface with memory-driven context that adapts UI components based on conversation history and user intent.",
    context: "Personal Project",
    outcomes: [
      { metric: "Dynamic", label: "Component generation" },
      { metric: "Context", label: "Aware responses" },
      { metric: "Streaming", label: "UI updates" },
    ],
    techStack: ["Vercel AI SDK", "TypeScript", "React", "Tailwind"],
    tags: ["Generative UI", "Streaming", "Memory"],
    accent: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5",
    hasDemo: true,
    hasRepo: true,
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
                  className={`h-40 bg-gradient-to-br ${project.accent} flex items-center justify-center relative overflow-hidden`}
                >
                  <project.icon className="h-12 w-12 text-muted-foreground/30 group-hover:scale-110 transition-transform duration-300" />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 left-3 text-xs"
                  >
                    {project.context}
                  </Badge>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display font-semibold text-lg leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {project.outcomes.map((outcome) => (
                      <div key={outcome.label} className="text-center">
                        <div className="text-sm font-semibold text-foreground">
                          {outcome.metric}
                        </div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wide">
                          {outcome.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 text-[10px] font-mono bg-muted/50 rounded text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1 text-xs"
                      data-testid={`button-case-study-${index}`}
                    >
                      View Case Study
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                    {project.hasRepo && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs"
                        data-testid={`button-github-${index}`}
                      >
                        <Github className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Card
              className="h-full p-6 border-dashed flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]"
              data-testid="card-project-coming-soon"
            >
              <div className="p-4 rounded-full bg-muted">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-semibold text-lg">
                  More Projects Coming
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Currently working on new AI agent projects. Check back soon for updates.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>Updated regularly</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
