import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  intro: {
    height: "10rem",
    maxWidth: "40rem",
    margin: " 2rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cards: {
    backgroundColor: theme.palette.background.default,
    margin: theme.spacing(3),
  },
  media: {
    height: 0,
    // paddingTop: "56.25%", // 16:9
    paddingTop: "110%", // 16:9
  },
}));

export default useStyles;
