// Project screenshots (local files, so they always load on Netlify)
import todoImg from './assets/projects/todo.jpg';
import weatherImg from './assets/projects/weather.jpg';
import tictactoeImg from './assets/projects/tictactoe.jpg';
import passwordImg from './assets/projects/password.jpg';
import googleImg from './assets/projects/google.jpg';
import blogImg from './assets/projects/blog.jpg';
import redragonImg from './assets/projects/redragon.jpg';
import multimediaImg from './assets/projects/multimedia.jpg';
import cvImg from './assets/projects/cv.jpg';
import multipageImg from './assets/projects/multipage.jpg';

// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'SQLite', logo: postgreLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Django', logo: pythonLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo }, 
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmp3YSgworrN4gVplw1_vkG0x5XNpd-6rlgLJtxaGXQ&s=10",
      role: "Website Developer",
      company: "Nextech Academy",
      desc: "At Nextech Academy, I learned and practiced full-stack website development. On the frontend, I built responsive and interactive web pages using HTML, CSS and JavaScript. On the backend, I worked with Python and the Django framework, using SQLite as the database to create dynamic, data-driven web applications.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "python",
        "Django",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4p7dGNDrV-aEQLcDAXCB9geRUknpXSMi92LjLkREK_Kqe03anQW0jn6Ys&s=10",
      school: "Islamabad Career School",
      date: "Currently Studying",
      desc: "I am currently studying in 9th class, where I am building a strong foundation in Science, Mathematics and Computer Studies. Alongside my school studies, I am learning web development and practicing it with real projects. I am a hardworking and curious student, and my goal is to complete my education while growing as a professional developer.",
      degree: "9th Class (Ongoing)",
    },
  ];
  
  // `github` = View Code link, `webapp` = View Live (Netlify) link.
  // If a link is empty, that button is hidden automatically.
  export const projects = [
    {
      id: 0,
      title: "Focus — Premium Todo App",
      description:
        "A polished, production-ready Todo application built with Django, HTML, CSS, and vanilla JavaScript. Features full CRUD, priority badges, dark/light mode, drag-and-drop reordering, live filters, real-time search, and smooth animations. Inspired by modern tools like Linear and Notion.",
      image: todoImg,
      tags: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Muhammadsafiktk/mytodo-django",
      webapp: "https://safistudent.pythonanywhere.com/",
    },
    {
      id: 1,
      title: "Weather App",
      description:
        "A responsive and interactive weather forecasting web application. Fetches real-time weather data and displays current conditions such as temperature, humidity, and weather status with a clean, modern UI.",
      image: weatherImg,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Muhammadsafiktk/WeatherApp-safi",
      webapp: "https://weatherappsafi.netlify.app/",
    },
    {
      id: 2,
      title: "Tic Tac Toe Game",
      description:
        "A fully interactive browser-based Tic Tac Toe game built with HTML, CSS, and JavaScript. Features clean responsive design, win/tie detection, and a reset option for new games.",
      image: tictactoeImg,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Muhammadsafiktk/TicTacToe-safi",
      webapp: "https://tictacgamesafi.netlify.app/",
    },
    {
      id: 3,
      title: "Password Generator",
      description:
        "A simple and useful password generator tool built with JavaScript. Allows users to create strong, customizable passwords with different character options.",
      image: passwordImg,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Muhammadsafiktk/PasswordGenerator-safi",
      webapp: "https://passwordgeneratorsafi.netlify.app/",
    },
    {
      id: 4,
      title: "Google Clone",
      description:
        "A front-end clone of the Google homepage built with HTML and CSS. Focuses on clean layout, responsive design, and matching the look of the original search page.",
      image: googleImg,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Muhammadsafiktk/GoogleClone-safi",
      webapp: "https://googleclonesafi.netlify.app/",
    },
    {
      id: 5,
      title: "Blog Website",
      description:
        "A simple blog website built with HTML. Includes multiple pages and a clean structure suitable for posting articles and content.",
      image: blogImg,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Muhammadsafiktk/Blogwebsite-safi",
      webapp: "https://safiblogs.netlify.app/",
    },
    {
      id: 6,
      title: "Redragon Website",
      description:
        "A product/brand style website inspired by Redragon, built mainly with CSS. Focuses on modern layout and visual presentation.",
      image: redragonImg,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Muhammadsafiktk/redragonwebsite-safi",
      webapp: "https://redragonsafi.netlify.app/",
    },
    {
      id: 7,
      title: "Multimedia Player",
      description:
        "A multimedia player interface built with CSS and HTML. Demonstrates styling for media controls and a clean player layout.",
      image: multimediaImg,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Muhammadsafiktk/Multimediaplayer-safi",
      webapp: "https://multimediaplayersafi.netlify.app/",
    },
    {
      id: 8,
      title: "CV / Resume Page",
      description:
        "A personal CV / resume page built with HTML. Clean and professional layout for showcasing education, skills, and experience.",
      image: cvImg,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Muhammadsafiktk/CV-safi",
      webapp: "https://saficv11.netlify.app/",
    },
    {
      id: 9,
      title: "Multi-page HTML Site",
      description:
        "A multi-page static website built with HTML. Demonstrates navigation between pages and basic site structure.",
      image: multipageImg,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Muhammadsafiktk/MultipageHTML-Safi",
      webapp: "https://multipagesafi.netlify.app/",
    },
  ];  