import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import HighlightsSection from "@/components/highlights-section"
import EducationSection from "@/components/education-section"
import AchievementsSection from "@/components/achievements-section"
import CertificationsSection from "@/components/certifications-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import SocialBar from "@/components/social-bar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <SocialBar />
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <HighlightsSection />
        
        <AchievementsSection />
        <CertificationsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}

