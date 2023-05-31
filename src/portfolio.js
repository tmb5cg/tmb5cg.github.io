const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://tmb5cg.github.io",
  title: "Tucker Bendix",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Tucker Bendix",
  role: "Full Stack / Cloud Engineer",
  description:
    "Cloud automation enthusiast, currently working in healthcare tech. Building random cool stuff in my free time",
  resume:
    "https://drive.google.com/file/d/1We3NbY5qpcpjZ2DOFCflb5BDh9WE905O/view?usp=sharing",
  social: {
    linkedin: "https://linkedin.com/in/tucker-bendix/",
    github: "https://github.com/tmb5cg",
  },
};

const autocropper = {
  // all the properties are optional - can be left empty or deleted
  title: "Autocropper",
  description:
    "This tool automatically extracts individual cropped photos from your uploaded photo.",
  subhead: "",
  social: {
    linkedin: "https://linkedin.com/in/tucker-bendix/",
    github: "https://github.com/tmb5cg",
  },
};

const autobid = {
  // all the properties are optional - can be left empty or deleted
  title: "FIFA Autobidder",
  description:
    "The only open-source FIFA trading bot and framework in existence. Available since 2020.",
  subhead: "",
  social: {
    linkedin: "https://linkedin.com/in/tucker-bendix/",
    github: "https://github.com/tmb5cg",
  },
};

const projects = [
  {
    name: "Autocropper.io",
    description:
      "Automatically crop scanned photos in one pass - multiple photos in a single scan. The best way to scan a lot of photos.",
    stack: [
      "React",
      "NextJS",
      "Python",
      "AWS Amplify",
      "AWS Lambda",
      "Auth",
      "OpenCV",
    ],
    sourceCode: "https://github.com/tmb5cg/autocropper.io",
    livePreview: "https://www.autocropper.io",
  },
  {
    name: "FIFA Autobidder",
    description:
      "Python trading bot that farms in game currency on FIFA 22 Ultimate Team's transfer market. User friendly GUI, configurable settings, advanced logging and performance monitoring, robust error reporting. Open source.",
    stack: [
      "Python",
      "Javascript",
      "React/NextJS/Electron",
      "AWS Amplify",
      "GraphQL",
      "REST APIs",
    ],
    sourceCode: "https://github.com/tmb5cg/Fifa-Autobidder",
    livePreview: "https://www.futbidder.io/",
  },
  {
    name: "Grocery Lister",
    description:
      "Simple website that lets you enter multiple recipe URLs and fetches ingredients into an aggregated grocery list. Built in React and Python, uses pre-trained natural language processing model to interpret and structure ingredients",
    stack: ["React", "Python", "Javascript", "Python"],
    sourceCode:
      "https://github.com/tmb5cg/tmb5cg.github.io/tree/main/src/components/GroceryLister",
    livePreview: "/groceries",
  },
  {
    name: "FreeTimeFinder",
    description:
      "Finds free meeting times by date and shared calendars via Google OAuth + GCal API",
    stack: ["React", "Google OAuth", "Google Calendar API"],
    sourceCode:
      "https://github.com/tmb5cg/tmb5cg.github.io/tree/main/src/components/FreeTimeFinder",
    livePreview: "/freetimefinder",
  },
  {
    name: "BendixLaw.com",
    description: "Personal injury lawyer website.",
    stack: ["React", "Google Analytics", "GA5", "HTML", "CSS"],
    sourceCode: "https://github.com/tmb5cg",
    livePreview: "https://bendixlaw.com",
  },

  {
    name: "ConEd API",
    description:
      "Home Assistant add on that logs energy consumption by listening to ConEd user portal",
    stack: ["Python", "Docker", "JavaScript"],
    sourceCode: "https://github.com/tmb5cg/home-assistant-addons/tree/main/oru",
    livePreview:
      "https://github.com/tmb5cg/home-assistant-addons/tree/main/oru",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "Python",
  "React",
  "NextJS",
  "AWS (EC2/S3/Lambda/CloudWatch/etc)",
  "JavaScript",
  "Node.js",
  "REST/GraphQL APIs",
  "HTML",
  "CSS",
  "Git",
  "SQL",
  "Docker",
  "CI/CD",
  "Visual Studio Code",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "tuckerbendix@icloud.com",
};

export { header, autocropper, about, projects, skills, contact, autobid };
