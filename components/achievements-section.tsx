"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Trophy } from "lucide-react"

const achievements = [
  {
    title: "3rd Place, Haxpedition",
    organization: "Informatics Institute of Technology",
    date: "Oct 2024",
    description: "",
  },
  {
    title: "INCOHST 2019 - Best Team",
    organization: "Nawaloka College of Higher Studies",
    date: "Mar 2019",
    description:
      "INCOHST 2019 was an IoT (Internet of things) Inter-School IoT competition for Young innovators to invent IoT based solutions. Our team's idea, centered around the gyro sensor, stood out. Gyro sensors play a crucial role in measuring orientation and motion, making them essential for IoT applications.",
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-border bg-card/50 hover:bg-card/80 transition-colors">
                <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                  <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-md">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle>{achievement.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {achievement.organization} • {achievement.date}
                    </p>
                  </div>
                </CardHeader>
                {achievement.description && (
                  <CardContent>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

