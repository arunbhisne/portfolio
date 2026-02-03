import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Layers, Workflow, Eye } from "lucide-react";
import { SampleArtifacts } from "./sample-artifacts";

const highlights = [
  {
    icon: Brain,
    title: "Probabilistic Behaviors",
    description: "Architect for uncertainty, not deterministic flows",
  },
  {
    icon: Layers,
    title: "Agent Topologies",
    description: "Design multi-agent systems and orchestration patterns",
  },
  {
    icon: Workflow,
    title: "System Prompts",
    description: "Craft machine-addressable design systems",
  },
  {
    icon: Eye,
    title: "Observability",
    description: "Build transparent, debuggable AI interfaces",
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
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-start"
        >
          <div className="space-y-6">
            <p className="text-muted-foreground font-mono text-sm tracking-wider uppercase" data-testid="text-about-label">
              About
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-about-heading">
              I design for what AI does when we're not looking
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an AI-Native Product Designer — a behavior and systems
                architect who designs probabilistic, agentic AI systems.
              </p>
              <p>
                Unlike traditional UX designers who create static interfaces, I
                architect autonomous systems by specifying system prompts, agent
                topologies, evaluation frameworks, and generative UI schemas.
              </p>
              <p>
                My work makes AI systems{" "}
                <span className="text-foreground font-medium">transparent</span>,{" "}
                <span className="text-foreground font-medium">steerable</span>, and{" "}
                <span className="text-foreground font-medium">safe</span> in
                production.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-5 rounded-md border border-border bg-background space-y-3"
              >
                <item.icon className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-display font-semibold text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <SampleArtifacts />

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <p className="text-lg md:text-xl italic text-muted-foreground max-w-3xl">
            "We're no longer designing for the machine—we're designing for what
            the machine does when we're not looking."
          </p>
          <cite className="mt-4 block text-sm text-muted-foreground not-italic">
            — Robb Wilson, AI Systems Researcher
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
