import heroBackground from '../assets/hero-bg.webp';
import Button from './Button';

export default function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
        THE GO-TO COMPANY FOR<br/>
        SOFTWARE DEVELOPMENT
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
        We make technology accessible to everyone with cutting-edge technology
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary">Let's Talk</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
