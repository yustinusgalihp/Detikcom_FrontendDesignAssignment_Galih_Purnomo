import React from "react";
import imgNavbar from "../assets/img/navbar-brand.png";

function Navbar() {
  return (
    <nav className="navbar navbar-custom navbar-expand-lg bg-navbar-top pt-3 fixed-top">
      <div className="container bg-menu rounded-5">
        <img src={imgNavbar} alt="" />
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#link">
                Tentang Acara
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Galeri
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Berita
              </a>
            </li>
            <button className="rounded-5 px-4 navbar-btn">Register</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
