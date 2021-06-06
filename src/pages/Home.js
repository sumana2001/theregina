import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { Footer, InfoSection, Navbar } from "./index";
import Hero from './Hero/InfoSection'
import {
  Container, 
  Button,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection/InfoSection.elements';
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
      <InfoSec lightBg={true}>
        <Container>
          <InfoRow imgStart="start">
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={false}></TopLine>
                <Heading lightText={false}>Stay strong💪</Heading>
                <Subtitle lightTextDesc={false}>With the increasing crime rates all across the world, it is important to know how to defend yourself. Learn some self defence moves in Augmented Reality. This app will help you have some fun along with learning something very crucial in today's world</Subtitle>
                <a href="https://sumana2001.github.io/thereginaAR/" target="__blank">
                  <Button big fontBig >
                  Learn in AR
                  </Button>
                </a>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={true}>
                <Img src={require('../images/strong.gif').default} alt="strong" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
