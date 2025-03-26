"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const education = [
  {
    degree: "BSc (Hons) Computer Science",
    institution: "University Of Westminster affiliated with Informatics Institute of Technology",
    period: "Sept 2023 - Present",
    courses: [
      "Object Oriented Programming",
      "Database system",
      "Software Development Group Project",
      "Software Development I",
      "Algorithms: Theory, Design and Implementation",
      "Server-Side Web Development",
      "Mathematics for Computing",
      "Trends in Computer Science",
      "Computer Systems Fundamentals",
      "Software Development II",
      "Web Design and Development",
      "Client-Server Architectures",
    ],
  },
  {
    degree: "GCE Advanced Level Mathematics",
    institution: "Jaffna Hindu College - Physical Science",
    period: "Jan 2019 - Aug 2022",
    courses: [],
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
          <h2 className="text-3xl font-bold mb-8">Education</h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-border bg-card/50 hover:bg-card/80 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      {edu.period}
                    </Badge>
                  </div>

                  {edu.courses.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Courses</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <p key={courseIndex} className="text-sm text-muted-foreground">
                            • {course}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

