import React, { useState } from 'react';
import {
  Nav,
  NavIcon,
  NavMenu,
  NavLogo,
  MobileIcon,
  NavBarContainer,
  NavItem,
  NavLinks
} from './Style';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavBarContainer>
            <NavLogo to='/'>
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services'>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products'>Products</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/signup'>
                    <Button primary>SignUp</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink>
                    <Button fontBig primary>
                      SignUp
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
export default Navbar;
