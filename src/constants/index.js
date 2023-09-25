import {
  link,
  applicationTracker,
  rbg,
  finalYear,
  dbms,
  blockBadge,
  gameHub,
  p7,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  iss,
  techskills,
  fox,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Java Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer (Intern)",
    company_name: "Institutional Shareholder Services",
    icon: iss,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "Transformed Figma designs into blazing-fast user interfaces for Proxy Exchange, optimized image storage with Cloudinary, and ensured seamless compatibility across 3 platforms: IOS, Android and Windows.",
      "Engineered, streamlined code for Orbit, accomplished 30% UI improvement and 50% reduction in feedback time.",
      "Orchestrated scalable solutions for Proxy Exchange, handling over 1000 simultaneous users, delivering exceptional UX.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Institutional Shareholder Services",
    icon: iss,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - July 2022",
    points: [
      "Planned SDLC for 3 applications, leveraging Java, Selenium, and TestNG to revamp automation, slashing regression time by 24 hrs.",
      "Innovated API testing with JMeter, quadrupled testing efficiency, automated post-testing tasks with Python and oversaw RESTful API testing with AWS DynamoDB and DocumentDB integration.",
      "Supervised 7 freshers in Selenium, led Automation testing department, and demonstrated expertise in Linux, Git and Ansible.",
      "Excelled in JMeter and Selenium Performance testing ensuring parallel execution of tasks, broadened code coverage up to 90%, deployed on Docker and optimized CI/CD pipelines with Jenkins.",
    ],
  },
  {
    title: "Java Developer (Intern)",
    company_name: "TechSkills IT",
    icon: techskills,
    iconBg: "#383E56",
    date: "Jan 2020 - June 2020",
    points: [
      "Achieved 40% enhanced system efficiency by integrating Spring Boot, J2EE, Hibernate, JPA alongside SOAP and JMS messaging services, leveraging Maven for dependency management, implementing Spring Cloud leading to a 50% surge in service uptime.",
      "Enacted centralized logging (Elasticsearch, Logstash, Kibana) and distributed tracing using Zipkin for efficient monitoring.",
      "Remodeled database operations with PostgreSQL and Oracle DB, resulting in a 30% response time improvement, redesigned robust security using Spring Security, Thymeleaf, and Spring MVC.",
    ],
  },
  // {
  //   title: "Data Analyst (Intern)",
  //   company_name: "Fox Domotics",
  //   icon: fox,
  //   iconBg: "#000000",
  //   date: "Nov 2019 - Dec 2019",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const projects = [
  {
    name: "Job Application Tracker",
    description:
      "This project developed a Job Application Tracker web app using React, TypeScript, and various web technologies. It streamlined job application tracking for over 1000 applications, offered real-time tracking and CSV data export, and eliminated the need for a backend by using local storage, reducing authentication overhead and backend development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: applicationTracker,
    source_code_link:
      "https://6484e458f88be123e1cb1ef9--radiant-duckanoo-c422d4.netlify.app/",
  },
  {
    name: "Game Hub",
    description:
      "This project built a responsive gaming app with React, Chakra UI, and the RAWG API, including dark mode support. It optimized search functionality for 50% faster results and improved accessibility. API testing was done with Postman, and deployment to Vercel was 25% faster.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakraUI",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: gameHub,
    source_code_link: "https://game-hub-l55w37ynu-saahill007.vercel.app/",
  },
  {
    name: "Spirng Boot Micro-Services",
    description:
      "This project designed a microservices architecture with Spring Boot and MongoDB to handle Product, Order, and Inventory services. It implemented fault-tolerant communication using Netflix Eureka, employed Kafka and RabbitMQ for asynchronous communication, and included a Notification Service for simultaneous email notifications to multiple users.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Netflix Eureka",
        color: "pink-text-gradient",
      },
    ],
    image: p7,
    source_code_link: "https://github.com/saahill007/ProductService",
  },
  {
    name: "Color Guessing Game",
    description:
      "I've crafted a captivating RGB color guessing game using HTML, CSS, and JavaScript. Challenge your color perception by matching RGB values to colored squares. With real-time feedback, multiple difficulty levels, and endless fun, it's an engaging addition to my portfolio. Try it out and test your color recognition skills!",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: rbg,
    source_code_link: "",
  },
  // {
  //   name: "Block Badge - Blockchain Application",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: blockBadge,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Covid19 social distancing analyser",
    description:
      "This project develops a web-based AI solution for enforcing COVID-19 safety measures, such as social distancing and mask-wearing. It uses machine learning algorithms to monitor and alert users about rule violations. The system can be integrated into existing CCTV cameras for comprehensive surveillance.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "FireBase",
        color: "pink-text-gradient",
      },
    ],
    image: finalYear,
    source_code_link: "https://ieeexplore.ieee.org/abstract/document/9510051",
  },
  // {
  //   name: "Database Management System",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: dbms,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, projects };
