import LogosVue from '~icons/logos/vue'
import LogosLaravel from '~icons/logos/laravel'
import LogosBootstrap from '~icons/logos/bootstrap'
import LogosNuxt from '~icons/logos/nuxt-icon'
import LogosElement from '~icons/logos/element'
import LogosJavascript from '~icons/logos/javascript'
import LogosHtml from '~icons/logos/html-5'
import LogosCss from '~icons/logos/css-3'
import LogosSass from '~icons/logos/sass'
import LogosTailwind from '~icons/logos/tailwindcss-icon'
import LogosNextjs from '~icons/file-icons/nextjs'
import LogosDarkNextjs from '~icons/file-icons/nextjs?color=#fff'
import LogosTypescript from '~icons/logos/typescript-icon'
import LogosPwa from '~icons/logos/pwa'
import LogosDarkPwa from '~icons/simple-icons/pwa'
import LogosReact from '~icons/logos/react'
import LogosReactQuery from '~icons/logos/react-query-icon'

import coverParentinghub from '~/assets/images/projects/parentinghub.png'
import coverPaninti from '~/assets/images/projects/paninti.png'
import coverPanintiPartner from '~/assets/images/projects/panintipartner.png'
import coverRestoku from '~/assets/images/projects/restoku.png'
import coverQuranku from '~/assets/images/projects/cover-quranku.jpg'
import coverCovid19 from '~/assets/images/projects/cover-covid19.jpg'
import coverDicodingJobs from '~/assets/images/projects/cover-dicodingjobs.jpeg'

