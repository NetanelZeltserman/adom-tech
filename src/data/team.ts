export interface Founder {
  id: string;
  name: string;
  bio: string;
  image: string;
  linkedIn: string;
}

export const founders: Founder[] = [
  {
    id: "arthur",
    name: "Arthur Garmider",
    bio: "Built up an impressive 15 years of experience in the industry, with a focus on Architecture, Micro-Services, Big Data, and Machine Learning. Highly experienced with System Architecture. Began as an architect on the SAP Research team, following that he led the architecture at Payoneer, including the implementation of the Open Banking API, and the Account-Takeover prevention system. Additionally, he was in charge of the Monolith to multiple Microservices refactor. Arthur has also designed, and implemented Big Data and Machine Learning platforms during his time at Payoneer. For the past year, Arthur was the CTO at a cyber-security startup focused in the domain of static code analysis. Using his vast expertise in the industry, Arthur is ready to help propel your company into the new age of AI & ML.",
    linkedIn: "https://www.linkedin.com/in/arthur-garmider/",
    image: "/founders/arthur.png"
  },
  {
    id: "yaakov",
    name: "Yaakov Guttermann",
    linkedIn: "https://www.linkedin.com/in/yaakov-guttermann-a41a9347/",
    bio: "In the industry for 15 years, with a focus on Full-Stack development, and Team Leading. He began his career in the IDF Programming Course, and later served in the Israeli Air Force Technology Unit for over 5 years. Yaakov has gained a special expertise in integration, and in financial products and services, as well as in Microservice architecture. Yaakov’s experience as the Team Lead of the Full-Stack and Integration team in GetPackage, and Privya has solidified his reputation as a highly capable professional. Yaakov taught himself how to program from a book at the young age of 14, without even having a computer, he hasn't stopped learning since, and is excited to take on new challenges at your company.",
    image: "/founders/yaakov.png"
  },
  {
    id: "osher",
    name: "Osher Atias",
    linkedIn: "https://www.linkedin.com/in/osher-atias/",
    bio: "With 16 years of experience in the field, Osher’s journey began at the prestigious Mamram programming course, where he honed his skills in programming and software development. His expertise in the field led him to become a consultant for big organizations, including Bank Hapoalim, where he successfully implemented DevOps workflows. Later, Osher ventured into the world of cybersecurity startups, where he managed development teams and played key roles such as Head of development, VP R&D and CTO. Throughout his career, Osher has demonstrated his commitment to staying ahead of the curve, always keeping up with the latest technologies and trends. He is an expert in k8s and all the latest cloud services, enabling him to build efficient, scalable, and secure infrastructure for our clients. With his extensive knowledge and hands-on experience, Osher has become a trusted advisor to many organizations, helping them to navigate complex technological challenges and achieve their business objectives.",
    image: "/founders/osher.png"
  },
  {
    id: "hanan",
    name: "Hanan Ivry",
    linkedIn: "https://www.linkedin.com/in/hanan-ivry-1608b022b/",
    bio: "With 14 years of experience in development and leadership. Starting in the IDF, and later moving to the private sector, specializing in leadership roles in Start Ups. During his time at Payoneer, he led the entire Domain of Account Security. An experienced VP R&D, with multiple tenures at Cyber Security Start Ups, including Sepio, and Privya, where he led the R&D team from the ground up, achieving phenomenal results. Hanan's strength is in building teams, and leading by example, all while implementing efficient and novel solutions in complex MicroService architectures. Hanan has once again brought together a talented team here at Adom, and once you see what we're capable of, you won’t be contacting any other external team.",
    image: "/founders/hanan.png"
  }
];