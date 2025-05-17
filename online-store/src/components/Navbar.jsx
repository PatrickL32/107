//import
import React from "react"; // good practice to import react
import "./Navbar.css";

//Logic
function Navbar() {
return (
    <nav className="Navbar">
    <div className="Navbar-brand"></div>
    <div className="Navbar-menu"></div>
    <a href="/" className="Navbar-item">
        Home
    </a>
    <a href="/Products" className="Navbar-item">
        Products
    </a>
    <a href="/catalog" className="Navbar-item">
        About
    </a>
    </nav>
);
}

// export default function Navbar() {
export default Navbar;
