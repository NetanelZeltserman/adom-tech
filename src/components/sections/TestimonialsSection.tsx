interface Testimonial {
  id: number
  company: string
  logo: string
  text: string
  author: string
  position?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "ACID Technologies",
    logo: "/brands/acid_tech.png", 
    text: "Since Adom integrated our entire production environment into IAC, we have seen a dramatic increase in scalability and reliability, great work!",
    author: "Yariv Maroely",
    position: "CEO"
  },
  {
    id: 2,
    company: "Bank Hapoalim",
    logo: "/brands/bank_hapoalim.png",
    text: "Very professional and high quality work!",
    author: "Haim Pinto",
    position: "CTO"
  },
  {
    id: 3,
    company: "Aterra",
    logo: "/brands/atera.png",
    text: "We were amazed by your broad NLP knowledge which allowed us to build a tailor made solution for our needs",
    author: "Israel Sofer",
    position: "Head Of Data Science"
  },
  {
    id: 4,
    company: "Startup Negev",
    logo: "/brands/startup_negev.jpeg",
    text: "Your experience has proven itself, you have built a professional and agile team",
    author: "Israel Ben Shitrit",
    position: "Manage Corporate"
  },
  {
    id: 5,
    company: "Israeli Air Force",
    logo: "/brands/iai.webp",
    text: "Dedicated and professional, out of the box thinking, great problem solver, extremely recommended!",
    author: "Shimon Wagon",
  },
  {
    id: 6,
    company: "Beez AbInBev",
    logo: "/brands/btlv.webp",
    text: "We were able to build an end to end Machine Learning models and bring them to production thanks to the work that was done by the Adom team",
    author: "Gil Kaplan",
    position: "CAO"
  },
]

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