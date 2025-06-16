import Navbar from '@/components/layout/Navbar.tsx'
import HeroSection from '@/components/sections/HeroSection.tsx'
import SkillsSection from '@/components/sections/SkillsSection.tsx'
import TestimonialsSection from '@/components/sections/TestimonialsSection.tsx'
import { ProjectsSection } from '@/components/sections/projects'

function App() {
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

export default App
