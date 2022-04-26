import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../assets/bg-img.png";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100vh",
  },
  sideImage: {
    width: "calc(425/700 * 100vh)",
    backgroundSize: "cover",
    background: [
      "linear-gradient(180deg, rgba(58, 141, 255, .85) 0%, rgba(134, 185, 255, .85) 100%)",
      `url(${bgImg}) no-repeat`,
    ],
    backgroundBlendMode: "normal",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px 0",
    gap: "5vh",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  topContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "-webkit-fill-available",
    fallbacks: { width: "-moz-available" },
  },
  topWrapper: {
    display: "flex",
    gap: 30,
    margin: "30px 42px",
    alignItems: "center",
    "& a": {
      width: 170,
    },
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "65%",
    flex: 1,
  },
  mainWrapper: {
    width: "100%",
  },
  submitContainer: {
    justifyContent: "center",
    padding: "42px 0",
    "& button": {
      width: 160,
    },
  },
  bubbleImage: {
    height: "10vh",
  },
  largeText: {
    fontSize: "1.625em",
  },
  titleText: {
    width: "60%",
    fontWeight: 400,
    color: "white",
    textAlign: "center",
  },
  headerText: {
    fontWeight: 600,
    marginBottom: 17,
  },
  instructionText: {
    color: "#B0B0B0",
    fontSize: ".875em",
  },
  forgotLink: {
    textDecoration: "none",
    color: "#3A8DFF",
    fontWeight: 600,
    fontSize: 12,
  },
}));

export const useClasses = () => {
  const classes = useStyles();
  return classes;
};
