import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './Navbar.elements';

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
            <NavLogo activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500} onClick={closeMobileMenu}>
              THE REGINA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks activeClass="active"
            to="happy"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}  onClick={closeMobileMenu}>
                  Stay happy!
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks activeClass="active"
            to="safe"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500} onClick={closeMobileMenu}>
                  Stay safe!
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks activeClass="active"
            to="strong"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500} onClick={closeMobileMenu}>
                  Stay strong!
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
