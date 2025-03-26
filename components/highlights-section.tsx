"use client"

import type { ReactNode } from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"

// Define the image data structure
interface HighlightImage {
  id: number
  src: string
  alt: string
}

// Create arrays of your actual images - 9 images for each row, total 18
const firstRowImages: HighlightImage[] = [
  { id: 1, src: "/images/highlight1.jpeg", alt: "Haxmas Final" },
  { id: 2, src: "/images/highlight2.jpeg", alt: "InnovateX" },
  { id: 3, src: "/images/highlight3.jpeg", alt: "IIT Marathon" },
  { id: 4, src: "/images/highlight4.jpeg", alt: "@Root Code" },
  { id: 5, src: "/images/highlight5.jpeg", alt: "Google IO" },
  { id: 6, src: "/images/highlight6.jpeg", alt: "IndustPro 3.O" },
  { id: 7, src: "/images/highlight7.jpeg", alt: "Coderally 5.O" },
  { id: 8, src: "/images/highlight8.jpeg", alt: "Cutting Edge" },
  { id: 9, src: "/images/highlight9.jpeg", alt: "Sysco Labs" },
];

const secondRowImages: HighlightImage[] = [
  { id: 10, src: "/images/highlight10.jpg", alt: "Conference J" },
  { id: 11, src: "/images/highlight11.jpg", alt: "Award K" },
  { id: 12, src: "/images/highlight12.jpg", alt: "Design L" },
  { id: 13, src: "/images/highlight13.jpg", alt: "Collaboration M" },
  { id: 14, src: "/images/highlight14.jpg", alt: "Prize Day 2020" },
  { id: 15, src: "/images/highlight15.jpg", alt: "Incohst 2019" },
  { id: 16, src: "/images/highlight16.jpg", alt: "Exhibition P" },
  { id: 17, src: "/images/highlight17.jpg", alt: "Project Q" },
  { id: 18, src: "/images/highlight18.jpg", alt: "Conference R" }
];

export default function HighlightsSection() {
  const firstRowRef = useRef<HTMLDivElement>(null)
  const secondRowRef = useRef<HTMLDivElement>(null)

  // Animation variants for the rows - adjusted for 9 images
  const firstRowVariants = {
    animate: {
      x: [0, -1728], // 9 images * 192px width (including gap)
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
          duration: 45,
          ease: "linear",
        },
      },
    },
  }

  const secondRowVariants = {
    animate: {
      x: [-1728, 0], // 9 images * 192px width (including gap)
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
          duration: 45,
          ease: "linear",
        },
      },
    },
  }

  // Pause animation on hover
  const handleMouseEnter = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (ref.current) {
        ref.current.style.animationPlayState = "paused"
      }
    }
  
  const handleMouseLeave = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (ref.current) {
        ref.current.style.animationPlayState = "running"
      }
    }

  return (
    <section id="highlights" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
          <h2 className="text-3xl font-bold mb-12">Highlights</h2>

          <p className="text-muted-foreground mb-12 max-w-2xl">
            A showcase of my best work, achievements, and memorable moments throughout my journey.
          </p>

          {/* First row - left to right */}
          <div className="mb-12 overflow-hidden">
            <motion.div
              ref={firstRowRef}
              variants={firstRowVariants}
              animate="animate"
              className="flex gap-6"
              onMouseEnter={() => handleMouseEnter(firstRowRef)}
              onMouseLeave={() => handleMouseLeave(firstRowRef)}
            >
              {/* Duplicate the images to create a seamless loop */}
              {[...firstRowImages, ...firstRowImages].map((image, index) => (
                <motion.div
                  key={`${image.id}-${index}`}
                  whileHover={{ y: -10 }}
                  className="flex-shrink-0 w-72 h-48 overflow-hidden"
                >
                  <Card className="w-full h-full overflow-hidden border-purple-500/20 group">
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second row - right to left */}
          <div className="overflow-hidden">
            <motion.div
              ref={secondRowRef}
              variants={secondRowVariants}
              animate="animate"
              className="flex gap-6"
              onMouseEnter={() => handleMouseEnter(secondRowRef)}
              onMouseLeave={() => handleMouseLeave(secondRowRef)}
            >
              {/* Duplicate the images to create a seamless loop */}
              {[...secondRowImages, ...secondRowImages].map((image, index) => (
                <motion.div
                  key={`${image.id}-${index}`}
                  whileHover={{ y: -10 }}
                  className="flex-shrink-0 w-72 h-48 overflow-hidden"
                >
                  <Card className="w-full h-full overflow-hidden border-cyan-500/20 group">
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

