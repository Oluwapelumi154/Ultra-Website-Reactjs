import React from 'react';
import {
  FooterContainer,
  FooterSubScription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksItem,
  FooterLinksWrapper,
  FooterLink,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  WebsiteRights,
  SocialMediaWrap,
  SocialLogo
} from './Style';
import { Button } from '../../global-style';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubScription>
        <FooterSubHeading>
          Join our exclusive members to receive the lastest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubScription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/sign-up'>Testimonials</FooterLink>
            <FooterLink to='/sign-up'>Careers</FooterLink>
            <FooterLink to='/sign-up'>Investors</FooterLink>
            <FooterLink to='/sign-up'>Term of Service</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/sign-up'>Testimonials</FooterLink>
            <FooterLink to='/sign-up'>Careers</FooterLink>
            <FooterLink to='/sign-up'>Investors</FooterLink>
            <FooterLink to='/sign-up'>Term of Service</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/sign-up'>Testimonials</FooterLink>
            <FooterLink to='/sign-up'>Careers</FooterLink>
            <FooterLink to='/sign-up'>Investors</FooterLink>
            <FooterLink to='/sign-up'>Term of Service</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/sign-up'>Testimonials</FooterLink>
            <FooterLink to='/sign-up'>Careers</FooterLink>
            <FooterLink to='/sign-up'>Investors</FooterLink>
            <FooterLink to='/sign-up'>Term of Service</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            ULTRA
          </SocialLogo>
          <WebsiteRights>ULTRA &copy; 2022</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' airal-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' airal-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' airal-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' airal-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' airal-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};
export default Footer;
