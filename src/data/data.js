import CrunchObleasImg from "../assets/images/projects/design.png";
import ImadfxqBlogImg from "../assets/images/projects/myBlogProject1.png";
import IngenieriaImg from "../assets/images/projects/a&s_ingenieria.png";
import RickMortyImg from "../assets/images/projects/spa.png";
import AreaCalculatorImg from "../assets/images/projects/AreaCalc.png";
import PopUpImg from "../assets/images/projects/simplePopUp.png";
import DigitalClockImg from "../assets/images/projects/digitalClock.png";
import TodoAppImg from "../assets/images/projects/todoApp.png";
import QuizImg from "../assets/images/projects/quiz.png";
import WeatherAppImg from "../assets/images/projects/weatherApp.png";
import MonstersSpaImg from "../assets/images/projects/monsters_SPA.png";
import ReactNotesApp from "../assets/images/projects/reactNotesApp.png";

import BrazilFlag from "../assets/images/langs/Flag_of_Brazil.svg";
import USAFlag from "../assets/images/langs/Flag_of_the_United_States.svg";
import SpainFlag from "../assets/images/langs/Flag_of_Spain.svg";

import GitImg from "../assets/images/skills/git_logo.svg";
import SassImg from "../assets/images/skills/Sass_logo.svg";
import WebpackImg from "../assets/images/skills/webpack.svg";
import ReactImg from "../assets/images/skills/React-icon.svg";
import ReactRouterImg from "../assets/images/skills/reactrouter.svg";
import CommandLineImg from "../assets/images/skills/commandLine.svg";
import ReduxImg from "../assets/images/skills/redux.svg";
import NpmImg from "../assets/images/skills/Npm.svg";

import LinkedInLogo from "../assets/images/contact/linkedin.svg";
import GitHubLogo from "../assets/images/contact/github_icon.svg";
import MailLogo from "../assets/images/contact/mail_icon_128820.svg";
import InstagramLogo from "../assets/images/contact/instagram.svg";

export const QUOTES = [
  "The best moment to get a map is before entering the woods.",
  "The best moment to plant a tree was 20 years ago.",
  "By putting a brick everyday, there will be a moment where you will have a castle.",
  "Not all the types of gas will be good for your engine, but you need gas to drive.",
  "When you don't apply it, knowledge is useless.",
  "Everything sums or substracts in the equation of life, you decide.",
  "Don't count the hours, make the hours count.",
  "When a cat lands on its feet, it's not by casualty.",
  "If you really loved yourself, would you do that?",
  "You can't avoid effort, you can only pospone it.",
  "Do not confuse culture with intelligence.",
  "Be proud of the things you don't know, especially those that don't make you any better",
];

export const SKILLS = [
  {
    skillImg: ReactImg,
    skillName: "React",
    id: 0,
  },
  {
    skillImg: ReduxImg,
    skillName: "Redux",
    id: 1,
  },
  {
    skillImg: ReactRouterImg,
    skillName: "React-router",
    id: 2,
  },
  {
    skillImg: SassImg,
    skillName: "SASS",
    id: 3,
  },
  {
    skillImg: WebpackImg,
    skillName: "Webpack",
    id: 4,
  },
  {
    skillImg: GitImg,
    skillName: "Git",
    id: 5,
  },
  {
    skillImg: CommandLineImg,
    skillName: "Command Line",
    id: 6,
  },
  {
    skillImg: NpmImg,
    skillName: "NPM",
    id: 7,
  },
];

