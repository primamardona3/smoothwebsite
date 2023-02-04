import styled from "styled-components";


export const ServiceContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width : 1200px) {
        height: 1000px;
    }

    @media screen and (max-widht: 800px){
        height: 400px;
    }
`;

export const ServiceWrapper = styled.div`
    max-width: 2800px;
    margin: 28px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 12px;
    padding: 0 50px;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 80px;
        height: auto;
    }
`;

export const ServiceCard = styled.div`
    background: #fff;
    display: flex;
    margin-bottom: 8px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 250px;
    widht: 100px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.06);
        transition: all 0.2s ease-in-out;
        cursor: pointer

    }
`;

export const ServiceIcon = styled.img`
    height: 140px;
    width: 140px;
    margin-bottom: 30px;
`;

export const ServiceH1 = styled.h1`
    font-size: 3.5rem;
    color: #fff;
    margin-bottom: 10px;
    margin-top: 100px;

    @media screen and(max-width: 480px){
        font-size: 2rem;
    }
`;

export const ServiceH2 = styled.h2`
    margin-bottom: 10px;
    font-size: 1rem;
`;

export const ServiceP = styled.p`
    font-size: 1rem;
    text-align: center;
`;