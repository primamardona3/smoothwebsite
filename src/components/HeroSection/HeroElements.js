import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';



export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 850px;
    position: relative;
    z-index: 1;

    :before{
        content: 'center';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(150deg, rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.6) 100%), linear-gradient(150deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    widht: 100%;
    height: 100%;
    overflow: hidden;

`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    padding: 0;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34 full-cover;
`

export const HeroContent = styled.div`
    z-index: 2;
    max-width: 100%;
    position: absolute;
    padding: 8px 24px;
    border: 1 solid white;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 78px;
    text-align: center;

    @media screen and (mas-width: 768px){
        font-size: 40px;
    }

    @media screen and(max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    max-width: 300px;

    @media screen and (mas-width: 768px){
        font-size: 16px;
    }
    @media screen and(max-width: 480px){
        font-size: 32px;
    }
`

export const HeroA = styled.a`
    margin-top: 80px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    max-width: 1200px;
    line-height: 16px;
    letter-spacing: 1.4px;
    text-transform: none;
    margin-bottom: 34px;

    @media screen and (mas-width: 768px){
        font-size: 16px;
    }
    @media screen and(max-width: 480px){
        font-size: 32px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-decoration: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 24px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 18px;
`

