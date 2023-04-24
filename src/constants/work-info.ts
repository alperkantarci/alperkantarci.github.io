interface TechStackIcon {
  name: string;
  title: string;
}

interface Company {
  name: string;
  position: string;
  link?: string;
  date: string;
  techStackIcons: Array<TechStackIcon>;
}

const sechard: Company = {
  link: 'https://sechard.com',
  name: 'SecHard',
  position: 'Full-stack developer',
  date: 'Sept/2019 - Jan/2023',
  techStackIcons: [
    { name: 'mdi:angular', title: 'Angular' },
    { name: 'mdi:nodejs', title: 'Nodejs' },
    { name: 'mdi:language-typescript', title: 'Typescript' },
    { name: 'mdi:language-python', title: 'Python' },
    { name: 'mdi:language-java', title: 'Java' },
    { name: 'mdi:docker', title: 'Docker' },
  ],
};

const genetek: Company = {
  link: 'https://genetek.com.tr',
  name: 'Genetek',
  position: 'Full-stack developer',
  date: 'Nov/2017 - Nov/2018',
  techStackIcons: [
    { name: 'mdi:language-javascript', title: 'Javascript' },
    { name: 'mdi:language-csharp', title: 'C#' },
    { name: 'mdi:dot-net', title: '.NET Core' },
    { name: 'mdi:api', title: 'API' },
    { name: 'mdi:language-html5', title: 'HTML5' },
    { name: 'mdi:language-css3', title: 'CSS3' },
  ],
};

const feronto: Company = {
  link: '#',
  name: 'Feronto',
  position: 'Full-stack developer',
  date: 'Nov/2017 - Nov/2018',
  techStackIcons: [
    { name: 'mdi:language-javascript', title: 'Javascript' },
    { name: 'mdi:language-java', title: 'Java' },
    { name: 'mdi:android', title: 'Android' },
    { name: 'mdi:api', title: 'API' },
    { name: 'mdi:language-html5', title: 'HTML5' },
    { name: 'mdi:language-css3', title: 'CSS3' },
  ],
};

export default [sechard, genetek, feronto];
export type { Company };
