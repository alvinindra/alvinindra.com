import type { User } from "@/features/profile/types/user"

export const USER: User = {
  firstName: "Alvin Indra",
  lastName: "Pratama",
  displayName: "Alvin Indra Pratama",
  username: "alvinindra",
  gender: "male",
  pronouns: "he/him",
  bio: "As long as they read something, humans won’t be lonely.",
  flipSentences: [
    "As long as they read something, humans won’t be lonely.",
    "Frontend Developer",
    "Coffee Enjoyer",
    "Lifelong Learner",
    "Arash Buana, Keshi & Wave to Earth lovers",
  ],
  address: "Indonesia",
  // phoneNumber: "", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "YWx2aW5pbmRyYXBAZ21haWwuY29t", // base64 encoded
  website: "https://alvinindra.com",
  jobTitle: "Frontend Developer",
  jobs: [
    {
      title: "Frontend Developer",
      company: "Antikode",
      website: "https://antikode.com?ref=alvinindra.com",
    },
    {
      title: "Founder",
      company: "Anak Frontend",
      website: "https://www.instagram.com/anak.frontend",
    },
  ],
  about: `
Hi! I'm Alvin Indra Pratama — a Frontend Developer passionate about creating high-performance, well-designed web applications that deliver exceptional user experiences.

With 5+ years of experience, I specialize in building high-quality web using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.
  `,
  avatar: "/images/square-alvin.jpg",
  ogImage: "/images/og-image.png",
  // namePronunciationUrl: "/audio/alvin-indra-pratama.mp3",
  keywords: [
    "alvin",
    "alvin indra",
    "alvin indra pratama",
    "alvin frontend",
    "frontend developer",
    "iamalvin",
  ],
  dateCreated: "2025-10-17", // YYYY-MM-DD
}
