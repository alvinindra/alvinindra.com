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

import coverParentinghub from '~/assets/images/projects/parentinghub.png'
import coverPaninti from '~/assets/images/projects/paninti.png'
import coverPanintiPartner from '~/assets/images/projects/panintipartner.png'
import coverRestoku from '~/assets/images/projects/restoku.png'
import coverQuranku from '~/assets/images/projects/cover-quranku.jpg'
import coverCovid19 from '~/assets/images/projects/cover-covid19.jpg'

export function useProjects() {
  const isDark = useDark()
  const listProjects = shallowRef([
    {
      id: 1,
      name: 'Parenting Hub',
      url: 'https://parentinghub.co.id',
      description: 'An educational media site and information about reviews, the growth and development of children and parenting.',
      cover: coverParentinghub,
      featured: true,
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
      featured: true,
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
      skill: 'Beginner',
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
      skill: 'Advanced',
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
