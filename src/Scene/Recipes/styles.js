import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    height: "10%",
    width: "100%",
  },
  body: {
    height: "auto",
    width: "100%",
  },
  bottom: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    minHeight: "5rem",
  },
}));

export default useStyles;
