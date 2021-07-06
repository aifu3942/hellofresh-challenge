import { makeStyles } from "@material-ui/core/styles";
import Img from "../../Assets/background-img.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "40rem",
    margin: theme.spacing(0),
    backgroundImage: `url(${Img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  buttons: {
    height: "4rem",
    width: "15rem",
    backgroundColor: theme.palette.background.default,
    fontSize: "1.2rem",
  },
}));

export default useStyles;
