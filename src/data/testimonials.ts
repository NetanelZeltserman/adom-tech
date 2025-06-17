interface Testimonial {
    id: number
    company: string
    logo: string
    text: string
    author: string
    position?: string
  }
  
export const testimonials: Testimonial[] = [
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