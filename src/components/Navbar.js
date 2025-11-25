import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);

    const section = document.querySelector(`#${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav-container">

        {/* LOGO */}
        <div className="nav-logo" onClick={() => handleClick("home")}>
          RoneyPalaceCondos
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* SINGLE NAV LIST */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li className={active === "info" ? "active" : ""} onClick={() => handleClick("info")}>
            About
          </li>
          <li className={active === "sale" ? "active" : ""} onClick={() => handleClick("sale")}>
            For Sale
          </li>
          <li className={active === "rent" ? "active" : ""} onClick={() => handleClick("rent")}>
            For Rent
          </li>
          <li className={active === "contact" ? "active" : ""} onClick={() => handleClick("contact")}>
            Contact
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
