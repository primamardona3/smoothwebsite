import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll} from 'react-scroll';
import {
    Nav,
    NavContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLinks
    } from './NavbarElements';

const Navbar = ({toggle}) => {
  const[scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
            <NavLogo to='/' onClick={toggleHome}> DONA </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='about'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
            > About </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='service'
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                          > Service </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='contact'
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                          > Contact </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='signup'
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                          > Sign Up </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLinks to='/signin'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            > Sign In</NavBtnLinks>
        </NavBtn>
        </NavContainer>
      </Nav>
    </>
  )
};

export default Navbar;
