import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap"
        >
          <div className="flex items-center gap-4">
            <span className="font-display font-semibold">AB</span>
            <span className="text-sm text-muted-foreground">
              Arun Bhisne
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Designing for what AI does when we're not looking.
          </p>

          <p className="text-sm text-muted-foreground">
            {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
