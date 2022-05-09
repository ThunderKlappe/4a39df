import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontSize: 14,
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  photoMessageMult: {
    height: 75,
    margin: 5,
  },
  photoMessageText: {
    height: 100,
  },
  photoMessageNoText: {
    height: 100,
  },
}));

export const useBaseClasses = () => {
  const classes = useStyles();
  return classes;
};
