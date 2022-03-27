import React from "react";
import { AppBar, Toolbar } from "@mui/material";

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
            backgroundColor: "",
          }}
        >
          This is a toolbar
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
