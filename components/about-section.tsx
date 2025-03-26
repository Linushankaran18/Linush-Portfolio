"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
          <h2 className="text-3xl font-bold mb-8">About Me</h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Computer Science undergraduate at IIT, passionate about software development and problem-solving. Skilled
              in designing user-centric solutions and experienced in cloud computing. A collaborative team player with
              leadership abilities, eager to deliver impactful software solutions.
            </p>

            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              My journey in technology began with a curiosity about how digital systems work, which evolved into a
              passion for creating elegant solutions to complex problems. I believe in writing clean, maintainable code
              and building applications that provide real value to users.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              engaging in community tech events. I'm always open to new challenges and opportunities to grow as a
              developer.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

