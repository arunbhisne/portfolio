import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const quickLinks = [
  { label: "About", href: "#about", testId: "link-footer-about" },
  { label: "Work", href: "#projects", testId: "link-footer-work" },
  { label: "Skills", href: "#skills", testId: "link-footer-skills" },
  { label: "Contact", href: "#contact", testId: "link-footer-contact" },
];

const resources = [
  { label: "Download Framework", href: "#", testId: "link-footer-framework" },
  { label: "GitHub Projects", href: "https://github.com/arunbhisne", testId: "link-footer-github" },
  { label: "Kaggle Notebooks", href: "https://kaggle.com/arunbhisne", testId: "link-footer-kaggle" },
  { label: "LinkedIn Articles", href: "https://linkedin.com/in/arunbhisne", testId: "link-footer-linkedin" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-border bg-card" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          <div className="space-y-4">
            <span className="font-display font-bold text-lg">Arun Bhisne</span>
            <p className="text-sm text-muted-foreground">
              AI-Native Product Designer
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} All rights reserved
            </p>
          </div>

          <div className="space-y-4">
            <span className="font-display font-semibold text-sm">Quick Links</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={link.testId}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <span className="font-display font-semibold text-sm">Resources</span>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={link.testId}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
