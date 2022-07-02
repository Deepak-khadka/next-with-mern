import React from "react";
import { Nav, Button } from "react-bootstrap";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-xl">
        <Link href="/">
          <a className="navbar-brand">Deepak Khadka</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07XL">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">
                  Home <span className="sr-only"></span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/restaurant">
                <a className="nav-link">Restaurant</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/user">
                <a className="nav-link">User</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}
