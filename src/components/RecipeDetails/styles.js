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
}));

export default useStyles;
