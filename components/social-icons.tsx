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
  // {
  //   name: "Twitter",
  //   icon: Twitter,
  //   url: "https://x.com/shanlinu?s=21", // Replace with your actual Twitter URL
  //   color: "#1DA1F2",
  // },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/linuzz_j?igsh=MWo3YmxyNmUzcTI0Zw%3D%3D&utm_source=qr", // Replace with your actual Instagram URL
    color: "#E1306C",
  },
]

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          whileHover={{
            y: -5,
            transition: { duration: 0.2 },
          }}
        >
          <Link
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center group transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10"
            aria-label={social.name}
          >
            <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-purple-500 transition-colors duration-300" />
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

