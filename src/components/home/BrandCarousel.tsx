import { brands } from "@/data/brands";

export default function BrandCarousel() {
  return (
      <section className="relative overflow-hidden whitespace-nowrap py-6 pause-on-hover bg-white/5 rounded-xl [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-marquee inline-block w-max">
          {brands.map((brand, index) => (
            <img 
              key={`first-${index}`} 
              src={brand.logo} 
              alt={brand.name} 
              className="mx-8 inline h-10 object-contain hover:scale-110 transition-transform duration-300" 
            />
          ))}
        </div>
        
        {/* Duplicate for infinite scroll effect */}
        <div className="animate-marquee2 inline-block w-max">
          {brands.map((brand, index) => (
            <img 
              key={`second-${index}`} 
              src={brand.logo} 
              alt={brand.name} 
              className="mx-8 inline h-10 object-contain hover:scale-110 transition-transform duration-300" 
            />
          ))}
        </div>
      </section>
  );
}