export function useProjects() {
  const isDark = useDark()
  const listProjects = shallowRef([
    {
      id: 8,
      name: 'XL.CO.ID',
      url: 'https://xl.co.id/',
      description: `Contribute to the development of the XL.CO.ID website, a website that provides information about XL products and services, as well as the latest promos and events.`,
      cover: "https://media.licdn.com/dms/image/v2/D562DAQEqi1pPKVgH0w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1712127032567?e=1739127600&v=beta&t=zp1tbpAq191cJUm2uldiTsrLTbE3CpehJli0V-e5IQU",
      featured: true,
      techstack: [
        {
          id: 1,
          name: 'Next.Js',
          icon: LogosNextjs,
        },
        {
          id: 2,
          name: 'Reactjs',
          icon: LogosReact,
        },
        {
          id: 3,
          name: 'Bootstrap',
          icon: LogosBootstrap,
        },
      ],
    },
    {
      id: 7,
      name: 'Dicoding Jobs',
      url: 'https://jobs.dicoding.com/',
      description: `Dicoding Jobs is an online job search and recruitment platform service to make it easier for job seekers to find work while also helping the industry find talent according to their needs.

      This service is provided by PT Presentologics, the parent company of PT Dicoding Akademi Indonesia, and/or its affiliates.
      
      A number of domestic and foreign company partners have entrusted their job hunting to Dicoding Jobs.`,
      cover: coverDicodingJobs,
      featured: true,
      techstack: [
        {
          id: 1,
          name: 'Next.Js',
          icon: LogosNextjs,
        },
        {
          id: 2,
          name: 'Reactjs',
          icon: LogosReact,
        },
        {
          id: 3,
          name: 'Bootstrap',
          icon: LogosBootstrap,
        },
        {
          id: 4,
          name: 'React Query',
          icon: LogosReactQuery,
        },
      ],
    },
    {
      id: 1,
      name: 'Parenting Hub',
      url: 'https://parentinghub.co.id',
      description: 'An educational media site and information about reviews, the growth and development of children and parenting.',
      cover: coverParentinghub,
      featured: false,
      techstack: [
        {
          id: 1,
          name: 'Vuejs',
          icon: LogosVue,
        },
        {
          id: 2,
          name: 'Laravel',
          icon: LogosLaravel,
        },
        {
          id: 3,
          name: 'Bootstrap 4',
          icon: LogosBootstrap,
        },
        {
          id: 4,
          name: 'Element UI',
          icon: LogosElement,
        },
      ],
    },
    {
      id: 2,
      name: 'Paninti Store',
      url: 'https://paninti.com',
      description: 'E-commerce for the most complete needs of mothers and babies.',
      cover: coverPaninti,
      featured: true,
      techstack: [
        {
          id: 1,
          name: 'Vuejs',
          icon: LogosVue,
        },
        {
          id: 2,
          name: 'Nuxt',
          icon: LogosNuxt,
        },
        {
          id: 3,
          name: 'Element UI',
          icon: LogosElement,
        },
        {
          id: 4,
          name: 'Bootstrap 4',
          icon: LogosBootstrap,
        },
        {
          id: 5,
          name: 'SASS/SCSS',
          icon: LogosSass,
        },
      ],
    },
    {
      id: 3,
      name: 'Paninti Partner',
      url: 'https://partner.paninti.com',
      description: 'A place for mutual cooperation to face the challenges of an increasingly dynamic economic condition',
      cover: coverPanintiPartner,
      featured: false,
      techstack: [
        {
          id: 1,
          name: 'Vuejs',
          icon: LogosVue,
        },
        {
          id: 2,
          name: 'Nuxt',
          icon: LogosNuxt,
        },
        {
          id: 3,
          name: 'Element UI',
          icon: LogosElement,
        },
        {
          id: 4,
          name: 'Bootstrap 4',
          icon: LogosBootstrap,
        },
        {
          id: 5,
          name: 'SASS/SCSS',
          icon: LogosSass,
        },
      ],
    },
    {
      id: 9,
      name: 'Massive Music',
      url: 'https://www.massivemusic.co.id/',
      description: 'Massive Music is home for more than 1,200 Indonesian Composers. As the Leading Music Publisher in Indonesia with the largest market share for local catalogue, Massive Music is Home for Songwriter and Heaven for Song User. We are making Music Publishing accessible for everyone.',
      cover: "https://media.licdn.com/dms/image/v2/D562DAQGiZU2nhNCp_Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1737988479344?e=1739127600&v=beta&t=Fj84lVTyP_qnEZXw3T31jo58v3wV44kkYIvrL4KZIno",
      featured: false,
      techstack: [
        {
          id: 2,
          name: 'Next.js',
          icon: isDark ? LogosDarkNextjs : LogosNextjs,
        },
        {
          id: 3,
          name: 'Tailwind CSS',
          icon: LogosTailwind,
        },
        {
          id: 4,
          name: 'TypeScript',
          icon: LogosTypescript,
        },
      ],
    },
    {
      id: 10,
      name: 'Axis Digital Mutant',
      url: 'https://axis.co.id/digitalmutant',
      description: 'Building Axis Digital Mutant web with Next.js and Tailwind CSS. Integrating API Generate Mutant, Layouting Full Pages',
      cover: "https://media.licdn.com/dms/image/v2/D562DAQG6BLfzNmXvEA/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1722223933161?e=1739127600&v=beta&t=LTZkXjGbJCXQaWhiyt7wb07YcX6QLekB_R3UITt8D3A",
      featured: false,
      techstack: [
        {
          id: 2,
          name: 'Next.js',
          icon: isDark ? LogosDarkNextjs : LogosNextjs,
        },
        {
          id: 3,
          name: 'Tailwind CSS',
          icon: LogosTailwind,
        },
        {
          id: 4,
          name: 'TypeScript',
          icon: LogosTypescript,
        },
      ],
    },
    {
      id: 11,
      name: 'FTW',
      url: 'https://ftwjakarta.id/',
      description: 'FTW is not just a creative agency. FTW is an agency with extensive experience across diverse industries, brands, and regions, delivering effective results through proven work processes.',
      cover: "https://media.licdn.com/dms/image/v2/D562DAQEcAzQUWN9CgA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722427718715?e=1739127600&v=beta&t=v-NQCb9vFjY1PuWTOsYGJzn1R_ES-h6jg8WLj_c3frY",
      featured: false,
      techstack: [
        {
          id: 2,
          name: 'Next.js',
          icon: isDark ? LogosDarkNextjs : LogosNextjs,
        },
        {
          id: 3,
          name: 'Tailwind CSS',
          icon: LogosTailwind,
        },
        {
          id: 4,
          name: 'TypeScript',
          icon: LogosTypescript,
        },
      ],
    },
    {
      id: 4,
      name: 'Restoku',
      url: 'https://restoku.netlify.app',
      description: 'Restoku is an application to fulfill submissions dicoding in Become Front-End Developer Expert.',
      cover: coverRestoku,
      featured: false,
      techstack: [
        {
          id: 1,
          name: 'HTML',
          icon: LogosHtml,
        },
        {
          id: 2,
          name: 'SASS/SCSS',
          icon: LogosSass,
        },
        {
          id: 3,
          name: 'Javascript',
          icon: LogosJavascript,
        },
        {
          id: 4,
          name: 'PWA',
          icon: isDark ? LogosDarkPwa : LogosPwa,
        },
      ],
    },
    {
      id: 5,
      name: 'Quranku',
      url: 'https://alquran-ku.netlify.app/',
      description: 'Al-Quran reading application with Indonesian translation verses.',
      cover: coverQuranku,
      featured: false,
      techstack: [
        {
          id: 1,
          name: 'Reactjs',
          icon: LogosReact,
        },
        {
          id: 2,
          name: 'Next.js',
          icon: isDark ? LogosDarkNextjs : LogosNextjs,
        },
        {
          id: 3,
          name: 'Tailwind CSS',
          icon: LogosTailwind,
        },
        {
          id: 4,
          name: 'TypeScript',
          icon: LogosTypescript,
        },
        {
          id: 5,
          name: 'PWA',
          icon: isDark ? LogosDarkPwa : LogosPwa,
        },
      ],
    },
    {
      id: 6,
      name: 'Covid 19 Tracker Indonesia',
      url: 'https://covid19-in-indonesia.netlify.app/',
      description: 'A website that displays the total number of COVID-19 cases in Indonesia',
      cover: coverCovid19,
      featured: false,
      techstack: [
        {
          id: 1,
          name: 'Reactjs',
          icon: LogosReact,
        },
        {
          id: 2,
          name: 'Tailwind CSS',
          icon: LogosTailwind,
        },
        {
          id: 3,
          name: 'PWA',
          icon: isDark ? LogosDarkPwa : LogosPwa,
        },
      ],
    },
  ])

  const listSkills = shallowRef([
    {
      id: 9,
      title: 'React JS',
      skill: 'Intermediate',
      icon: LogosReact,
    },
    {
      id: 10,
      title: 'Nextjs',
      skill: 'Intermediate',
      icon: isDark ? LogosDarkNextjs : LogosNextjs,
    },
    {
      id: 1,
      title: 'Vue JS',
      skill: 'Expert',
      icon: LogosVue,
    },
    {
      id: 2,
      title: 'JavaScript',
      skill: 'Expert',
      icon: LogosJavascript,
    },
    {
      id: 3,
      title: 'TypeScript',
      skill: 'Intermediate',
      icon: LogosTypescript,
    },
    {
      id: 4,
      title: 'HTML',
      skill: 'Expert',
      icon: LogosHtml,
    },
    {
      id: 5,
      title: 'CSS',
      skill: 'Expert',
      icon: LogosCss,
    },
    {
      id: 6,
      title: 'SASS/SCSS',
      skill: 'Advanced',
      icon: LogosSass,
    },
    {
      id: 7,
      title: 'Progressive Web Apps (PWA)',
      skill: 'Advanced',
      icon: isDark ? LogosDarkPwa : LogosPwa,
    },
    {
      id: 8,
      title: 'Nuxt',
      skill: 'Expert',
      icon: LogosNuxt,
    },
  ])

  return {
    listProjects,
    listSkills,
  }
}
