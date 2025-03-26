"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample blog posts (replace with actual Medium API integration in production)
const blogPosts = [
  {
    title: "MemoRaid: Redefining Memory Recovery with AI and Cognitive Games",
    excerpt:
      "Amnesia is a condition that affects millions of individuals worldwide, resulting in memory loss that disrupts daily functioning and social skills.",
    image: "/images/memoraid.jpeg",
    date: "Mar 26, 2025",
    readTime: "4 min read",
    tags: ["Research", "Amnesia", "Group Project", "Flutter"],
    url: "https://medium.com/@linushankaranjana/memoraid-redefining-memory-recovery-with-ai-and-cognitive-games-4d79efd18cc2",
  },
  {
    title: "Optimize Your Debugging: Explore console.log Alternatives",
    excerpt:
      "Do you often rely on console.log during development? While it’s a handy tool, there are other alternatives that can make your development process more enjoyable and efficient",
    image: "/images/javascript.jpeg",
    date: "Jul 28, 2024",
    readTime: "2 min read",
    tags: ["JavaScript", "Programming"],
    url: "https://medium.com/@linushankaranjana/optimize-your-debugging-explore-console-log-alternatives-d90daaa11384",
  },
  // {
  //   title: "Getting Started with Flutter for Cross-Platform Development",
  //   excerpt:
  //     "Discover how Flutter can revolutionize your mobile app development process with a single codebase for multiple platforms.",
  //   image: "/placeholder.svg?height=200&width=400&text=Flutter+Development",
  //   date: "Jan 12, 2024",
  //   readTime: "10 min read",
  //   tags: ["Flutter", "Mobile Development", "Dart"],
  //   url: "#",
  // },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Blog</h2>
              <p className="text-muted-foreground max-w-2xl">
                Thoughts, insights, and tutorials on software development, programming, and technology.
              </p>
            </div>
            <Link
              href="https://medium.com/@linushankaranjana"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0"
            >
              <Button variant="outline" className="gap-2 border-purple-500/50 hover:bg-purple-500/10">
                <span>View all on Medium</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="transition-all duration-300"
              >
                <Link href={post.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card className="overflow-hidden h-full border-border bg-card/50 hover:bg-card/80 transition-colors group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-xs text-white">
                          <span>{post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-white/70"></span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

