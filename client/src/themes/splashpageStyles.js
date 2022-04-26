import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../assets/bg-img.png";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100vh",
  },
  sideImage: {
    height: "calc(425/700 * 100vw)",
    width: "calc(425/700 * 100vh)",
    backgroundSize: "100% auto",
    background: [
      "linear-gradient(180deg, rgba(58, 141, 255, .85) 0%, rgba(134, 185, 255, .85) 100%)",
      `url(${bgImg})`,
    ],
    backgroundBlendMode: "normal",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
  },
  registerContainer: {
    display: "flex",
    gap: 30,
  },
  bubbleImage: {
    height: "10%",
    marginTop: "25vh",
    marginBottom: "5vh",
  },
  titleText: {
    width: "60%",
    fontSize: "3.5vh",
    color: "white",
    textAlign: "center",
  },
  headerText: {
    fontSize: "3.5vh",
    fontWeight: 600,
  },
  switchText: {
    color: "#B0B0B0",
    fontSize: 14,
  },
}));

export const useClasses = () => {
  const classes = useStyles();
  return classes;
};