export const PROJECTS = [
  {
    title: "Crunch Obleas",
    tags: ["HTML", "CSS", "Responsive"],
    imgUrl: CrunchObleasImg,
    website: "https://imadfxq.github.io/Crunch-Obleas/",
    github: "https://github.com/iMadfxq/Crunch-Obleas",
    id: 0,
  },
  {
    title: "iMadfxq's Blog",
    tags: ["HTML", "CSS", "Responsive"],
    imgUrl: ImadfxqBlogImg,
    website: "https://imadfxq.github.io/my-blog/",
    github: "https://github.com/iMadfxq/my-blog",
    id: 1,
  },
  {
    title: "A&S Ingenieria",
    tags: ["HTML", "SCSS", "Webpack"],
    imgUrl: IngenieriaImg,
    website: "https://imadfxq.github.io/Ingenieria-website/dist/",
    github: "https://github.com/iMadfxq/Ingenieria-website",
    id: 2,
  },
  {
    title: "Rick and Morty SPA",
    tags: ["HTML", "SCSS", "JavaScript"],
    imgUrl: RickMortyImg,
    website: "https://imadfxq.github.io/Rick_Morty_characters/dist/index.html",
    github: "https://github.com/iMadfxq/Rick_Morty_characters",
    id: 3,
  },
  {
    title: "Area Calculator",
    tags: ["HTML", "CSS", "JavaScript"],
    imgUrl: AreaCalculatorImg,
    website: "https://imadfxq.github.io/Area_calculator/",
    github: "https://github.com/iMadfxq/Area_calculator",
    id: 4,
  },
  {
    title: "Custom PopUp",
    tags: ["HTML", "CSS", "JavaScript"],
    imgUrl: PopUpImg,
    website: "https://imadfxq.github.io/pop-up/",
    github: "https://github.com/iMadfxq/pop-up",
    id: 5,
  },
  {
    title: "Digital Clock",
    tags: ["HTML", "CSS", "JavaScript"],
    imgUrl: DigitalClockImg,
    website: "https://imadfxq.github.io/digitalClock/",
    github: "https://github.com/iMadfxq/digitalClock",
    id: 6,
  },
  {
    title: "ToDo App",
    tags: ["localStorage", "JavaScript", "DOM"],
    imgUrl: TodoAppImg,
    website: "https://imadfxq.github.io/todo-app/",
    github: "https://github.com/iMadfxq/todo-app",
    id: 7,
  },
  {
    title: "Quiz",
    tags: ["JavaScript", "localStorage", "DOM"],
    imgUrl: QuizImg,
    website: "https://imadfxq.github.io/simpleQuiz/",
    github: "https://github.com/iMadfxq/simpleQuiz",
    id: 8,
  },
  {
    title: "Weather App",
    tags: ["JavaScript", "Fetch", "Async JS"],
    imgUrl: WeatherAppImg,
    website: "https://imadfxq.github.io/weatherApp/",
    github: "https://github.com/iMadfxq/weatherApp",
    id: 9,
  },
  {
    title: "Monsters SPA",
    tags: ["React-DOM", "Fetch", "JavaScript"],
    imgUrl: MonstersSpaImg,
    website: "https://fanciful-starship-7128b4.netlify.app/",
    github: "https://github.com/iMadfxq/monsters_SPA",
    id: 10,
  },
  {
    title: "React Notes App",
    tags: ["React-DOM", "Redux", "JavaScript"],
    imgUrl: ReactNotesApp,
    website: "https://incredible-stroopwafel-e4fcd9.netlify.app/",
    github: "https://github.com/iMadfxq/react-NotesApp",
    id: 11,
  },
];

export const LANGUAGES = [
  { languageImg: SpainFlag, languageVideo: "", languageName: "Spanish", id: 0 },
  { languageImg: USAFlag, languageVideo: "", languageName: "English", id: 1 },
  {
    languageImg: BrazilFlag,
    languageVideo: "",
    languageName: "Portuguese",
    id: 2,
  },
];

export const CONTACTS = [
  {
    img: GitHubLogo,
    name: "GitHub",
    description:
      "Where you will find the code of my projects, you will also be able to see how I'm constantly coding.",
    url: "https://github.com/iMadfxq",
    id: 0,
  },
  {
    img: LinkedInLogo,
    name: "LinkedIn",
    description:
      "Where you will find my education and experience, my professional profile.",
    url: "https://www.linkedin.com/in/imadfxq/",
    id: 1,
  },
  {
    img: InstagramLogo,
    name: "Instagram",
    description:
      "Where you will find small pieces of my life, things I like to do, and what I'm interested in.",
    url: "https://www.instagram.com/imadfxq/",
    id: 2,
  },
  {
    img: MailLogo,
    name: "Mail",
    description:
      "The basic contact method, simple but effective. Professional.",
    url: "mailto:imadfxq@imadfxq.com?subject=Hey, I saw your portfolio, I would like you to work with me",
    id: 3,
  },
];
