import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
const headerCSS = {
  // background: "#5cb85c",
  color: "#5cb85c",
};
const Header = (props) => {
  return (
    <Navbar light container="sm">
      <NavbarBrand
        href="/"
        className="mb-0 fs-5 bold fw-bold"
        // cssModule={headerCSS}
        tag="p"
        style={headerCSS}
      >
        {props.appName}
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
