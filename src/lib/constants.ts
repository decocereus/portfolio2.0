export const EXPERIENCE = {
  "02/24": {
    company: "GAMP (previously Aura)",
    website: "https://gamp.gg/",
    from: "Feb 2024",
    to: "Current",
    designation: "Frontend Engineer 2",
    location: "Remote",
    tasks:
      "Building new features to provide users more customization and better usability. Optimizing the performance of the application by leveraging Server Side Rendering and partial rendering to provide the best user experience. Collaborating with designers and other engineers to build pixel perfect UI and come up with best possible solutions.",
    tech: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Telegram Mini App",
      "Solidity",
      "Embedded Wallets",
      "Smart Contracts",
    ],
  },
  "08/23": {
    company: "Mojoboxx",
    website: "https://mojoboxx.com/",
    from: "Aug 2023",
    to: "Feb 2024",
    designation: "Full Stack Developer",
    location: "Gurugram, India",
    tasks:
      "Crafted an online hotel booking platform from scratch in partnership with Cleartrip. Devised 20+ responsive, mobile first screens, significantly enhancing the UX. Integrated third-party APIs like Google Maps, Paytm, & Cleartrip. Collaborated with marketing team to bring new ideas to life. Optimized data fetching from third-party APIs to reduce load times.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Mysql",
      "HTML/CSS",
      "Javascript",
    ],
  },
  "07/2022": {
    company: "Amadeus",
    website: "https://amadeus.com/en",
    from: "July 2022",
    to: "May 2023",
    designation: "Software Engineer Graduate",
    location: "London, United Kingdom",
    tasks:
      "Developed crucial features for the various airlines. Collaborated with Product manager to refine the scope of current features, and build them. Enabled selective features for airlines by utilizing feature flag architecture. Worked with designers to provide the intuitive application design to airport agents.",
    tech: ["Swift", "SwiftUI", "Objective-C", "UiKit"],
  },
  "06/2021": {
    company: "CSRN",
    website: "https://csrn.org.uk/",
    from: "June 2021",
    to: "August 2021",
    designation: "Software Engineer Intern",
    location: "London, United Kingdom",
    tasks:
      "Conceptualized a new project management platform which can be used by the organization for various upcoming projects.",
    tech: ["React.js", "MongoDb", "HTML/CSS", "Javascript"],
  },
};

export const PROJECTS = {
  "001": {
    name: "Git Receipts",
    link: "https://gitreceipts.vercel.app/",
    image: "/git-receipt.png",
    description:
      "Built a github contribution generator which fetches data from Github after user is authenticated via NextAuth. Generates a comprehensive contribution chart served in a receipt style.",
    tech: ["Next.js", "Typescript", "GraphQL", "OctoBot", "NextAuth"],
  },
  "003": {
    name: "Resume Builder",
    link: "https://easy-resumes.vercel.app/",
    image: "/resume-builder.png",
    description:
      "Generate your own resume in one of my favourite resume templates.",
    tech: ["Next.js", "Typescript", "PDF Generator"],
  },
  "004": {
    name: "Fitness Tracker",
    link: "https://gamp-fitness.vercel.app/",
    image: "/fitness.png",
    description:
      "A simple Fitness tracker with an option to start a challenge and compete with others on a leaderboard",
    tech: ["Next.js", "Typescript", "PostgresSQL", "Server Routes"],
  },
  "005": {
    name: "Visited",
    link: "https://visited-client.vercel.app/",
    image: "/visited.png",
    description:
      "A simple web app which works in conjunction with a chrome extension to track and display public URLs visited by the user. A Google Auth session is shared between the web app and the chrome extension.",
    tech: ["Next.js", "Typescript", "Node.js", "Vercel Postgres"],
  },
};

export const SOCIALS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/amartyasingh07/" },
  { name: "Twitter", url: "https://twitter.com/decocereus" },
  { name: "GitHub", url: "https://github.com/decocereus" },
];

export const RESUME_URL =
  "https://drive.google.com/file/d/172ZNhmd03sRLCVdggWSEtRHPhjQOAgcU/view?usp=sharing";

export const SKILLS = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Node.js",
  "Blockchain",
  "Solidity",
  "Python",
];

export const SKILL_TREE = {
  frontend: {
    name: "Frontend",
    skills: [
      { name: "Next.js", level: "expert" },
      { name: "React.js", level: "expert" },
      { name: "TailwindCSS", level: "expert" },
    ],
  },
  backend: {
    name: "Backend",
    skills: [
      { name: "Node.js", level: "advanced" },
      { name: "Express.js", level: "advanced" },
      { name: "PostgreSQL", level: "advanced" },
    ],
  },
  web3: {
    name: "Web3",
    skills: [
      { name: "Solidity", level: "intermediate" },
      { name: "Smart Contracts", level: "intermediate" },
      { name: "Blockchain", level: "intermediate" },
    ],
  },
  mobile: {
    name: "Mobile",
    skills: [
      { name: "Telegram Mini App", level: "intermediate" },
      { name: "SwiftUI", level: "intermediate" },
      { name: "React Native", level: "beginner" },
    ],
  },
};
