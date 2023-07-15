import React from "react";
import { NavBar, Search } from "./index";

const Header = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <NavBar />
      <Search />
    </div>
  );
};

export default Header;
