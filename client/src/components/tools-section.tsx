import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { 
  Bot, 
  TestTube, 
  Database, 
  Layers,
  Code2,
  BarChart3
} from "lucide-react";

const toolCategories = [
  {
    title: "AI Frameworks & Orchestration",
    icon: Bot,
    tools: [
      { name: "LangChain", desc: "Multi-agent workflows" },
      { name: "LangGraph", desc: "Task planning, state machines" },
      { name: "Vercel AI SDK", desc: "Generative UI, streaming" },
      { name: "Google AI Studio", desc: "Prompt sandbox" },
      { name: "AWS Bedrock", desc: "Memory, HITL" },
    ],
  },
  {
    title: "Development & Prototyping",
    icon: Code2,
    tools: [
      { name: "Python", desc: "Primary language" },
      { name: "React/TypeScript", desc: "Frontend" },
      { name: "Gradio", desc: "Rapid UI prototyping" },
      { name: "FastAPI", desc: "Backend services" },
      { name: "Replit", desc: "Quick iterations" },
    ],
  },
  {
    title: "Evaluation & Observability",
    icon: TestTube,
    tools: [
      { name: "OpenAI Evals", desc: "Evaluation framework" },
      { name: "LangSmith", desc: "Tracing, monitoring" },
      { name: "OpenTelemetry", desc: "Distributed tracing" },
      { name: "Custom Evals", desc: "Python scripts" },
    ],
  },
  {
    title: "Data & Vector Search",
    icon: Database,
    tools: [
      { name: "ChromaDB", desc: "Vector database" },
      { name: "Pinecone", desc: "Vector search" },
      { name: "RAG Frameworks", desc: "Retrieval-augmented generation" },
    ],
  },
  {
    title: "Design & Collaboration",
    icon: Layers,
    tools: [
      { name: "Figma", desc: "Wireframes, components" },
      { name: "Miro", desc: "Topology mapping" },
      { name: "Notion", desc: "Documentation" },
      { name: "Git/GitHub", desc: "Version control" },
    ],
  },
  {
    title: "Learning Platforms",
    icon: BarChart3,
    tools: [
      { name: "Kaggle", desc: "AI notebooks, competitions" },
      { name: "Deeplearning.AI", desc: "Courses" },
      { name: "HuggingFace", desc: "Model experimentation" },
    ],
  },
];

export function ToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <p className="text-muted-foreground font-mono text-sm tracking-wider uppercase mb-4">
            Tools & Tech Stack
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            Technologies I Work With
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            From AI orchestration frameworks to evaluation pipelines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full p-5 hover-elevate" data-testid={`card-tools-${index}`} tabIndex={0}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <category.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-sm">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.tools.map((tool) => (
                    <li key={tool.name} className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{tool.name}</span>
                      <span className="text-xs text-muted-foreground">{tool.desc}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
