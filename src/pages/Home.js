import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { Footer, InfoSection, Navbar } from "./index";
import Hero from './Hero/InfoSection'

function Home() {
  return (
    <>
    <Navbar/>
      <div id="home">
        <Hero {...homeObjOne} />
      </div>
      <div id="happy">
        <InfoSection {...homeObjTwo} />
      </div>
      <div id="safe">
        <InfoSection {...homeObjThree} />
      </div>
      <div id="strong">
        <InfoSection {...homeObjFour} />
      </div>
      <Footer/>
    </>
  );
}

export default Home;
