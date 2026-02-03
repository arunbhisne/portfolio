import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const toolCategories = [
  {
    category: "AI Frameworks",
    tools: [
      { name: "LangGraph", proficiency: 5, purpose: "Multi-agent orchestration and state machines" },
      { name: "LangChain", proficiency: 4, purpose: "LLM application development chains" },
      { name: "DSPy", proficiency: 4, purpose: "Programmatic prompt optimization" },
      { name: "LlamaIndex", proficiency: 3, purpose: "Data indexing and retrieval" },
      { name: "Vercel AI SDK", proficiency: 5, purpose: "Streaming UI and generative interfaces" },
    ],
  },
  {
    category: "Design Tools",
    tools: [
      { name: "Figma", proficiency: 5, purpose: "Interface design and prototyping" },
      { name: "Miro", proficiency: 4, purpose: "Agent topology and flow diagrams" },
      { name: "Whimsical", proficiency: 4, purpose: "System architecture visualization" },
      { name: "Excalidraw", proficiency: 4, purpose: "Quick technical diagrams" },
    ],
  },
  {
    category: "Development",
    tools: [
      { name: "Python", proficiency: 5, purpose: "AI/ML development and scripting" },
      { name: "TypeScript", proficiency: 4, purpose: "Type-safe frontend and backend" },
      { name: "FastAPI", proficiency: 4, purpose: "High-performance API development" },
      { name: "Gradio", proficiency: 4, purpose: "Rapid ML interface prototyping" },
      { name: "Streamlit", proficiency: 3, purpose: "Data app development" },
    ],
  },
  {
    category: "Evaluation",
    tools: [
      { name: "OpenAI Evals", proficiency: 4, purpose: "LLM behavior testing" },
      { name: "Weights & Biases", proficiency: 3, purpose: "Experiment tracking and monitoring" },
      { name: "LangSmith", proficiency: 4, purpose: "LLM observability and debugging" },
      { name: "Promptfoo", proficiency: 4, purpose: "Prompt evaluation and testing" },
    ],
  },
  {
    category: "Deployment",
    tools: [
      { name: "Vercel", proficiency: 5, purpose: "Frontend and edge deployment" },
      { name: "Replit", proficiency: 5, purpose: "Full-stack development and hosting" },
      { name: "HuggingFace", proficiency: 4, purpose: "Model hosting and Spaces" },
      { name: "Kaggle", proficiency: 4, purpose: "Notebook development and competitions" },
    ],
  },
];

function ProficiencyDots({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-1.5 h-1.5 rounded-full ${
            dot <= level ? "bg-foreground" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function ToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section
      id="tools"
      ref={ref}
      className="py-24 md:py-32 px-6"
      data-testid="section-tools"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground font-mono text-sm tracking-wider uppercase mb-4" data-testid="text-tools-label">
            Tools & Stack
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl" data-testid="text-tools-heading">
            Technologies I work with
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            From AI frameworks to design tools, a comprehensive stack for building production-grade AI systems.
          </p>
        </motion.div>

        <div className="space-y-8">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-display font-semibold text-sm">
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => (
                  <Tooltip key={tool.name}>
                    <TooltipTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.1 * categoryIndex + 0.05 * toolIndex 
                        }}
                      >
                        <Card
                          className="px-3 py-2 hover-elevate cursor-default flex items-center gap-3"
                          data-testid={`tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <span className="text-sm font-medium">{tool.name}</span>
                          <ProficiencyDots level={tool.proficiency} />
                        </Card>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs">
                      <p className="text-xs">{tool.purpose}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ProficiencyDots level={5} />
              <span>Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <ProficiencyDots level={3} />
              <span>Proficient</span>
            </div>
            <div className="flex items-center gap-2">
              <ProficiencyDots level={1} />
              <span>Learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
