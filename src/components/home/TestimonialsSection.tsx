import { testimonials } from "@/data/testimonials";


export default function TestimonialsSection() {
  return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-xl text-white/80">
            See what our clients have to say about working with us
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1E1E1E] rounded-xl border border-white/5 p-6 flex flex-col"
            >
              <div className="h-10 w-auto mb-6">
                <img
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  className="h-full object-contain"
                />
              </div>
              <p className="text-white/80 italic mb-auto">"{testimonial.text}"</p>
              <div className="mt-6 space-y-1">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-gray-400">
                  {testimonial.position ? `${testimonial.position} at ${testimonial.company}` : testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}