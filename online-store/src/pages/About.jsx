//import section
import { useState } from "react";
import Navbar from "../components/Navbar";

//function section
function About() {
const[isVisible, setIvisible] =useState(false);
const [studentName, setstudentName] =useState("Partick Lewis");

console.log("About page");

return (
<div>
    <Navbar />

        <h1>{studentName}</h1>

        
        { isVisible==true?<h5> Jedi.92.lewis@gmail.com</h5>:<lable>Click the button to see my email</lable>}
    </div>
    );
}

//export section
export default About;
