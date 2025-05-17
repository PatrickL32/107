//imports section
import React from "react";
import "./Footer.css";

//logic section
function Footer() {
  //this is the footer component of the application
  const year= new Date().getFullYear();
  //this will get the current year
  return (
    <footer classNane="footer">
      <p>{year} Organika. all rights resevered</p>
      <p> Made with love By patrick Lewis </p>
    </footer>
  );
}
//Export section
export default Footer;
