"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Cloud, Globe, Server, Layers, Smartphone, Braces, FileCode2, PenTool } from "lucide-react"

// Define the skill data structure with logos/icons and descriptions
const skillsData: Record<string, { name: string; logo: string; icon: React.ComponentType; level: string; description: string }[]> = {
  "Programming Languages": [
    {
      name: "Java",
      logo: "/placeholder.svg?height=80&width=80&text=Java",
      icon: FileCode2,
      level: "Advanced",
      description: "Object-oriented programming with strong experience in Java SE and Java EE.",
    },
    {
      name: "JavaScript",
      logo: "/placeholder.svg?height=80&width=80&text=JS",
      icon: Braces,
      level: "Advanced",
      description: "Frontend and backend development with modern JavaScript (ES6+).",
    },
    {
      name: "Python",
      logo: "/placeholder.svg?height=80&width=80&text=Python",
      icon: FileCode2,
      level: "Intermediate",
      description: "Data analysis, automation, and backend development with Python.",
    },
  ],
  "Web Technologies": [
    {
      name: "HTML",
      logo: "/placeholder.svg?height=80&width=80&text=HTML",
      icon: Globe,
      level: "Advanced",
      description: "Semantic HTML5 markup and accessibility best practices.",
    },
    {
      name: "CSS",
      logo: "/placeholder.svg?height=80&width=80&text=CSS",
      icon: PenTool,
      level: "Advanced",
      description: "Modern CSS including Flexbox, Grid, and animations.",
    },
    {
      name: "PHP",
      logo: "/placeholder.svg?height=80&width=80&text=PHP",
      icon: Server,
      level: "Intermediate",
      description: "Server-side scripting and web application development.",
    },
  ],
  Databases: [
    {
      name: "MySQL",
      logo: "/placeholder.svg?height=80&width=80&text=MySQL",
      icon: Database,
      level: "Intermediate",
      description: "Database design, optimization, and query performance.",
    },
  ],
  Concepts: [
    {
      name: "Object Oriented Programming",
      logo: "/placeholder.svg?height=80&width=80&text=OOP",
      icon: Layers,
      level: "Advanced",
      description: "Design patterns, SOLID principles, and OOP architecture.",
    },
  ],
  Technologies: [
    {
      name: "Cloud Computing",
      logo: "/placeholder.svg?height=80&width=80&text=Cloud",
      icon: Cloud,
      level: "Intermediate",
      description: "Experience with cloud platforms and deployment strategies.",
    },
  ],
  Frameworks: [
    {
      name: "Flutter",
      logo: "/placeholder.svg?height=80&width=80&text=Flutter",
      icon: Smartphone,
      level: "Intermediate",
      description: "Cross-platform mobile app development with Flutter.",
    },
  ],
}

export default function SkillsSection() {
  const categories = Object.keys(skillsData)
  const [activeCategory, setActiveCategory] = useState<string>(categories[0])

  return (
    <section id="skills" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
          <h2 className="text-3xl font-bold mb-12">Skills</h2>

          <Tabs defaultValue={categories[0]} className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap gap-2 mb-8 bg-transparent h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-full px-4 py-2 text-sm"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence mode="wait">
                    {skillsData[category].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <SkillCard skill={skill} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Continuously learning and expanding my skill set to stay current with industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface Skill {
  name: string;
  logo: string;
  icon: React.ComponentType<{ className?: string }>;
  level: string;
  description: string;
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card className="overflow-hidden h-full border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
      <CardContent className="p-0">
        <div className="flex flex-col h-full">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 flex items-center gap-4 border-b border-purple-500/20 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shrink-0">
              {skill.icon && <skill.icon className="w-6 h-6 text-white" />}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              <div className="flex items-center mt-1">
                <div className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">{skill.level}</div>
              </div>
            </div>
          </div>
          <div className="p-6 flex-grow">
            <p className="text-muted-foreground text-sm">{skill.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

