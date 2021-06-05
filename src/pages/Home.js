import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection } from "./index";

function Home() {
  return (
    <>
      <div id="home">
        <InfoSection {...homeObjOne} />
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
    </>
  );
}

export default Home;
