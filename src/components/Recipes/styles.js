import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
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
    paddingTop: "110%",
  },
  page: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
