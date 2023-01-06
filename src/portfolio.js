const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://tmb5cg.github.io",
  title: "Tucker Bendix",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Tucker Bendix",
  role: "Software Engineer",
  description: "UVA Computer Science grad",
  resume:
    "https://drive.google.com/file/d/1dOo5c8xfRUPXu1BlCYPOKlaKQgQbAtIm/view?usp=sharing",
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

const ftf = {
  // all the properties are optional - can be left empty or deleted
  title: "Free Time Finder",
  description:
    "This tool automatically finds and lists free times via Google Calendar API.",
  subhead: "",
  social: {
    linkedin: "https://linkedin.com/in/tucker-bendix/",
    github: "https://github.com/tmb5cg",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Autocropper.io",
    description:
      "Automatically crop scanned photos in one pass - multiple photos in a single scan. The best way to scan a lot of photos. www.autocropper.io",
    stack: ["React", "Python", "OpenCV", "Heroku"],
    sourceCode: "https://github.com/tmb5cg/autocropper.io",
    livePreview: "https://www.autocropper.io",
  },
  {
    name: "FIFA Autobidder",
    description:
      "Selenium bot that autobids and autobuys players on FIFA 22 Ultimate Team's transfer market. User configurable settings, advanced logging and performance monitoring, robust error reporting. Open source.",
    stack: ["Python", "Javascript", "Google Sheets API"],
    sourceCode: "https://github.com/tmb5cg/Fifa-Autobidder",
    livePreview: "/autobidder",
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
    name: "InstaBot",
    description:
      "Instagram bot that scrapes memes from r/programmerhumor and posts to @dankcsmemes ",
    stack: ["Python"],
    sourceCode: "https://github.com/tmb5cg",
    livePreview: "https://instagram.com/dankcsmemes",
  },
  {
    name: "Monkeypox Vaccine Appointment Finder",
    description:
      "Scrapes NYS vaccine appointment portal and alerts updates via SMS",
    stack: ["Python"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "ConEd API",
    description: "Logs energy usage by listening to ConEd user portal",
    stack: ["Python"],
    sourceCode: "https://github.com/tmb5cg/home-assistant-addons/tree/main/oru",
    livePreview: "https://github.com",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "Python",
  "JavaScript",
  "React",
  "NextJS",
  "PostgreSQL",
  "SQL",
  "HTML",
  "CSS",
  "Git",
  "CI/CD",
  "Visual Studio Code",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "tuckerbendix@icloud.com",
};

export { header, autocropper, about, projects, skills, contact, autobid, ftf };
