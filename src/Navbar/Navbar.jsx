import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Serena Han</h1>
        <div className="info-bar">
          <p className="info-item">serenahan@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
            className={"info-link"}
            to={{ pathname: "https://instagram.com/ser6nah" }}
            target="_blank"
          >
            Instagram
          </Link>
          <Link 
            className={"info-link"}
            to={{ pathname: "https://www.facebook.com/ser6nah/" }}
            target="_blank"
          >
            Facebook
          </Link>
          <Link 
            className={"info-link"}
            to={{ pathname: "https://linkedin.com/serena-hah" }}
            target="_blank"
          >
            LinkedIn
          </Link>
          
        </div>
      </div>
      <div className="nav-background">
        <Link className="nav-link" to={{pathname: '/about' }}>About</Link>
        <Link className="nav-link" to={{pathname: '/education/' }}>Education</Link>
        <Link className="nav-link" to={{pathname: '/experience' }}>Experience</Link>
        <Link className="nav-link" to={{pathname: '/projects' }}>Projects</Link>
      </div>
    </>
  );
}
