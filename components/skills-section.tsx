"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Cloud, Globe, Server, Layers, Smartphone, Braces, FileCode2, PenTool, Code, LayoutTemplate } from "lucide-react"

// Define the skill data structure with logos/icons and descriptions
const skillsData = [
  {
    name: "Java",
    logo: "/placeholder.svg?height=80&width=80&text=Java",
    icon: FileCode2,
    level: "Advanced",
    description: "Object-oriented programming with strong experience in Java SE and Java EE.",
    category: "Programming Languages"
  },
  {
    name: "JavaScript",
    logo: "/placeholder.svg?height=80&width=80&text=JS",
    icon: Braces,
    level: "Advanced",
    description: "Frontend and backend development with modern JavaScript (ES6+).",
    category: "Programming Languages"
  },
  {
    name: "Python",
    logo: "/placeholder.svg?height=80&width=80&text=Python",
    icon: FileCode2,
    level: "Intermediate",
    description: "Data analysis, automation, and backend development with Python.",
    category: "Programming Languages"
  },
  {
    name: "HTML",
    logo: "/placeholder.svg?height=80&width=80&text=HTML",
    icon: Globe,
    level: "Advanced",
    description: "Semantic HTML5 markup and accessibility best practices.",
    category: "Web Technologies"
  },
  {
    name: "CSS",
    logo: "/placeholder.svg?height=80&width=80&text=CSS",
    icon: PenTool,
    level: "Advanced",
    description: "Modern CSS including Flexbox, Grid, and animations.",
    category: "Web Technologies"
  },
  {
    name: "PHP",
    logo: "/placeholder.svg?height=80&width=80&text=PHP",
    icon: Server,
    level: "Intermediate",
    description: "Server-side scripting and web application development.",
    category: "Web Technologies"
  },
  {
    name: "MySQL",
    logo: "/placeholder.svg?height=80&width=80&text=MySQL",
    icon: Database,
    level: "Intermediate",
    description: "Database design, optimization, and query performance.",
    category: "Databases"
  },
  // {
  //   name: "Object Oriented Programming",
  //   logo: "/placeholder.svg?height=80&width=80&text=OOP",
  //   icon: Layers,
  //   level: "Advanced",
  //   description: "Design patterns, SOLID principles, and OOP architecture.",
  //   category: "Concepts"
  // },
  {
    name: "Cloud Computing",
    logo: "/placeholder.svg?height=80&width=80&text=Cloud",
    icon: Cloud,
    level: "Intermediate",
    description: "Experience with cloud platforms and deployment strategies.",
    category: "Technologies"
  },
  {
    name: "Flutter",
    logo: "/placeholder.svg?height=80&width=80&text=Flutter",
    icon: Smartphone,
    level: "Intermediate",
    description: "Cross-platform mobile app development with Flutter.",
    category: "Frameworks"
  },
  {
    name: "React",
    logo: "/placeholder.svg?height=80&width=80&text=React",
    icon: LayoutTemplate,
    level: "Advanced",
    description: "Building modern, responsive user interfaces with the React ecosystem and hooks.",
    category: "Frameworks"
  },
  {
    name: "Spring Boot",
    logo: "/placeholder.svg?height=80&width=80&text=Spring",
    icon: Code,
    level: "Intermediate",
    description: "Backend development with Spring Boot for creating robust Java applications.",
    category: "Frameworks"
  },
];

export default function SkillsSection() {
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
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

interface Skill {
  name: string;
  logo: string;
  icon: React.ComponentType<{ className?: string }>;
  level: string;
  description: string;
  category: string;
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card className="overflow-hidden h-full border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            {skill.icon && <skill.icon className="w-6 h-6 text-white" />}
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg">{skill.name}</h3>
            <span className="text-xs text-purple-300 opacity-75">{skill.category}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

