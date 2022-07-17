import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    align-items: center;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 774px){
        flex-direction: column;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h4`
    font-size: 1.5rem;
    font-weight: 700;
`;

export const Description = styled.p`
    font-weight: .875rem;

    @media (max-width: 1920px){
        font-size: .8rem;
    }

    @media (max-width: 1024px){
        font-size: .75rem;
    }
`;

export const CollectionImage = styled.img`
    object-fit: contain;
    width: 75%;

    margin-left: 3rem;

    @media (max-width: 1440px){
        margin-left: 2rem;
        width: 70%;
    }

    @media (max-width: 1280px){
        width: 60%;
    }

    @media (max-width: 1024px){
        width: 50%;
        margin-left: 1rem;
    }

    @media (max-width: 774px){
        width: 100%;
        margin: 1rem 0 0;
    }
`;