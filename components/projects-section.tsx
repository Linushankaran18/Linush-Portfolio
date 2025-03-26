"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "MemoRaid - An Amnesia Rehabilitation Platform",
    description:
      "MemoRaid is a mobile app under development for the SDGP module, designed to boost memory skills through fun and interactive games. It features a range of levels and challenges suitable for all age groups, aiming to enhance cognitive abilities like memory retention, pattern recognition, and concentration.",
    technologies: ["Flutter", "Flame", "Node.js", "Firebase"],
    image: "/placeholder.svg?height=200&width=400",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Event Ticket Booking Platform",
    description:
      "Real-Time Ticket Management: Dynamic visualization of ticket sales using interactive charts. Efficient Back-End Services: Built with Spring Boot to handle seamless data processing, authentication, and event management.",
    technologies: ["Java", "React.js", "Spring Boot"],
    image: "/placeholder.svg?height=200&width=400",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Web application (SDG goals) group project",
    description:
      "With a clean, professional aesthetic and intuitive design, individuals can easily access reliable health information and services for a better well-being.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/placeholder.svg?height=200&width=400",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Plane Management System",
    description:
      "A Java OOP-based seat booking system with a user-friendly menu for booking/canceling seats, viewing availability, ticket management, and file I/O.",
    technologies: ["Java"],
    image: "/placeholder.svg?height=200&width=400",
    links: {
      demo: "#",
      github: "#",
    },
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
          <h2 className="text-3xl font-bold mb-12">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="transition-all duration-300"
              >
                <Card className="border-border bg-card/50 hover:bg-card/80 transition-colors h-full overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
                    <div
                      className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>
                    <div className="absolute bottom-4 left-4 z-20">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2 border-purple-500/50 hover:bg-purple-500/10">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </Button>
                    <Button
                      size="sm"
                      className="gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

