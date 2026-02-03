import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Target, 
  Network, 
  MessageSquareCode, 
  TestTube, 
  Eye,
  ArrowRight
} from "lucide-react";

const processSteps = [
  {
    icon: Target,
    number: "01",
    title: "Intent Modeling",
    description:
      "Define user goals, system capabilities, and the probabilistic space of possible interactions.",
  },
  {
    icon: Network,
    number: "02",
    title: "Agent Topology",
    description:
      "Design the orchestration layer: which agents exist, how they coordinate, and when to escalate.",
  },
  {
    icon: MessageSquareCode,
    number: "03",
    title: "System Prompts",
    description:
      "Craft machine-addressable specifications that define agent behaviors and output structures.",
  },
  {
    icon: TestTube,
    number: "04",
    title: "Evaluation Design",
    description:
      "Build golden datasets and evals that measure behavioral quality, not just accuracy.",
  },
  {
    icon: Eye,
    number: "05",
    title: "Observability",
    description:
      "Create glass-box interfaces that make AI reasoning visible, auditable, and debuggable.",
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
            How I architect AI-Native systems
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            A methodology that bridges traditional design thinking with
            engineering rigor for autonomous systems.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`md:text-right ${
                    index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12 md:text-left"
                  }`}
                >
                  <div
                    className={`hidden md:flex items-center gap-3 mb-2 ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    {index % 2 === 0 && (
                      <>
                        <span className="font-mono text-sm text-muted-foreground">
                          {step.number}
                        </span>
                        <div className="p-2 rounded-md bg-background border border-border">
                          <step.icon className="h-4 w-4" />
                        </div>
                      </>
                    )}
                    {index % 2 !== 0 && (
                      <>
                        <div className="p-2 rounded-md bg-background border border-border">
                          <step.icon className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-sm text-muted-foreground">
                          {step.number}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex md:hidden items-center gap-3 mb-2">
                    <div className="p-2 rounded-md bg-background border border-border">
                      <step.icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div
                  className={`hidden md:block ${
                    index % 2 === 0 ? "md:order-2" : ""
                  }`}
                />

                <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-muted border-2 border-border" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Key frameworks and tools I work with:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Microsoft HAX Toolkit",
              "Vercel AI SDK",
              "LangGraph",
              "Model Context Protocol",
              "DSPy",
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-sm font-mono bg-background border border-border rounded-md flex items-center gap-2"
              >
                {tool}
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
