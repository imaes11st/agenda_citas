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
      <img src={logo} className={classes.logo} />
      <div className={classes.center}>
        <InputBase
          fullWidth
          placeholder="Busca en la entidad"
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
    backgroundColor: "#fff",
    zIndex: 99,
    width: "100vw",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "30px",
    margin: theme.spacing(1, 0, 0, 2),
    objectFit: "contain",
  },
  center: {
    display: "flex",
    alignItems: "center",
    border: "1px solid lightgray",
    borderRadius: "999px",
    minWidth: "300px",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  input: {
    fontSize: "2rem",
    padding: theme.spacing(1, 5, 1, 5),
  },
  right: {
    color: "##F50002",
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
}));

export default Header;
