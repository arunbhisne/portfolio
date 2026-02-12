import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { AgentNetwork } from "./agent-network";

export function HeroSection() {
  const scrollToWork = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6"
      data-testid="section-hero"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground font-mono text-sm tracking-wider uppercase"
              >
                AI-Native Designer
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                data-testid="text-hero-name"
              >
                Arun Bhisne
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                AI Behavior & Orchestration Designer
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                I design AI products with measurable reliability, clear controls,
                and auditable behavior in production.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={scrollToWork}
                className="font-display"
                data-testid="button-view-work"
              >
                View Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="font-display"
                data-testid="button-get-in-touch"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="rounded-2xl border border-border bg-card/50 p-4 md:p-6 lg:p-8"
          >
            <AgentNetwork />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
