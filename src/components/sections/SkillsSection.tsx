import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center">
          We Specialize in...
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/5">
                <img 
                  src="/laptop.jpg" 
                  alt="Developer coding on a laptop" 
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12">
            {skills.map((skill, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-2 text-white flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  {skill.title}
                </h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
