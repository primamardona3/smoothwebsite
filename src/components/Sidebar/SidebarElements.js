import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from  'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0; 
    transition: 0.2s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100' : '0')}; 
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')}; 
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    align-items: center;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    width: 200px;
    grid-template-colums: 1fr;
    grid-template-rows: repeat(6, 80px);

    @media screen and (max-width: 80px){
        grid-tamplate-rows: repeat(5, 80px);
    }
`;

export const SidebarLink =styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`