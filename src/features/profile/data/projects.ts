import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "xl-coid",
    title: "XL.CO.ID",
    period: {
      start: "01.2024",
    },
    logo: "https://www.xl.co.id/icons/favicon.png",
    link: "https://xl.co.id/",
    skills: ["Next.js", "React", "Bootstrap"],
    description:
      "Contribute to the development of the XL.CO.ID website, a website that provides information about XL products and services, as well as the latest promos and events.",
    isExpanded: true,
  },
  {
    id: "dicoding-jobs",
    title: "Dicoding Jobs",
    period: {
      start: "01.2023",
      end: "12.2023",
    },
    logo: "/images/company-icon/dicoding.png",
    link: "https://jobs.dicoding.com/",
    skills: ["Next.js", "React", "Bootstrap", "React Query"],
    description: `Dicoding Jobs is an online job search and recruitment platform service to make it easier for job seekers to find work while also helping the industry find talent according to their needs.

This service is provided by PT Presentologics, the parent company of PT Dicoding Akademi Indonesia, and/or its affiliates.

A number of domestic and foreign company partners have entrusted their job hunting to Dicoding Jobs.`,
    isExpanded: true,
  },
  {
    id: "massive-music",
    title: "Massive Music",
    link: "https://www.massivemusic.co.id/",
    logo: "/images/projects-icon/massivemusic-icon.jpeg",
    skills: ["Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "Massive Music is home for more than 1,200 Indonesian Composers. As the Leading Music Publisher in Indonesia with the largest market share for local catalogue, Massive Music is Home for Songwriter and Heaven for Song User. We are making Music Publishing accessible for everyone.",
  },
  {
    id: "parenting-hub",
    title: "Parenting Hub",
    period: {
      start: "01.2019",
      end: "12.2022",
    },
    logo: "/images/projects-icon/parentinghub.png",
    link: "https://parentinghub.co.id",
    skills: ["Vue.js", "Laravel", "Bootstrap 4", "Element UI"],
    description:
      "An educational media site and information about reviews, the growth and development of children and parenting.",
  },
  {
    id: "paninti-store",
    title: "Paninti Store",
    period: {
      start: "01.2021",
      end: "05.2022",
    },
    logo: "/images/company-icon/paninti-icon.jpg",
    link: "https://paninti.com",
    skills: ["Vue.js", "Nuxt", "Element UI", "Bootstrap 4", "SASS/SCSS"],
    description:
      "E-commerce for the most complete needs of mothers and babies.",
    isExpanded: true,
  },
  {
    id: "paninti-partner",
    title: "Paninti Partner",
    link: "https://partner.paninti.com",
    skills: ["Vue.js", "Nuxt", "Element UI", "Bootstrap 4", "SASS/SCSS"],
    description:
      "A place for mutual cooperation to face the challenges of an increasingly dynamic economic condition",
  },
  {
    id: "axis-digital-mutant",
    title: "Axis Digital Mutant",
    link: "https://axis.co.id/digitalmutant",
    skills: ["Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "Building Axis Digital Mutant web with Next.js and Tailwind CSS. Integrating API Generate Mutant, Layouting Full Pages",
  },
  {
    id: "ftw",
    title: "FTW",
    link: "https://ftwjakarta.id/",
    skills: ["Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "FTW is not just a creative agency. FTW is an agency with extensive experience across diverse industries, brands, and regions, delivering effective results through proven work processes.",
  },
  {
    id: "restoku",
    title: "Restoku",
    link: "https://restoku.netlify.app",
    skills: ["HTML", "SASS/SCSS", "JavaScript", "PWA"],
    description:
      "Restoku is an application to fulfill submissions dicoding in Become Front-End Developer Expert.",
  },
  {
    id: "quranku",
    title: "Quranku",
    link: "https://alquran-ku.netlify.app/",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "PWA"],
    description:
      "Al-Quran reading application with Indonesian translation verses.",
  },
  {
    id: "covid19-tracker",
    title: "Covid 19 Tracker Indonesia",
    link: "https://covid19-in-indonesia.netlify.app/",
    skills: ["React", "Tailwind CSS", "PWA"],
    description:
      "A website that displays the total number of COVID-19 cases in Indonesia",
  },
]
