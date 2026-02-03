import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Network, FileCode, Braces, X } from "lucide-react";

const artifacts = [
  {
    icon: Network,
    title: "Agent Topology",
    preview: `┌─────────────┐
│ Orchestrator │
└──────┬──────┘
       │
   ┌───┴───┐
   ▼       ▼
┌─────┐ ┌─────┐
│Agent│ │Agent│
│  A  │ │  B  │
└──┬──┘ └──┬──┘
   │       │
   └───┬───┘
       ▼
  ┌─────────┐
  │ Router  │
  └─────────┘`,
    fullContent: `# Multi-Agent Orchestration

## Topology: Hierarchical with Router

\`\`\`
Orchestrator
├── Planning Agent
│   └── Task decomposition
├── Research Agent  
│   └── Context retrieval
├── Execution Agent
│   └── Action handling
└── Review Agent
    └── Quality check
\`\`\`

## Coordination Protocol
- Async message passing
- State synchronization
- Escalation triggers`,
  },
  {
    icon: FileCode,
    title: "System Prompt",
    preview: `<system>
You are an AI assistant 
specialized in customer 
support. Your role is to:

- Understand user intent
- Route to specialists
- Maintain context
- Escalate when needed

NEVER fabricate info.
ALWAYS cite sources.
</system>`,
    fullContent: `# System Prompt Structure

## Role Definition
You are a customer support AI with access to:
- Knowledge base (RAG)
- Order management API
- Escalation workflow

## Behavioral Constraints
1. Acknowledge uncertainty
2. Request clarification
3. Provide reasoning traces
4. Cite all sources

## Output Format
{
  "response": string,
  "confidence": 0-1,
  "sources": string[],
  "requires_human": boolean
}`,
  },
  {
    icon: Braces,
    title: "JSON Schema",
    preview: `{
  "intent": {
    "type": "string",
    "enum": [
      "query",
      "action", 
      "escalate"
    ]
  },
  "confidence": {
    "type": "number",
    "min": 0,
    "max": 1
  }
}`,
    fullContent: `# Component Schema

## Intent Classification
{
  "$schema": "component-v1",
  "type": "object",
  "properties": {
    "intent": {
      "type": "string",
      "enum": ["query", "action", "escalate", "clarify"]
    },
    "entities": {
      "type": "array",
      "items": { "$ref": "#/entity" }
    },
    "confidence": {
      "type": "number",
      "minimum": 0,
      "maximum": 1
    },
    "reasoning": {
      "type": "string",
      "description": "Chain-of-thought trace"
    }
  }
}`,
  },
];

export function SampleArtifacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expandedArtifact, setExpandedArtifact] = useState<number | null>(null);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12"
        data-testid="sample-artifacts"
      >
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
          Sample Artifacts
        </p>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">
          {artifacts.map((artifact, index) => (
            <motion.div
              key={artifact.title}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex-shrink-0 w-64 md:w-auto"
            >
              <Card
                className="p-4 hover-elevate cursor-pointer h-full"
                onClick={() => setExpandedArtifact(index)}
                data-testid={`card-artifact-${index}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <artifact.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                    {artifact.title}
                  </span>
                </div>
                <pre className="text-[10px] leading-tight font-mono text-muted-foreground overflow-hidden bg-muted/50 p-3 rounded-sm">
                  {artifact.preview}
                </pre>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {expandedArtifact !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setExpandedArtifact(null)}
          data-testid="modal-artifact"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-card border border-border rounded-md max-w-lg w-full max-h-[80vh] overflow-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {(() => {
                  const Icon = artifacts[expandedArtifact].icon;
                  return <Icon className="h-5 w-5 text-muted-foreground" />;
                })()}
                <span className="font-mono text-sm uppercase tracking-wide">
                  {artifacts[expandedArtifact].title}
                </span>
              </div>
              <button
                onClick={() => setExpandedArtifact(null)}
                className="p-1 hover:bg-muted rounded-sm transition-colors"
                data-testid="button-close-modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <pre className="text-xs leading-relaxed font-mono text-muted-foreground whitespace-pre-wrap bg-muted/50 p-4 rounded-sm">
              {artifacts[expandedArtifact].fullContent}
            </pre>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
