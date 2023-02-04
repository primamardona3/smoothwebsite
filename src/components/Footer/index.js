import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import {FooterContainer,
        FooterWrap,
        FooterLinkContainer,
        FooterLinksWrapper,
        FooterLinkItems,
        FooterLinkTitle,
        FooterLink,
        SocialIcons,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRights,
        SocialIconLink} from './FooterElements'


const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };



  return (
    <FooterContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,160L40,144C80,128,160,96,240,90.7C320,85,400,107,480,133.3C560,160,640,192,720,202.7C800,213,880,203,960,181.3C1040,160,1120,128,1200,128C1280,128,1360,160,1400,176L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      <FooterWrap>
        <FooterLinkContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle> informasi </FooterLinkTitle>
                    <FooterLink to='/signin'> Cara Kerja </FooterLink>
                    <FooterLink to='/signin'> testimoni </FooterLink>
                    <FooterLink to='/signin'> Career </FooterLink>
                    <FooterLink to='/signin'> Investor </FooterLink>
                    <FooterLink to='/signin'> Terms of Service </FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle> Product </FooterLinkTitle>
                    <FooterLink to='//pantai'> Panti Linau </FooterLink>
                    <FooterLink to='/signin'> Pantai Cukuh </FooterLink>
                    <FooterLink to='/signin'> Pantai Pengubaian </FooterLink>
                    <FooterLink to='/signin'> Pantai Laguna </FooterLink>
                    <FooterLink to='/signin'> Pantai Sekunyit </FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle> Support </FooterLinkTitle>
                    <FooterLink to='/signin'> Cara Kerja </FooterLink>
                    <FooterLink to='/signin'> testimoni </FooterLink>
                    <FooterLink to='/signin'> Career </FooterLink>
                    <FooterLink to='/signin'> Investor </FooterLink>
                    <FooterLink to='/signin'> Terms of Service </FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle> Sosial Media </FooterLinkTitle>
                    <FooterLink to='/signin'> Instagram </FooterLink>
                    <FooterLink to='/signin'> Facebook </FooterLink>
                    <FooterLink to='/signin'> Youtube </FooterLink>
                    <FooterLink to='/signin'> Linkedin </FooterLink>
                    <FooterLink to='/signin'> Twitter </FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              DONA
            </SocialLogo>
            <WebsiteRights> &copy; {new Date().getFullYear()} Allrights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" arial-lebel="Facebook"> <FaFacebook /> </SocialIconLink>
              <SocialIconLink href="//instagram.com" target="_blank" arial-lebel="Instagram"> <FaInstagram /> </SocialIconLink>
              <SocialIconLink href="//www.twitter.com" target="_blank" arial-lebel="Twitter"> <FaTwitter /> </SocialIconLink>
              <SocialIconLink href="//youtube.com" target="_blank" arial-lebel="Youtube"> <FaYoutube /> </SocialIconLink>
              <SocialIconLink href="//Linkedin.com" target="_blank" arial-lebel="Linkedin"> <FaLinkedin /> </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
