import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';

const NavBar = () => {
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            flexDirecton: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#000",
          }}
        >
          <MenuBookIcon />

          <Typography>My Reading List</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
