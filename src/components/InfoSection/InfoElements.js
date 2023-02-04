import styled from 'styled-components';


export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and(max-width: 768px){
        padding: 100px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    height: 800px;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`
    )};

    @media screen and (max-width: 768px){
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`
    )};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 5px;
    padding: 0 5px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 5px;
    padding: 0 10px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 550px;
    padding-top: 0;
    padding-bottom: 20px;
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 24px;
    line-height: 16px;
    font-weight: 800;
    letter-spacing: 1.8px;
    text-transform: lowercase;
    margin-top: 28px;
    margin-bottom: 24px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 48px;
    };
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 28px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    transition: all 0.2s ease-in-out;

    &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer
}
`;

export const ImgWrap = styled.div`
    max-width: 450px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    border-radius: 12px;
    margin: 0 0 5px 0px;
    padding-right: 0px;

    @media screen and (max-width: 480px){
        width: 100%;
        margin: 0 0 5px 0px;
        padding-right: 0px;
    };
`;