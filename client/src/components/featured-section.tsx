import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  BarChart3, 
  Code2, 
  Linkedin,
  ExternalLink
} from "lucide-react";

const featuredItems = [
  {
    icon: FileText,
    title: "AI-Native Product Designer Framework",
    description: "Engineering-grade competency framework covering all 5 domains, skill evolution, and learning paths.",
    cta: "Download PDF",
    link: "#",
  },
  {
    icon: BarChart3,
    title: "AI Agent Projects on Kaggle",
    description: "Published notebooks on multi-agent workflows, evaluation design, and agentic system prototyping.",
    stats: "1,200+ views",
    cta: "View on Kaggle",
    link: "https://kaggle.com/arunbhisne",
  },
  {
    icon: Code2,
    title: "Open Source Contributions",
    description: "Agent orchestration code, system prompt libraries, and evaluation frameworks.",
    stats: "Active contributor",
    cta: "View on GitHub",
    link: "https://github.com/arunbhisne",
  },
  {
    icon: Linkedin,
    title: "Articles & Insights",
    description: "Sharing learnings on AI-native design patterns, agentic UX, and probabilistic systems.",
    cta: "Connect on LinkedIn",
    link: "https://linkedin.com/in/arunbhisne",
  },
];

export function FeaturedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="featured"
      ref={ref}
      className="py-24 md:py-32 px-6 bg-card"
      data-testid="section-featured"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground font-mono text-sm tracking-wider uppercase mb-4">
            Featured Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            Resources & Links
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card 
                className="h-full p-6 flex flex-col hover-elevate" 
                data-testid={`card-featured-${index}`}
              >
                <div className="p-3 rounded-md bg-primary/10 w-fit mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="font-display font-semibold text-base mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>

                {item.stats && (
                  <Badge variant="secondary" className="w-fit text-xs font-mono mb-4">
                    {item.stats}
                  </Badge>
                )}

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full font-mono text-xs mt-auto"
                  asChild
                  data-testid={`button-featured-${index}`}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.cta}
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
