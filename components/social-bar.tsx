"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/linushankaran-janarththanan-614456293/",
    color: "#0077B5",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Linushankaran18",
    color: "#333",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:jlinushankaran@gmail.com",
    color: "#D44638",
  },
  // Add more social media platforms as needed
  {
    name: "Twitter",
    icon: Twitter,
    url: "#", // Replace with your actual Twitter URL
    color: "#1DA1F2",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "#", // Replace with your actual Instagram URL
    color: "#E1306C",
  },
]

export default function SocialBar() {
  return (
    <motion.div
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-card/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg md:hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="flex items-center gap-4">
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
            whileHover={{ scale: 1.2 }}
          >
            <Link
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center group transition-all duration-300"
              aria-label={social.name}
            >
              <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-purple-500 transition-colors duration-300" />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

