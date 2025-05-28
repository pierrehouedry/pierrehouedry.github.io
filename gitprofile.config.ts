// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'pierrehouedry', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['pierrehouedry/BiomeSampler','pierrehouedry/DifferentiableHyperbolicity'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [

      ],
    },
  },
  seo: {
    title: 'Pierre Houedry',
    description: '',
    imageURL: 'https://em-content.zobj.net/source/apple/354/man-scientist_1f468-200d-1f52c.png',
  },
  social: {
    linkedin: 'pierre-houedry',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'p.houedry@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
  'Graph Machine Learning', 'Optimal Transport', 'Geometric Learning'
  ],
  experiences: [
    {
      company: 'IRISA Vannes',
      position: 'Postdoctoral Researcher',
      from: 'October 2024',
      to: 'present',
      companyLink: '',
    },
    {
      company: 'University of Rennes 1',
      position: 'Researcher Engineer',
      from: '2023',
      to: '2024',
      companyLink: '',
    }
  ],
  certifications: [

  ],
  educations: [
    {
      institution: 'University of Rennes & University of Caen Normandie',
      degree: 'PhD in Mathematics',
      from: '2020',
      to: '2023',
    },
    {
      institution: 'Ecole Normale Supérieure of Rennes',
      degree: 'MSc in Mathematics',
      from: '2016',
      to: '2019',
    },
  ],
  publications: [
{
  title: 'Twisted calculus in several variables',
  journalName: 'arXiv',
  authors: 'Pierre Houedry',
  link: 'https://arxiv.org/abs/2309.13277',
  year: '2024',
  description:
    'We introduce novel concepts and establish a formal framework for twisted differential operators in the context of several variables.',
},
{
  title: 'Bridging Arbitrary and Tree Metrics via Differentiable Gromov Hyperbolicity',
  journalName: 'arXiv',
  authors: 'Pierre Houedry, Nicolas Courty, Florestan Martin-Baillon, Laetitia Chapel, Titouan Vayer',
  link: 'https://arxiv.org/abs/2505.21073',
  year: '2025',
  description:
    'The paper proposes DeltaZero, a differentiable method to approximate metric spaces with tree metrics using smooth δ-hyperbolicity.',
}

  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.

  enablePWA: true,
};

export default CONFIG;
