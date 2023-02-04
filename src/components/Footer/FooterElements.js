import styled from "styled-components";
import {Link} from "react-router-dom";


export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
`;

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;
   /*  letter-spacing: 2px; */

    @media screen and (max-width: 820px) {
        padding-top: 16px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    flex-direction: center;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px;
    text-align: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 820px) {
        margin: 0;
        padding: 30px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 18px;
    letter-spacing: 1px;
    margin-bottom: 16px;   
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    letter-spacing: 2px;
    margin-buttom: 0.9rem;
    font-size: 10px
    transition: 0.3s ease-in-out;

    &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
}
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    flex-direction: center;
    justify-content: space-between;
    align-items: center;
    max-width 1200px;
    margin: 48px auto 0 auto;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    align-items: center;
    margin-bottom: 4px;
    font-weight: bold;
    margin: 12px;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin: 24px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 220px;
    margin: 12px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    margin: 12px;
`
