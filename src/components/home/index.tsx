import HeroSection from '@/components/home/HeroSection'
import SkillsSection from '@/components/home/SkillsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import { ProjectsSection } from '@/components/home/projects'
import CallToAction from '@/components/CallToAction'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <TestimonialsSection />
      <ProjectsSection />
      <CallToAction />
    </>
  )
}
