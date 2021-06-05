import styled from 'styled-components';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMagento} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index:10000;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1000;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  &:hover {
    color:#fff;
    text-decoration:none;
    transition: all 0.3s ease;
  }
`;

const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #000;


  }
`;

const NavItem = styled.li`

  @media screen and (max-width: 960px) {
    width: 100%;

  }
`;


const NavLinks = styled(Link)`
margin-top:15px;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor:pointer;
  &:hover {
    color:#fff;
    text-decoration:none;
    transition: all 0.3s ease;
    border-bottom: 2px solid royalblue;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color:royalblue;
      border:none;
      transition: all 0.3s ease;
    }
  }
`;

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo
            to="/" onClick={closeMobileMenu}>
              THE REGINA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            
            <NavMenu onClick={handleClick} click={click}>
            <NavItem>
            <NavLinks to="/update-profile" onClick={closeMobileMenu}>
            Update Profile
          </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/update-profile" onClick={closeMobileMenu}>
            Logout
          </NavLinks>
          </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
