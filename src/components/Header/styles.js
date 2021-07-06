import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  menuLogo: {
    height: "30px",
  },
  btn: {
    fontSize: "1rem",
    fontWeight: "bolder",
  },
}));

export default useStyles;
