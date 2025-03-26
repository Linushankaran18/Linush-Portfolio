"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import SocialIcons from "@/components/social-icons"

export default function HeroSection() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-purple-500/20 rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 border border-cyan-500/20 rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-purple-500/20 rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-purple-500/5 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-cyan-500/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-20 relative z-10">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6"
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            >
              Janarthanan Linushankaran
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Computer Science Undergraduate | Software Developer | Tech Enthusiast
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4"
            >
              <Button asChild className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white">
                <a href="/Linushankaran_CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> My Resume
                </a>
              </Button>

              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-500/10">
                View Projects
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8"
            >
              <SocialIcons />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-xl shadow-purple-500/20 relative z-10">
              <Image
                src="/images/profile2.jpeg"
                alt="Janarthanan Linushankaran"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-20 -z-10 scale-75"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

