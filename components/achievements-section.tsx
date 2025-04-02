"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Trophy } from "lucide-react"

const achievements = [
  {
    title: "Finalist TravelTech 3.o",
    organization: "Informatics Institute of Technology",
    date: "Feb 2025",
    description: "Acronic Ventures is a travel tech startup that aims to revolutionize the travel industry by providing innovative solutions and services. As a finalist in the TravelTech 3.0 competition, we showcased our unique approach to enhancing the travel experience through technology.",
  },
  
  {
    title: "3rd Place, Haxpedition",
    organization: "Informatics Institute of Technology",
    date: "Oct 2024",
    description: "Haxpedition is a hackathon organized by the Informatics Institute of Technology, where participants are challenged to develop innovative solutions within a limited timeframe. Our team secured the 3rd place in this competitive event, demonstrating our ability to collaborate and create impactful projects under pressure.",
  },
  {
    title: "Best Fielder - Prize Day(2020)",
    organization: "Jaffna Hindu College",
    date: "Dec 2020",
    description:
      "I was awarded the Best Fielder award during the Prize Day ceremony at Jaffna Hindu College. This recognition was a testament to my dedication and performance in the field of cricket, where I consistently demonstrated exceptional fielding skills and contributed to my team's success.",
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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

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
          <h2 className="text-4xl font-bold mb-10 tracking-tight">Achievements</h2>

          <motion.div 
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={item}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border border-transparent bg-card/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    
                    <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                      <motion.div 
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-md"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Trophy className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl font-semibold mb-1">{achievement.title}</CardTitle>
                        <p className="text-sm font-medium text-muted-foreground tracking-wide">
                          {achievement.organization} • <span className="text-purple-400">{achievement.date}</span>
                        </p>
                      </div>
                    </CardHeader>
                    {achievement.description && (
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
                          {achievement.description}
                        </CardDescription>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

