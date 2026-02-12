import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BookOpen } from "lucide-react";

type MediumPost = {
  title: string;
  link: string;
  excerpt: string;
  pubDate: string;
};

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { data: posts = [], isLoading } = useQuery<MediumPost[]>({
    queryKey: ["/api/medium-posts"],
    staleTime: 1000 * 60 * 30,
    refetchInterval: 1000 * 60 * 30,
  });

  const visiblePosts = posts.slice(0, 3);
  const placeholders = Math.max(0, 3 - visiblePosts.length);

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section
      id="blog"
      ref={ref}
      className="py-24 md:py-32 px-6 bg-card"
      data-testid="section-blog"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground font-mono text-sm tracking-wider uppercase mb-4">
            Blog
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            Writing on AI-native design
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Recent essays from Medium on designing trustworthy, controllable,
            and production-ready AI product behavior.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {!isLoading && visiblePosts.length > 0 ? (
            <>
              {visiblePosts.map((post, index) => (
              <motion.a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="block"
              >
                <Card className="h-full p-6 hover-elevate">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>
                        {dateFormatter.format(new Date(post.pubDate))}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      Read on Medium
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Card>
              </motion.a>
              ))}
              {Array.from({ length: placeholders }).map((_, index) => (
                <Card key={`placeholder-${index}`} className="h-full p-6 border-dashed">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Coming Soon</span>
                    </div>
                    <h3 className="font-display font-semibold text-lg leading-tight">
                      New Medium post in progress
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Publish the next article on Medium and it will appear here
                      automatically.
                    </p>
                  </div>
                </Card>
              ))}
            </>
          ) : (
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={`loading-${index}`} className="h-full p-6 border-dashed">
                <p className="text-sm text-muted-foreground">
                  Coming Soon
                </p>
              </Card>
            ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Button
            variant="outline"
            className="font-display"
            onClick={() => window.open("https://medium.com/@arun.bhisne", "_blank")}
            data-testid="button-view-medium-profile"
          >
            View all posts on Medium
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            Auto-refreshes from Medium approximately every 30 minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
