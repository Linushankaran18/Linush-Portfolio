"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Cloud, Globe, Server, Layers, Smartphone, Braces, FileCode2, PenTool } from "lucide-react"

// Define the skill data structure with logos/icons
const skills = [
  {
    name: "Java",
    category: "Programming Languages",
    logo: "/placeholder.svg?height=80&width=80&text=Java",
    icon: FileCode2,
    level: "Advanced",
  },
  {
    name: "JavaScript",
    category: "Programming Languages",
    logo: "/placeholder.svg?height=80&width=80&text=JS",
    icon: Braces,
    level: "Advanced",
  },
  {
    name: "Python",
    category: "Programming Languages",
    logo: "/placeholder.svg?height=80&width=80&text=Python",
    icon: FileCode2,
    level: "Intermediate",
  },
  {
    name: "HTML",
    category: "Web Technologies",
    logo: "/placeholder.svg?height=80&width=80&text=HTML",
    icon: Globe,
    level: "Advanced",
  },
  {
    name: "CSS",
    category: "Web Technologies",
    logo: "/placeholder.svg?height=80&width=80&text=CSS",
    icon: PenTool,
    level: "Advanced",
  },
  {
    name: "PHP",
    category: "Web Technologies",
    logo: "/placeholder.svg?height=80&width=80&text=PHP",
    icon: Server,
    level: "Intermediate",
  },
  {
    name: "MySQL",
    category: "Databases",
    logo: "/placeholder.svg?height=80&width=80&text=MySQL",
    icon: Database,
    level: "Intermediate",
  },
  {
    name: "Object Oriented Programming",
    category: "Concepts",
    logo: "/placeholder.svg?height=80&width=80&text=OOP",
    icon: Layers,
    level: "Advanced",
  },
  {
    name: "Cloud Computing",
    category: "Technologies",
    logo: "/placeholder.svg?height=80&width=80&text=Cloud",
    icon: Cloud,
    level: "Intermediate",
  },
  {
    name: "Flutter",
    category: "Frameworks",
    logo: "/placeholder.svg?height=80&width=80&text=Flutter",
    icon: Smartphone,
    level: "Intermediate",
  },
]

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

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

          <div className="relative h-[600px] md:h-[500px] w-full">
            {skills.map((skill, index) => {
              // Calculate position based on index
              const angle = (index / skills.length) * Math.PI * 2
              const radius = 200 // Adjust this value to change the circle size
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              // Calculate size based on whether the skill is hovered
              const isHovered = hoveredSkill === skill.name
              const size = isHovered ? 120 : 80

              return (
                <motion.div
                  key={skill.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    zIndex: isHovered ? 10 : 1,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    width: size,
                    height: size,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    scale: { type: "spring", stiffness: 200 },
                  }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <Card className="w-full h-full rounded-full overflow-hidden border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
                    <CardContent className="p-0 flex items-center justify-center h-full relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 group-hover:from-purple-500/40 group-hover:to-cyan-500/40 transition-all duration-300"></div>
                      <div className="relative z-10 flex flex-col items-center justify-center p-2 text-center">
                        {skill.icon && <skill.icon className="w-6 h-6 text-purple-400 mb-1" />}
                        <p className="text-xs font-medium line-clamp-2">{skill.name}</p>
                        {isHovered && (
                          <Badge variant="outline" className="mt-1 text-[10px] bg-purple-500/20 border-purple-500/50">
                            {skill.level}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}

            {/* Center element */}
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center z-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-white font-bold text-sm text-center">Technical Skills</span>
            </motion.div>
          </div>

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

