import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import SkillsSection from '@/components/sections/SkillsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import { ProjectsSection } from '@/components/sections/projects'

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
