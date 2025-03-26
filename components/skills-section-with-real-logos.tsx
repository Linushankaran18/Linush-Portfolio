"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

// Define the skill data structure with logos
const skills = [
  {
    name: "Java",
    category: "Programming Languages",
    logo: "/skills/java.png", // Replace with actual logo path
  },
  {
    name: "JavaScript",
    category: "Programming Languages",
    logo: "/skills/javascript.png", // Replace with actual logo path
  },
  {
    name: "Python",
    category: "Programming Languages",
    logo: "/skills/python.png", // Replace with actual logo path
  },
  {
    name: "HTML",
    category: "Web Technologies",
    logo: "/skills/html.png", // Replace with actual logo path
  },
  {
    name: "CSS",
    category: "Web Technologies",
    logo: "/skills/css.png", // Replace with actual logo path
  },
  {
    name: "PHP",
    category: "Web Technologies",
    logo: "/skills/php.png", // Replace with actual logo path
  },
  {
    name: "MySQL",
    category: "Databases",
    logo: "/skills/mysql.png", // Replace with actual logo path
  },
  {
    name: "Object Oriented Programming",
    category: "Concepts",
    logo: "/skills/oop.png", // Replace with actual logo path
  },
  {
    name: "Cloud Computing",
    category: "Technologies",
    logo: "/skills/cloud.png", // Replace with actual logo path
  },
  {
    name: "Flutter",
    category: "Frameworks",
    logo: "/skills/flutter.png", // Replace with actual logo path
  },
]

export default function SkillsSection() {
  const categories = [...new Set(skills.map((skill) => skill.category))]

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
          className="max-w-4xl mx-auto"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
          <h2 className="text-3xl font-bold mb-12">Skills</h2>

          <div className="space-y-16">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent inline-block">
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, skillIndex) => (
                      <motion.div key={skillIndex} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                        <Card className="border-purple-500/20 bg-card/50 hover:bg-card/80 transition-all duration-300 overflow-hidden group">
                          <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                            <div className="mb-4 relative w-16 h-16 flex items-center justify-center">
                              <Image
                                src={skill.logo || "/placeholder.svg"}
                                alt={skill.name}
                                width={64}
                                height={64}
                                className="object-contain"
                              />
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h4 className="font-medium text-sm">{skill.name}</h4>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

