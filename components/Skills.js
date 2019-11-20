import WordCloud from "react-d3-cloud";
import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Heading from "./Heading";

const data = [
  { text: "Leadership", value: 40 },
  { text: "Engineering", value: 40 },
  { text: "Product Market Fit", value: 40 },
  { text: "Startups", value: 30 },
  { text: "Architecture", value: 30 },
  { text: "Distributed Systems", value: 30 },
  { text: "Python", value: 30 },
  { text: "CI/CD", value: 20 },
  { text: "AWS", value: 30 },
  { text: "Open Source", value: 30 },
  { text: "Infrastructure", value: 30 },
  { text: "DevOps", value: 30 },
  { text: "Test Automation", value: 20 },
  { text: "Kubernetes", value: 15 },
  { text: "Javascript", value: 10 },
  { text: "Nodejs", value: 10 },
  { text: "HTML5", value: 10 },
  { text: "CSS", value: 10 },
  { text: "MongoDB", value: 10 }
];

const SimpleCloud = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <WordCloud
      data={data}
      padding={3}
      height={matches ? 300 : 600}
      width={matches ? 900 : 300}
      font={theme.typography.fontFamily}
    />
  );
};

export default function Skills() {
  return (
    <Container>
      <Heading title="Skills" />
      <SimpleCloud />
    </Container>
  );
}
