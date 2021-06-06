import React from 'react'
import { Footer, InfoSection, Navbar } from '../pages'
import {homeObjFive, homeObjSix} from "../pages/Data"
import styled from 'styled-components'
import { Button } from '../pages/InfoSection/InfoSection.elements'
import InfoSec from '../pages/InfoExtension/InfoSection'

const Hero=styled.div`
color: #000;
  padding: 40px 0;
  background: #fff;
  z-index: 1;
  width: 100%;
min-height:500px;
margin:auto;
`

const Heading=styled.h1`
text-align:center;
font-size:6rem;
font-weight:900;
`
const Content=styled.h2`
  max-width:80%;
  text-align:center;
  margin:auto;
    font-weight:400;
    color:#808080;
    margin-top:2%;
`
const Div=styled.div`
margin:auto;
text-align:center;
margin-top:2%;
`

function Safemeet() {
    return (
        <div>
            <Hero>
                <Heading>
                Let's make google meet private in public
                </Heading>
                <Content>
                Feeling low? Talk to someone on google meet and keep all the privacy you want. This chrome extension shows only what you want to show. So freely talk to anyone anywhere. Let's make google meet private in public.
                </Content>
                <Div>
                <a href="https://drive.google.com/file/d/1xVfh4rPV-8jhR_WdGj9-Rca726MsF-tA/view?usp=sharing" target="__blank">
                <Button big fontBig>
                    Download extension
                  </Button>
                  </a>
                  </Div>
            </Hero>

            <InfoSec/>
            <Footer/>
        </div>
    )
}

export default Safemeet
