import heroBackground from '@public/hero-bg.webp';
import Button from '@/components/Button';
import BrandCarousel from '@/components/BrandCarousel';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full mt-20 sm:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight sm:leading-tight md:leading-tight">
          <span className="block mb-2">THE GO-TO COMPANY FOR</span>
          <span className="block">SOFTWARE DEVELOPMENT</span>
        </h1>
        <div className="my-8 sm:my-10 md:my-12 max-w-3xl mx-auto">
          <BrandCarousel />
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button variant="primary">Let's Talk</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
