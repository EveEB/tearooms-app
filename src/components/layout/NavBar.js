import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <ul className="nav-bar-list">
          <li>
            <Link to="/tearooms-app/Home">Home</Link>
          </li>
          <li>
            <Link to="/OurStory">Our Story</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/tearooms-app/MeetTheTeam">Meet the Team</Link>
          </li>
          <li>
            <Link to="/Book">Book a Table</Link>
          </li>
          <li>
            <Link to="/Order">Order</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
