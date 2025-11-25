import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    document.querySelector(`#${id}`).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleClick("home")}>
          RoneyPalaceCondos
        </div>

        <ul className="nav-links">
          <li
            className={active === "info" ? "active" : ""}
            onClick={() => handleClick("info")}
          >
            About
          </li>
          <li
            className={active === "sale" ? "active" : ""}
            onClick={() => handleClick("sale")}
          >
            For Sale
          </li>
          <li
            className={active === "rent" ? "active" : ""}
            onClick={() => handleClick("rent")}
          >
            For Rent
          </li>
          <li
            className={active === "contact" ? "active" : ""}
            onClick={() => handleClick("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
