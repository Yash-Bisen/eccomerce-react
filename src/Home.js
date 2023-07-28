
import './App.css';
import Common from './Common';
import web from "../src/images/Ecom.webp";

function Home() {
  return (
    <>
   <Common
    name="Welcome to Home Page"
    imgsrc={web}
    visit="/contact"
    btname="contact Now"
   />

</> 
  );
}

export default Home;
