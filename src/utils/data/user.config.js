import ResumePDF from "./cv_ver1.pdf";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";

const user = {
  firstName: "Dawid",
  lastName: "Olko",
  userImage: default_avatar,
  resume: ResumePDF,
  email: "poczta@dawidolko.pl",
  linkedIn: "in/dawidolko",
  gitHub: "dawidolko",
  aboutMe: {
    intro: " I'm a Fullstack / AI Developer from Rzeszów, Poland.",
    description:
      "I hold a BEng in Computer Science from the University of Rzeszów, and my MSc is in progress. I build web applications end to end and tools for working with AI coding agents.",
    outro: "I'm a co-creator of Skribly.",
  },
  education: [
    {
      instituteName: "University of Rzeszów",
      degree: "MSc in Computer Science",
      year: "2026 - present",
      id: 1,
    },
    {
      instituteName: "University of Rzeszów",
      degree: "BEng in Computer Science",
      year: "2022 - 2026",
      id: 2,
    },
  ],
  projects: [
    {
      projectName: "Skribly",
      description: "Co-creator. https://skribly.pl",
      madeWith: ["Electron", "Laravel", "TypeScript"],
      link: "https://skribly.pl",
    },
  ],
  skills: [
    {
      name: "Language Proficiency",
      values: [
        "Python",
        "Java",
        "JavaScript",
        "ReactJS",
        "Firebase",
        "HTML",
        "CSS",
      ],
    },
    {
      name: "Tools Proficiency",
      values: ["Git", "PyCharm", "Eclipse", "IntelliJ IDEA", "Postman"],
    },
    {
      name: "Database Proficiency",
      values: ["MySQL", "MongoDB", "Firestore"],
    },
  ],
};

export default user;
