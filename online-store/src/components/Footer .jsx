//imports section
import React from "react";
import "./Footer.css";

//logic section
function Footer() {
  //this is the footer component of the application
  const year= new Date().getFullYear();
  //this will get the current year
  return (
    <footer className="footer">
      <p>{year} Trans community against Hate. all rights resevered</p>
      <p> Made with love By patrick Lewis </p>
    </footer>
  );
}
//Export section
export default Footer;
