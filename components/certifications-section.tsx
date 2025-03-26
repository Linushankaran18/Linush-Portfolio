"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  { name: "Postman API Fundamentals", issuer: "Postman" },
  { name: "Leadership & Outreach (GLO) Program", issuer: "Sysco Labs Sri Lanka" },
  { name: "Programming With JavaScript", issuer: "Meta" },
  { name: "Introduction to Java", issuer: "Solo Learn" },
  { name: "Version Control", issuer: "Meta" },
  { name: "Certification in Web design", issuer: "University Of Moratuwa" },
  { name: "Python Essential Training", issuer: "LinkedIn Learning" },
  { name: "Introduction to Cloud Computing", issuer: "IBM" },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
          <h2 className="text-3xl font-bold mb-8">Certifications & Courses</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-border bg-card/50 hover:bg-card/80 transition-colors">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Award className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

