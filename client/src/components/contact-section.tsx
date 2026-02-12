import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send,
  ArrowUpRight,
  MapPin,
  Clock,
  Calendar,
  Sparkles,
  Copy,
  Check
} from "lucide-react";
import { SiKaggle, SiMedium } from "react-icons/si";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:arun.bhisne@gmail.com",
    username: "arun.bhisne@gmail.com",
    copyable: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arunbhisne",
    username: "arunbhisne",
  },
  {
    icon: SiMedium,
    label: "Medium",
    href: "https://medium.com/@arun.bhisne",
    username: "@arun.bhisne",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/arunbhisne",
    username: "arunbhisne",
  },
  {
    icon: SiKaggle,
    label: "Kaggle",
    href: "https://kaggle.com/arunbhisne",
    username: "arunbhisne",
  },
];

const currentlyLearning = [
  "Physical AI",
  "Multi-Agent Orchestration",
  "Evaluation Frameworks",
];

const targetRoles = [
  "AI-Native Designer",
  "AI Product Designer (Agentic Systems)",
];

const contactFormSchema = insertContactSchema.extend({
  name: insertContactSchema.shape.name.min(2, "Name must be at least 2 characters"),
  email: insertContactSchema.shape.email.email("Please enter a valid email"),
  message: insertContactSchema.shape.message.min(10, "Message must be at least 10 characters"),
});

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Message failed",
        description:
          "Email delivery failed. Please try again or email arun.bhisne@gmail.com directly.",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("arun.bhisne@gmail.com");
    setCopiedEmail(true);
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard.",
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const openCalendly = () => {
    const calendlyUrl =
      "https://calendly.com/arunbhisne/30min";
    const scriptId = "calendly-widget-script";
    const styleId = "calendly-widget-style";

    const openPopup = () => {
      if (window.Calendly?.initPopupWidget) {
        window.Calendly.initPopupWidget({ url: calendlyUrl });
      } else {
        window.open(calendlyUrl, "_blank");
      }
    };

    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      openPopup();
      return;
    }

    if (!document.getElementById(styleId)) {
      const style = document.createElement("link");
      style.id = styleId;
      style.rel = "stylesheet";
      style.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(style);
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = openPopup;
    script.onerror = () => window.open(calendlyUrl, "_blank");
    document.body.appendChild(script);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 px-6"
      data-testid="section-contact"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground font-mono text-sm tracking-wider uppercase mb-4" data-testid="text-contact-label">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl" data-testid="text-contact-heading">
            Open to AI-native product design roles
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          data-testid="input-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          data-testid="input-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          rows={5}
                          className="resize-none"
                          data-testid="input-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={contactMutation.isPending}
                  className="w-full md:w-auto font-display"
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Prefer to chat directly?</p>
              <Button
                variant="outline"
                className="font-display"
                onClick={openCalendly}
                data-testid="button-schedule-call"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Call
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <img
                src="/profile-avatar.jpg"
                alt="Arun Bhisne"
                className="w-20 h-20 rounded-full object-cover border border-border shrink-0"
              />
              <div className="space-y-2">
                <h3 className="font-display font-semibold text-lg">Arun Bhisne</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Open to full-time and contract opportunities</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold mb-4" data-testid="text-connect-heading">Connect</h3>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <div key={link.label} className="flex items-center gap-2">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                      data-testid={`link-social-${link.label.toLowerCase()}`}
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="text-sm" data-testid={`text-social-${link.label.toLowerCase()}`}>{link.username}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    {link.copyable && (
                      <button
                        onClick={copyEmail}
                        className="p-1.5 hover:bg-muted rounded-sm transition-colors"
                        data-testid="button-copy-email"
                      >
                        {copiedEmail ? (
                          <Check className="h-3.5 w-3.5 text-green-500" />
                        ) : (
                          <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="font-display font-semibold mb-4" data-testid="text-opportunities-heading">
                Actively Seeking
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {targetRoles.map((role) => (
                  <Badge key={role} variant="secondary" className="text-xs">
                    {role}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2" data-testid="text-opportunities-description">
                <span className="shrink-0 mt-0.5">
                  Open to remote and hybrid roles globally.
                </span>
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-display font-semibold text-sm" data-testid="text-learning-heading">
                  Currently Exploring
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentlyLearning.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 text-xs font-mono bg-muted rounded-sm text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
