
import './App.css';
import Common from './Common';
import web from "../src/images/Ecom.webp";

function About() {
  return (
    <>
   <Common
    name="Welcome to About Page"
    imgsrc={web}
    visit="/contact"
    btname="contact Now"
   />

</> 
  );
}

export default About;
