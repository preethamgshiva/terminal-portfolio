import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "TARS Web",
    desc: "An AI-powered assistant inspired by Interstellar’s TARS, built using LangChain, Ollama, and React. Includes PDF upload and explain feature.",
    url: "https://github.com/preethamgshiva/T.A.R.S-Web", // replace with your repo link
  },
  {
    id: 2,
    title: "SurakshaPath",
    desc: "A location safety classifier using AI that predicts whether an area is safe or unsafe based on news headlines. Finalist in a national level hackathon.",
    url: "https://github.com/preethamgshiva/surakshapath", // replace with your repo link
  },
  {
    id: 3,
    title: "FixIt",
    desc: "A MERN stack platform where users can upload issues with images and geotags, and admins can manage them. Includes authentication and image storage.",
    url: "https://github.com/preethamgshiva/fixit", // replace with your repo link
  },
  {
    id: 4,
    title: "Brain Tumor Detection",
    desc: "A deep learning model that detects brain tumors from MRI scans using CNNs with high accuracy.",
    url: "https://github.com/preethamgshiva/Brain-tumor-Detection", // replace with your repo link
  },
  {
    id: 5,
    title: "Email Spam Detection",
    desc: "A machine learning model that classifies emails as spam or not spam using NLP techniques and feature engineering.",
    url: "https://github.com/preethamgshiva/SMS-E-Mail-Spam-Detector", // replace with your repo link
  },
];

export default Projects;
