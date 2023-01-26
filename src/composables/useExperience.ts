export default function useExperience() {
  const listExperience = ref([
    {
      id: 0,
      date: 'Dec 2022 - Present',
      company: 'Dicoding Indonesia',
      type: 'Contract',
      job: 'Product Engineer - React',
      desc: ['- Integrating Vitest (Unit Testing)',],
    },
    {
      id: 1,
      date: 'Aug 2021 - Dec 2022',
      company: 'PT Paninti Hub Indonesia',
      type: 'Full-time',
      job: 'Front-End Developer & Team Lead',
      desc: ['- Monitoring and control git flow project',
        '- Collaborate with Product Owner and Team',
        '- Building web base from scratch using Vue 3 and Vite.js',
        '- Interview Front-End Developer candidates',
        '- Write technical documentation'],
    },
    {
      id: 2,
      date: 'Sep 2019 - Aug 2021',
      company: 'PT Paninti Hub Indonesia',
      type: 'Full-time',
      job: 'Front-End Developer',
      desc: ['- Maintaining 4+ web apps, mostly in Vue.js',
        '- Guiding Frontend Developers to have best practices in Nuxt.js, SCSS and Slicing Design'],
    },
    {
      id: 3,
      date: 'Jun 2020 - Present',
      type: 'Freelance',
      company: 'Dicoding Indonesia',
      job: 'External Code Reviewer',
      desc: ['- Reviewer at class Progressive Web Apps'],
    },
    {
      id: 4,
      date: 'Jun 2019 - Aug 2019',
      type: 'Apprenticeship',
      company: 'Imtech Solution',
      job: 'Web Developer',
      desc: ['- Monitoring and looking for bugs in the SINOAH application during PPDB SMKN 1 Cimahi.',
        '- SIRENIS Applications made during this internship are used to assess students who are used by teachers also managed by the school admin base on majoring in software engineering which is made with Laravel 5.'],
    },
  ])

  return {
    listExperience,
  }
}
