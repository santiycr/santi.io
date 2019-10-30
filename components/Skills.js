import Typography from "@material-ui/core/Typography";
import WordCloud from "react-d3-cloud";
import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const data = [
  { text: "Leadership", value: 100 },
  { text: "Engineering", value: 100 },
  { text: "Entrepreneurship", value: 80 },
  { text: "Startups", value: 80 },
  { text: "Enterprise", value: 20 },
  { text: "Architecture", value: 20 },
  { text: "Distributed Systems", value: 50 },
  { text: "Python", value: 60 },
  { text: "CI/CD", value: 60 },
  { text: "AWS", value: 60 },
  { text: "Test Automation", value: 60 },
  { text: "Open Source", value: 60 },
  { text: "Infrastructure", value: 50 },
  { text: "DevOps", value: 50 },
  { text: "Nameko", value: 30 },
  { text: "Kubernetes", value: 30 },
  { text: "Javascript", value: 20 },
  { text: "React", value: 10 },
  { text: "Nodejs", value: 10 },
  { text: "HTML5", value: 10 },
  { text: "CSS", value: 5 },
  { text: "MongoDB", value: 20 }
];

const fontSizeMapper = word => Math.log2(word.value ^ 2) * 6;

const SimpleCloud = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <WordCloud
      data={data}
      fontSizeMapper={fontSizeMapper}
      padding={3}
      height={matches ? 300 : 600}
      width={matches ? 900 : 300}
    />
  );
};

export default function Skills() {
  return (
    <Container>
      <Typography variant="h5" component="h2">
        Skills
      </Typography>
      <SimpleCloud />
    </Container>
  );
}
