import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/home/HeroSection'
import SkillsSection from '@/components/home/SkillsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import { ProjectsSection } from '@/components/home/projects'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <TestimonialsSection />
      <ProjectsSection />
    </>
  )
}
