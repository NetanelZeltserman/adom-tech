export interface Project {
  name: string
  url: string
  description: string
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    name: "Somatix",
    url: "https://somatix.com/",
    description: "Digital health startup - Development of a mobile app and extensive SaaS platform",
    image: "/projects/somatix_devices.webp",
    tags: ["Startup", "Healthcare", "Mobile", "SaaS"]
  },
  {
    name: "Faireez",
    url: "https://faireez.com/",
    description: "Home cleaning digitized - Booking a cleaner is as easy as calling a taxi",
    image: "/projects/faireez.png",
    tags: ["Mobile", "Marketplace", "SaaS"]
  }
] 