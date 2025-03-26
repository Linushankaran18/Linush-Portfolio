"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Instagram, Facebook, Youtube } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/linushankaran-janarththanan-614456293/",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Linushankaran18",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:jlinushankaran@gmail.com",
  },
  // {
  //   name: "Twitter",
  //   icon: Twitter,
  //   url: "https://x.com/shanlinu?s=21", 
  // },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/linuzz_j?igsh=MWo3YmxyNmUzcTI0Zw%3D%3D&utm_source=qr", // Replace with your actual Instagram URL
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/linushankaran.janarththanan", // Replace with your actual Facebook URL
  },
  
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              JANARTHANAN LINUSHANKARAN
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.div key={social.name} whileHover={{ y: -5, scale: 1.1 }} transition={{ duration: 0.2 }}>
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card/50 p-3 rounded-full hover:bg-card transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-purple-500 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm">
              © {currentYear} Janarthanan Linushankaran. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

