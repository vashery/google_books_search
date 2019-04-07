import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Link from "react-router-dom/Link"
import Bnav from "react-bootstrap/Nav"

function Nav() {
  return (
    <Navbar>
      <Link to="/searchbooks">Search</Link>
      <Bnav.Link href="#"></Bnav.Link>
      <Link to="/savedbooks">Saved</Link>
    </Navbar>
  );
}

export default Nav;
