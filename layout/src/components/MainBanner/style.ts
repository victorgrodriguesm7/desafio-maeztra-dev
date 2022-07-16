import styled from "styled-components";
import Button from "../Button";

export const Container = styled.div`
    position: relative;
`;

export const Background = styled.img`
    object-fit: contain;

    max-width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const Slider = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
`;

export const SliderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: -2rem;
    width: 65%;

    color: #fff;
`;

export const SliderContentTitle = styled.h2`
    font-weight: 700;
    font-size: 2.5rem;
    font-family: "Montserrat", sans-serif;

    @media (max-width: 1440px){
        font-size: 2rem;
    }

    @media (max-width: 1280px){
        font-size: 1.5rem;
    }
`;

export const SliderContentDescription = styled.p`
    font-size: 1.25rem;
    font-family: "Montserrat", sans-serif;
    
    margin-top: 2.5rem;
    margin-bottom: 2rem;

    @media (max-width: 1440px){
        font-size: 1rem;
    }

    @media (max-width: 1280px){
        font-size: .85rem;
    }
`;

export const CustomButton = styled(Button)`
    padding: .875rem 1.5rem;

    @media (max-width: 1280px){
        font-size: .875rem;
    }
`;

export const LeftArrow = styled.button`
    position: absolute;
    top: 0;
    left: 10%;
    bottom: 0;

    background: transparent;
`;

export const RightArrow = styled.button`
    position: absolute;
    top: 0;
    right: 10%;
    bottom: 0;

    background: transparent;
`;