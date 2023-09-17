import IHDM_Image from "assets/images/Ihdm_image.png";
import IGPCM_Image from "assets/images/igpcm_image.png";
import SimplifyBlog_Image from "assets/images/simplifyBlog_image.png";
import SimpuGo_Image from "assets/images/SimpuGo_image.png";

export const experience_data = [
  {
    title: "Lead Mobile Engineer",
    description:
      "My responsibilities at Simpu Inc, include supporting the entire application development lifecycle, producing functional mobile apps with clean code, conducting testing, troubleshooting and optimizing performance, designing user interfaces for better user experiences, researching and proposing new mobile technologies, staying updated on tech trends, fixing bugs, and making recommendations for improvements.",
    company: "Simpu Inc",
    location: "San Francisco, CA",
    from: "May,2022",
    to: "Present",
  },
  {
    title: "Front-End Developer/Customer Success Engineer",
    description:
      "Building and management of the Simplify Blog, overseeing codebase management and deployment, addressing customer-generated technical requests or issues through ticket resolution, troubleshooting both technical and process-related issues to ensure sustained productivity, and ensuring system functionality through rigorous testing.",
    company: "Mercator Technologies Ltd",
    location: "2nd Floor, The Garnet Building, Lekki Lagos",
    from: "October, 2019",
    to: "May, 2022",
  },

  {
    title: "Network Administrator(Intern)",
    description:
      "As a system administrator at UPSL, my duties includes monitoring scheduled tasks, ensuring accurate computer output, performing data backups, updating firmware and security measures, managing Microsoft Active Directory, configuring and maintaining various security systems, and assisting with software upgrades and installations to ensure the smooth and secure operation of IT systems.",
    company: "Unified Payment Services Limited",
    location: "3, Idowu Taylor,Victoria Island Lagos",
    from: "October, 2019",
    to: "May, 2018",
  },
];

export const education_data = [
  {
    title: "Mobile Web Specilist(MWS)",
    description: "",
    company: "Google Africa Developer Scholarship",
    location: "",
    from: "",
    to: "2021",
  },
  {
    title: "BSc(Hons) Computer Science.",
    description: "",
    company: "Federal University Gashu’a,",
    location: "Yobe State. Nigeria",
    from: "",
    to: "2019",
  },
  {
    title: "Cisco Certified Network Associate(CCNA)",
    description: "",
    company: "Deft-Rains Solutions Nigeria",
    location: "Lagos State. Nigeria",
    from: "",
    to: "2015",
  },
  {
    title: "National Diploma(Computer Engineering)",
    description: "",
    company: "Lagos State Polytechnic",
    location: "Lagos State. Nigeria",
    from: "",
    to: "2013",
  },
];

export const TechStack = {
  HTML: "html",
  CSS: "css",
  JAVASCRIPT: "javascript",
  NODEJS: "NodeJs",
  TYPESCRIPT: "typescript",
  REACTJS: "ReactJS",
  REACTNATIVE: "ReactNative",
  ELECTRON: "ElectronJS",
  ANGULAR: "AngularJS",
  TAILWIND: "TailwindCss",
  GIT: "Git",
  MONGODB: "Mongo DB",
  JEST: "Jest (Testing)",
  FIREBASE: "Firebase",
};

export const TeckStack = [
  {
    name: TechStack.HTML,
  },
  {
    name: TechStack.CSS,
  },
  {
    name: TechStack.TAILWIND,
  },
  {
    name: TechStack.JAVASCRIPT,
  },
  {
    name: TechStack.TYPESCRIPT,
  },
  {
    name: TechStack.REACTJS,
  },
  {
    name: TechStack.REACTNATIVE,
  },
  {
    name: TechStack.ELECTRON,
  },
  {
    name: TechStack.ANGULAR,
  },
  {
    name: TechStack.NODEJS,
  },
  {
    name: TechStack.GIT,
  },
  {
    name: TechStack.MONGODB,
  },
  {
    name: TechStack.JEST,
  },
  {
    name: TechStack.FIREBASE,
  },
];

export const ProjectType = {
  WEB: "web",
  MOBILE: "mobile",
  DESKTOP: "desktop",
};
export const Project_data = [
  {
    type: ProjectType.MOBILE,
    name: "SimpuGO",
    projectImage: SimpuGo_Image,

    description:
      "Simpu is the all-in-one communication platform for your teams' and customer interaction needs from email, social media, SMS to Live chat.",
    repo: "",
    link: "https://play.google.com/store/apps/details?id=co.simpu.inbox",
    technologies: ["React-Native", "React-Query", "UI-kitten", "Firebase"],
  },
  {
    type: ProjectType.MOBILE,
    name: "DailyTask",
    projectImage:
      "https://twproject.com/blog/wp-content/uploads/how-to-manage-project-integration.png",
    description:
      "Daily Task is a close replica of google task, with more features such as nested List.",
    repo: "",
    link: "https://ihdm.org/",
    technologies: ["React-Native", "Firebase"],
  },
  {
    type: ProjectType.WEB,
    name: "IHDM Portal",
    projectImage: IHDM_Image,
    description: "Registration portal",
    repo: "https://github.com/tdammy92/ihdm-web",
    link: "https://ihdm.org/",
    technologies: ["ReactJS", "MaterialUI", "Node/StrapiJs", "MongoDb"],
  },
  {
    type: ProjectType.WEB,
    name: "IGPCM Portal",
    projectImage: IGPCM_Image,
    description: "Registration portal",
    repo: "https://github.com/tdammy92/ipcm-web",
    link: "https://igpcm.org.ng/",
    technologies: ["ReactJS", "MaterialUI", "NodeJs", "MongoDb", "Cloudinary"],
  },
  {
    type: ProjectType.MOBILE,
    name: "FugaGpa",
    projectImage:
      "https://twproject.com/blog/wp-content/uploads/how-to-manage-project-integration.png",
    description:
      "FugaGpa is a mobile app for student of the federal university gashua, which serves as a guild to many things on campus like GPA calculation, Time table, Library etc.",
    repo: "https://github.com/tdammy92/FugaApp",
    link: "https://drive.google.com/file/d/1h0soxyODfMDt9tnlkgIMTTcaCzTaRS8I/view?usp=sharing",
    technologies: ["React-Native"],
  },
  {
    type: ProjectType.WEB,
    name: "Simplify Blog",
    projectImage: SimplifyBlog_Image,
    description: "Registration portal",
    repo: "",
    link: "https://simplifyblog.netlify.app/",
    technologies: ["GatsbyJS", "CSS", "Node/StrapiJs", "MongoDb", "Cloudinary"],
  },
  {
    type: ProjectType.DESKTOP,
    name: "Tic Tac Toa (XandO)",
    projectImage:
      "https://twproject.com/blog/wp-content/uploads/how-to-manage-project-integration.png",
    description:
      "XandO popularly known as Tic Tac Toe Electron-react App for Desktop PC/Mac and linux",
    repo: "https://github.com/tdammy92/XandO",
    link: "https://simplifyblog.netlify.app/",
    technologies: ["ElectronJS", "CSS"],
  },
];
