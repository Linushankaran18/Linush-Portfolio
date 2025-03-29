"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import Image from "next/image"

const certifications = [
  { 
    name: "Introduction to Cloud Computing", 
    issuer: "IBM", 
    logo: "/images/logos/ibm.png",
    url: "https://drive.google.com/your-ibm-certificate-link"
  },
  { 
    name: "Postman API Fundamentals", 
    issuer: "Postman", 
    logo: "/images/logos/postman_1.png",
    url: "https://drive.google.com/file/d/17pFxQqaiOabuYHCj5Xwta38_VHFEvH3a/view?usp=drive_link" 
  },
  { 
    name: "Leadership & Outreach (GLO) Program", 
    issuer: "Sysco Labs Sri Lanka", 
    logo: "/images/logos/sysco.png",
    url: "https://drive.google.com/file/d/1L_k8A8u-FtkZC6xmnKdMAoBpY0erUAyV/view?usp=sharing"
  },
  { 
    name: "Programming With JavaScript", 
    issuer: "Meta", 
    logo: "/images/logos/meta.png",
    url: "https://drive.google.com/file/d/1xM0kI6oKkX_pQit3njMgp-UxjTl1NlH3/view?usp=drive_link"
  },
  { 
    name: "Introuction to Java", 
    issuer: "Solo Learn", 
    logo: "/images/logos/solo.png",
    url: "https://drive.google.com/file/d/115IPtx6LNtdp6vsn9t1cJ5mYv_w3CKnc/view?usp=drive_link"
  },
  { 
    name: "Version Control", 
    issuer: "Meta", 
    logo: "/images/logos/meta.png",
    url: "https://drive.google.com/file/d/1ml1Db_x1Alu8ZyOxbIdR_QbS1VGyunjo/view?usp=sharing"
  },
  { 
    name: "Certification in Web design", 
    issuer: "University Of Moratuwa", 
    logo: "/images/logos/uom_1.png",
    url: "https://drive.google.com/file/d/1AU9tFND0Lwnz8jQ75FieH9hBky7AnQAI/view?usp=drive_link"
  },
  { 
    name: "Python Essential Training", 
    issuer: "LinkedIn Learning", 
    logo: "/images/logos/linkedin.png",
    url: "https://drive.google.com/file/d/16cKB2Srp3CH0lYGZidM4xyuvO_oV2-ZO/view?usp=sharing"
  },
  
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
              <div key={index} className="flip-card-container h-[100px]">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flip-card group"
                >
                  <div className="flip-card-inner">
                    {/* Front of card */}
                    <div className="flip-card-front">
                      <Card className="h-full border-border bg-card/50 transition-all duration-300">
                        <CardContent className="p-4 flex items-center space-x-3 h-full">
                          <div className="relative h-10 w-10 flex-shrink-0 rounded-full overflow-hidden">
                            {cert.logo ? (
                              <Image
                                src={cert.logo}
                                alt={`${cert.issuer} logo`}
                                fill
                                className="object-contain"
                              />
                            ) : (
                              <Award className="h-10 w-10 text-purple-500" />
                            )}
                          </div>
                          <div className="flex-grow">
                            <p className="font-medium">{cert.name}</p>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Back of card */}
                    <div className="flip-card-back">
                      <Card className="h-full border-border bg-gradient-to-br from-purple-500/90 to-cyan-500/90 text-white">
                        <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                          <ExternalLink className="h-6 w-6 mb-2" />
                          <p className="font-medium text-center">View Certification</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          <style jsx global>{`
            .flip-card-container {
              perspective: 1000px;
            }
            
            .flip-card {
              display: block;
              height: 100%;
              width: 100%;
              cursor: pointer;
            }
            
            .flip-card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              text-align: center;
              transition: transform 0.9s ease;
              transform-style: preserve-3d;
            }
            
            .flip-card:hover .flip-card-inner {
              transform: rotateX(180deg);
            }
            
            .flip-card-front, .flip-card-back {
              position: absolute;
              width: 100%;
              height: 100%;
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              border-radius: 0.5rem;
              overflow: hidden;
            }
            
            .flip-card-back {
              transform: rotateX(180deg);
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  )
}

