import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  load: {
    padding: theme.spacing(10),
    color: theme.palette.common.black,
    alignItems: "center",
  },
  header: {
    height: "10%",
    width: "100%",
  },
  body: {
    height: "auto",
    width: "100%",
    backgroundColor: theme.palette.background.default,
  },
  box: {
    margin: theme.spacing(3),
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-start",
  },
  detailimg: {
    minWidth: "50%",
    marginRight: theme.spacing(3),
  },
  info: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
  },
  lines: {
    marginTop: "1rem",
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    alignContent: "flex-start",
  },
  ingredients: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
}));

export default useStyles;
