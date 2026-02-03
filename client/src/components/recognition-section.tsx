import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Award, 
  BookOpen,
  ArrowUpRight
} from "lucide-react";
import { SiKaggle } from "react-icons/si";

const credentials = [
  {
    icon: GraduationCap,
    title: "AI/ML Specialization",
    source: "IIT Madras",
    description: "Advanced coursework in machine learning, deep learning, and AI systems design.",
    type: "Education",
  },
  {
    icon: Award,
    title: "Deep Learning Specialization",
    source: "DeepLearning.AI",
    description: "Comprehensive training in neural networks, CNNs, RNNs, and modern deep learning architectures.",
    type: "Certification",
  },
  {
    icon: SiKaggle,
    title: "AI Agent Development",
    source: "Kaggle Notebooks",
    description: "Published notebooks on agentic AI systems, LangGraph implementations, and evaluation frameworks.",
    type: "Portfolio",
    link: "https://kaggle.com/arunbhisne",
  },
  {
    icon: BookOpen,
    title: "Advent of Agents",
    source: "20-Day Challenge",
    description: "Intensive study of multi-agent systems, orchestration patterns, and production AI deployment.",
    type: "Self-Study",
  },
];

export function RecognitionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="recognition"
      ref={ref}
      className="py-24 md:py-32 px-6 bg-card"
      data-testid="section-recognition"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground font-mono text-sm tracking-wider uppercase mb-4" data-testid="text-recognition-label">
            Learning & Growth
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl" data-testid="text-recognition-heading">
            Continuous learning in AI systems design
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Building expertise through formal education, certifications, and hands-on project work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card
                className={`p-6 h-full hover-elevate ${credential.link ? 'cursor-pointer' : ''}`}
                onClick={() => credential.link && window.open(credential.link, '_blank')}
                data-testid={`card-credential-${index}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-muted">
                        <credential.icon className="h-4 w-4 text-foreground" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {credential.type}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="font-display font-semibold text-base">
                        {credential.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {credential.source}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {credential.description}
                    </p>
                  </div>

                  {credential.link && (
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground shrink-0" />
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
