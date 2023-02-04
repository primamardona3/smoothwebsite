import styled from 'styled-components';
import { Link as LinkR } from  'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
        background: ${({scrollNav}) => (scrollNav ? '#000' : 'linear-gradient(150deg, rgba(0,0,0,0.6) 0%, transparent 100%) ')};
        height: 80px;
        margin-top: -80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        position: sticky;
        top: 0;
        z-index: 10;    

        @media screen and (max-width: 960px){
            transition: 0.8s all ease;
        }
`;

export const NavContainer = styled.div`
        display: flex;
        justify-content: space-between;
        height: 80px;
        z-index: 1;
        width: 100%;
        padding: 0 24px;
        max-width: 1000px;
`;

export const NavLogo = styled(LinkR)`
        color: #fff;
        justify-self: flex-start;
        cursor: pointer;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        margin-left: 24px;
        font-weight: bold;
        text-decoration: none;
        
        &:hover (max-width: 768px ){
                transition: all 0.2s ease-in-out;
                background: #fff;
                color: #010606;
            }
`;

export const MobileIcon = styled.div`
        display: none;

        @media screen and (max-width: 768px) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 60%);
            font-size: 1.8rem;
            cursor: pointer;
            color: #fff;
        } 
`;

export const NavMenu = styled.ul`
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
        margin-right: -22px;

        @media screen and (max-width: 768px) {
            display: none;
        }
`;

export const NavItem = styled.li`
        height: 80px;
        
`;
export const NavLinks = styled(LinkS)`
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;

        &:active {
            border-bottom: 3px solid #01bf71;
        }
`;

export const NavBtn = styled.nav`
        display: flex;
        align-items: center;
        justify-self: flex-start;

        @media screen and (max-width: 768px) {
            display: none;
            transition: 0.8s all ease;
        }
`;

export const NavBtnLinks = styled(LinkR)`
    border-radius: 50px;
    display: block;
    background: #01bf71;
    color: black;
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    text-decoration: none;
    border: none;
    transition: all 0.2s ease-in-out;

        &:hover (max-width: 768px ){
            display: none;
            position: absolute;
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }
`