import ResumePDF from "./cv_ver1.pdf";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";
import KloudGin from ".././../assets/images/data/KloudGin.png";

const user = {
  firstName: "Dawid",
  lastName: "Olko",
  userImage: default_avatar,
  resume: ResumePDF,
  email: "poczta@dawidolko.pl",
  linkedIn: "in/dawidolko",
  gitHub: "dawidolko",
  twitter: "dawidolko",
  aboutMe: {
    intro: " I'm a Fullstack / AI Developer from Poland.",
    description:
      "I enjoy taking up complex problems and converting to an usable format. My major domains are Web Development (React / Angular) and Software Development (Java / Python).",
    outro:
      "When I'm not developing any stuff , you will find me re-watching an episode of The Office or exploring a new place.",
  },
  experiences: [
    {
      organization: "-",
      organizationPicture: KloudGin,
      isCurrent: true,
      startDate: "Jun 2019",
      endDate: null,
      positions: [
        {
          positionName: "-",
          startDate: "-",
          endDate: " -",
          isPresent: true,
          description: "-",
        },
        {
          positionName: "--",
          startDate: "--",
          endDate: "--",
          isPresent: false,
          description: "--",
        },
        {
          positionName: "---",
          startDate: "---",
          endDate: "---",
          isPresent: false,
          description: "---",
        },
      ],
    },
  ],
  education: [
    {
      instituteName: "-",
      degree: "-",
      year: "-",
      id: 1,
    },
    {
      instituteName: "--",
      degree: "--",
      year: "--",
      id: 2,
    },
    {
      instituteName: "--",
      degree: "--",
      year: "--",
      id: 3,
    },
  ],
  projects: [
    {
      projectName: "Note",
      description: "-",
      madeWith: ["-", "--", "---", "----"],
      link: "https://github.com/dawidolko/",
    },
    {
      projectName: "Bus Management",
      description: "-",
      madeWith: ["-", "--", "---"],
      link: "https://github.com/dawidolko/",
    },
    {
      projectName: "Seat Swapper",
      description: "-",
      madeWith: ["Java", "MySQL", "BlockChain", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/dawidolko/",
    },
    {
      projectName: "Flight Ticket Saver",
      description: "-",
      madeWith: ["Python", "DJANGO", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/dawidolko/",
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
