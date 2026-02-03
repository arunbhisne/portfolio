import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { BarChart3, GraduationCap, Wrench, Link2 } from "lucide-react";

const statsCards = [
  {
    icon: BarChart3,
    title: "5 Core Competencies",
    description: "Probabilistic Behavior | Orchestration | System Prompting | Evaluation | Observability",
  },
  {
    icon: GraduationCap,
    title: "Specialized Training",
    description: "Advent of Agents, Deeplearning.AI Agentic AI, IIT Madras UI/UX with Agentic AI",
  },
  {
    icon: Wrench,
    title: "Tech Stack",
    description: "Python, LangGraph, Vercel AI SDK, Gradio, LangChain, Google AI Studio, Kaggle",
  },
  {
    icon: Link2,
    title: "Active Platforms",
    description: "GitHub (agent projects) | Kaggle (AI notebooks) | LinkedIn (thought leadership)",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 px-6 bg-card"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start"
        >
          <div className="space-y-6">
            <p className="text-muted-foreground font-mono text-sm tracking-wider uppercase" data-testid="text-about-label">
              About
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-about-heading">
              The AI-Native Product Designer
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a behavior and systems architect who designs what AI does when we're not looking.
                Unlike traditional UX designers who create static interfaces, I architect autonomous
                systems by specifying how models, agents, and tools behave under real-world uncertainty.
              </p>
              <p>
                My work spans <span className="text-foreground font-medium">agent topologies</span>{" "}
                (orchestrating multi-agent workflows), <span className="text-foreground font-medium">system prompts</span>{" "}
                (machine-addressable behavior contracts), <span className="text-foreground font-medium">evaluation frameworks</span>{" "}
                (golden datasets and LLM-as-a-Judge rubrics), and <span className="text-foreground font-medium">Glass Box UX</span>{" "}
                (reasoning traces and provenance visualization).
              </p>
              <p>
                I bridge design thinking with engineering depth—owning specs, diagrams, JSON schemas,
                and eval pipelines alongside traditional UX deliverables. My goal: making AI systems{" "}
                <span className="text-foreground font-medium">intelligible</span>,{" "}
                <span className="text-foreground font-medium">steerable</span>,{" "}
                <span className="text-foreground font-medium">evaluable</span>, and{" "}
                <span className="text-foreground font-medium">safe</span>.
              </p>
            </div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pl-6 border-l-2 border-primary"
            >
              <p className="text-lg italic text-muted-foreground">
                "We're no longer designing for the machine—we're designing for what
                the machine does when we're not looking."
              </p>
              <cite className="mt-3 block text-sm text-muted-foreground not-italic">
                — Robb Wilson, AI Researcher
              </cite>
            </motion.blockquote>
          </div>

          <div className="space-y-4">
            {statsCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="p-5 hover-elevate" data-testid={`card-stat-${index}`}>
                  <div className="flex gap-4">
                    <div className="p-2 rounded-md bg-primary/10 h-fit">
                      <card.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display font-semibold text-sm">
                        {card.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
