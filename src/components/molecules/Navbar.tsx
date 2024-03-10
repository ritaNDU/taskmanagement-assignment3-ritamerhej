import { Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-3 px-5 shadow-md sticky top-0 bg-white z-10 w-screen">
      <div className="logo w-fit">
        <Typography variant="h4" component="h1">
          PLANIFY
        </Typography>
        <Typography component="p">Start your day the right way</Typography>
      </div>
    </nav>
  );
};

export default Navbar;
