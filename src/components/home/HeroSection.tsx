import Button from '@/components/Button';
import BrandCarousel from '@/components/home/BrandCarousel';
import { FaReact, FaDatabase, FaCloud, FaMobileAlt, FaServer, FaCode } from 'react-icons/fa';
import { SiTypescript, SiDocker } from 'react-icons/si';
import type { IconType } from 'react-icons';

interface TechIcon {
  Icon: IconType;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  }
}

const TECH_ICONS: TechIcon[] = [
  // Left side
  { Icon: FaReact, position: { top: '15%', left: '10%' } },
  { Icon: FaDatabase, position: { bottom: '30%', left: '7%' } },
  { Icon: SiTypescript, position: { top: '35%', left: '20%' } },

  // Center side
  { Icon: FaCode, position: { top: '20%', left: '45%' } },
  { Icon: SiDocker, position: { bottom: '10%', left: '40%' } },

  // Right side
  { Icon: FaServer, position: { top: '25%', right: '15%' } },
  { Icon: FaCloud, position: { top: '50%', left: '85%' } },
  { Icon: FaMobileAlt, position: { bottom: '15%', left: '75%' } },
];

function TechIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {TECH_ICONS.map(({ Icon, position }, index) => (
        <div
          key={index}
          className="absolute text-[#2A2A2AFF]/30 animate-float"
          style={{
            ...position,
            animationDelay: `3s`,
          }}
        >
          <Icon 
            size={48}
            className="drop-shadow-lg"
          />
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <TechIcons />

      <div className="relative z-10 text-center px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full mt-20 sm:mt-0">
        <h1 className="relative mb-6">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            The Go-To Company for
          </span>
          <span className="relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-br from-[#FF3636FF] to-[#FF0000FF] bg-clip-text text-transparent">
            Software Development
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          We make technology accessible by building high-performing Development, DevOps, and AI teams that drive innovation and create lasting competitive advantages
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
          <Button to="/contact" variant="primary">
            Let's Talk
          </Button>
          <Button to="/about" variant="secondary">Learn More</Button>
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <BrandCarousel />
        </div>
      </div>
    </div>
  );
}
