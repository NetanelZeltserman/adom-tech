import { founders } from '@/data/team'
import Button from '@/components/Button'
import CallToAction from '@/components/CallToAction'
import FounderCard from '@/components/about/FounderCard'

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-8 lg:px-12">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/red_particles.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/80 z-5"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-white">
            About us
          </h1>
          
          <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Adom is comprised of highly experienced engineers, with decades of experience in building teams, services, platforms, and solutions for both startups and enterprises. Our team excels in DevOps, Cloud Engineering, Machine Learning, and Software Development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button variant="primary" to="/contact">Let's Talk</Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The founders
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {founders.map((founder) => (
              <FounderCard key={founder.id} founder={founder} />
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  )
}

