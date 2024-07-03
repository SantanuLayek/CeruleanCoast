import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  simplify, 
  ironempire,
  snakegame
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "UI/UX",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];


const projects = [
  {
    name: "Simplify",
    description:
      "HTML based spotify-clone Replicating certain features of the original one.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: simplify,
    source_code_link: "https://santanulayek.github.io/Spotify-Clone/",
  },
  {
    name: "Weather Application",
    description:
      "HTML based app that fetches weather of places and displays them to the user.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://santanulayek.github.io/Weather-App/",
  },
  {
    name: "Snake-Game",
    description:
      "HTML based interactive game that mimics the popular snake game.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: snakegame,
    source_code_link: "https://santanulayek.github.io/SnakeGame/",
  },
  {
    name: "Iron-Empire",
    description:
      "A Modern Gym/Fitness Website that uses API to fetch information about various exercises, how to perform them, the equipment used, and the various body parts or muscle group they ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ironempire,
    source_code_link: "https://iron-empire.netlify.app/",
  },
];

export { services, technologies, projects };