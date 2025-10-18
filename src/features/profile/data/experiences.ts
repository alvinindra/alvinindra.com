import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "antikode",
    companyName: "Antikode",
    companyLogo: "/images/company-icon/antikode.png",
    positions: [
      {
        id: "antikode-fe-2024",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "01.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Contributes to the development, maintenance, and enhancement of 9+ projects.
- Collaborating with team division and project manager.
- Layouting and developing project features.
- Clients: XL Satu, XL.co.id, Massive Music, Alife by Vision, Heartology, Axis, Chandra Asri, FTW Jakarta.`,
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Agile",
          "Teamwork",
          "Communication",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "dicoding",
    companyName: "Dicoding Indonesia",
    companyLogo:
      "https://assets.cdn.dicoding.com/original/commons/new-ui-logo.png",
    positions: [
      {
        id: "dicoding-pe-2022",
        title: "Product Engineer - React",
        employmentPeriod: {
          start: "12.2022",
          end: "12.2023",
        },
        employmentType: "Contract",
        icon: "code",
        description: `- Building core features and premium features in Dicoding Jobs with React.js and Next.js.
- Building SEO Dicoding Jobs from scratch. Integrating Google Analytics, Dashboard Lookerstudio, Search Console.`,
        skills: [
          "React.js",
          "Next.js",
          "SEO",
          "Google Analytics",
          "Search Console",
          "Problem-solving",
        ],
      },
      {
        id: "dicoding-reviewer-2020",
        title: "External Code Reviewer",
        employmentPeriod: {
          start: "06.2020",
        },
        employmentType: "Freelance",
        icon: "code",
        description: `- Reviewer at class Progressive Web Apps.
- Reviewer at class Learn Basic Web Programming.
- Reviewer at class Learn to Build Web Apps with React.`,
        skills: [
          "Code Review",
          "React",
          "PWA",
          "Web Development",
          "Attention to Detail",
        ],
      },
    ],
  },
  {
    id: "paninti-hub",
    companyName: "PT Paninti Hub Indonesia",
    companyLogo: "/images/company-icon/paninti-icon.jpg",
    positions: [
      {
        id: "paninti-tl-2021",
        title: "Front-End Developer & Team Lead",
        employmentPeriod: {
          start: "08.2021",
          end: "12.2022",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Monitoring and control git flow project.
- Collaborate with Product Owner and Team.
- Building web base from scratch using Vue 3 and Vite.js.
- Interview Front-End Developer candidates.
- Write technical documentation.`,
        skills: [
          "Vue 3",
          "Vite.js",
          "Git",
          "Leadership",
          "Team Management",
          "Technical Documentation",
          "Recruitment",
        ],
        isExpanded: true,
      },
      {
        id: "paninti-fe-2019",
        title: "Front-End Developer",
        employmentPeriod: {
          start: "09.2019",
          end: "08.2021",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Maintaining 5+ web apps, mostly in Vue.js.
- Guiding Frontend Developers to have best practices in Nuxt.js, SCSS and Slicing Design.`,
        skills: [
          "Vue.js",
          "Nuxt.js",
          "SCSS",
          "UI Slicing",
          "Mentoring",
          "Code Quality",
        ],
      },
    ],
  },
  {
    id: "imtek-solution",
    companyName: "Imtek Solution",
    companyLogo: "/images/company-icon/imtek.jpeg",
    positions: [
      {
        id: "imtek-web-2019",
        title: "Web Developer",
        employmentPeriod: {
          start: "06.2019",
          end: "08.2019",
        },
        employmentType: "Apprenticeship",
        icon: "code",
        description: `- Monitoring and looking for bugs in the SINOAH application during PPDB SMKN 1 Cimahi.
- SIRENIS Applications made during this internship are used to assess students who are used by teachers also managed by the school admin base on majoring in software engineering which is made with Laravel 5.`,
        skills: ["Laravel 5", "PHP", "MySQL", "Bug Fixing", "Testing"],
      },
    ],
  },
]
