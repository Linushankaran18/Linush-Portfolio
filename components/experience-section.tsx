"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Batch Representative",
    company: "Informatics Institute of Technology",
    period: "Oct 2024 - Present",
    description: "",
  },
  {
    title: "Deputy Head Prefect",
    company: "Jaffna Hindu College",
    period: "Mar 2021 - Mar 2022",
    description:
      "Developed strong leadership skills by successfully organizing and leading school events, team projects, and student initiatives, demonstrating the ability to manage teams, solve problems, and deliver results under pressure.",
  },
]

export default function ExperienceSection() {
  return (
    <section id="resume" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
          <h2 className="text-3xl font-bold mb-8">Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border bg-card/50 hover:bg-card/80 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  {exp.description && <p className="text-muted-foreground">{exp.description}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

