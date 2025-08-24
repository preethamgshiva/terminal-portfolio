import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Preetham G Shiva</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in
        Bengaluru, Karnataka, India.
      </p>
      <br />
      <p>
        Full Stack Developer skilled in MERN, Next.js, and AI integration, with
        experience delivering production-ready apps and AI-powered solutions.
        Finalist in national hackathon (SurakshaPath). Seeking internships to
        apply scalable full-stack and AI solutions in real-world environments.
      </p>
    </AboutWrapper>
  );
};

export default About;
