import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #101522;
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height:50px;
  width:100%
`;


const WebsiteRights = styled.p`
  color: #fff;
  margin: 0 auto;
`;

function Footer() {
  return (
    <FooterContainer>
      <WebsiteRights>Made with &hearts;</WebsiteRights>
       
    </FooterContainer>
  );
}

export default Footer;
