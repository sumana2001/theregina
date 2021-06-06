import React from 'react';
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
} from './InfoSection.elements';

export default function InfoSection({
}) {
  return (
    <>
      <InfoSec lightBg={false}>
        <Container>
          <InfoRow imgStart="">
            <InfoColumn>
              <TextWrapper>
                <Heading style={{color:"white"}}>Features ✨</Heading>
                <Subtitle style={{color:"#a9b3c1"}}>
                  Your browser extension to keep your calls safe and protect you from data breaches. 
                  I know it become pretty irritating when someone next to you peeps in while you're talking. 
                  Use The Regina to lock your chat messages, participant list, your information and your video.
                  Unlock it by hovering over them. To make the accessibility even quicker, all you can do is 
                  toggling Alt+R to switch on and off the extension.
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={false}>
                <Img src={require('../../images/extension1.png').default} alt="extension" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
      <InfoSec lightBg={true}>
        <Container>
          <InfoRow imgStart="start">
            <InfoColumn>
              <TextWrapper>
                <Heading style={{color:"black"}}>How to use it?🤔</Heading>
                <Subtitle style={{color:"black"}}>
                  Step 1: Download the zip file <br/>
                  Step 2: Open chrome://extensions/  <br/>
                  Step 3: Load unpack <br/>
                  Step 4: Switch on the extension</Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={true}>
                <Img src={require('../../images/extension2.png').default} alt="extension img"/>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}
