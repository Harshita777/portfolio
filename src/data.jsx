import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
    url: "https://mixmaster.vercel.app/",
    github: "https://github.com/Harshita777?tab=repositories",
    title: "mix-master",
    text: "This project is about searching the different types of jucies according the user's desire.",
  },
  {
    id: nanoid(),
    img: "https://images.ctfassets.net/s9a93u8uh0jj/50ovgAVhdUgH7sonYRaGyu/3d2808b0b66b18c56c598a3c21070957/reviews.png",
    url: "https://contentful-cms-henna.vercel.app/",
    github: "https://github.com/Harshita777?tab=repositories",
    title: "contentful-CMS",
    text: "This project uses the contentful CMS which stores the project in cloud and can be used in the project.",
  },
  {
    id: nanoid(),
    img: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTMzMjZ8MHwxfHNlYXJjaHw2fHxjYXR8ZW58MHx8fHwxNjk4MzMzOTIxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://unplash-fgiy.vercel.app/",
    github: "https://github.com/Harshita777?tab=repositories",
    title: "Unplash Images",
    text: "This project uses the API of Unplash images and displays the images according to the user.",
  },
];
