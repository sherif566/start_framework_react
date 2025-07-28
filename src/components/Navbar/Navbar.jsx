import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
          <nav className="navbar navbar-expand-lg p-4">
        <div className="container-fluid d-flex justify-content-around align-items-center">
          <Link className="navbar-brand me-5 text-white fs-1 fw-bold" to="/">
            Start Framework
          </Link>
          <ul className="navbar-nav d-flex mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active me-5 text-white fs-5 fw-bold" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link text-white fs-5 fw-bold"  to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link text-white fs-5 fw-bold"  to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
