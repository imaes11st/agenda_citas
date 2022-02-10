import { AppBar, Toolbar, Typography, Avatar, InputBase } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import logo from "../images/logo2.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Header = () => {
  const [tablet, setTablet] = useState(false);
  const classes = useStyle();

  const displayTablet = () => {};
  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
      <img src={logo} alt="Logo Institucional" className={classes.logo} />
      <div className={classes.center}>
        <InputBase
          fullWidth
          placeholder="Buscar en la entidad"
          inputProps={{ className: classes.input }}
        />
        <SearchOutlinedIcon />
      </div>
      <div className={classes.right}>
        <Typography> Iniciar sesión </Typography>
        <Avatar className={classes.avatar} />
      </div>
    </Toolbar>
  );

  return (
    <AppBar className={classes.root}>
      {tablet ? displayTablet() : displayDesktop()}
    </AppBar>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    zIndex: 2,
    width: "100%",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: "17px",
  },
  logo: {
    height: "45px",
    margin: theme.spacing(1, 0, 0, 2),
    objectFit: "contain",
  },
  center: {
    display: "flex",
    alignItems: "center",
    border: "1px solid lightgray",
    borderRadius: "8px",
    Width: "120%",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    color: "#B0B0B0",
  },
  input: {
    fontSize: "12px",
    padding: theme.spacing(1, 5, 1, 5),
  },
  right: {
    color: "#B0B0B0",
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
}));

export default Header;
