import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    width: 100%;
    padding: 1rem 0 2rem;
`;

export const Title = styled.h3`
    font-size: 2rem;
    color: #353535;
`;

export const PartnersList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 90%;
    max-width: 90%;

    margin: 0 auto;

    overflow-x: auto;

    @media (max-width: 774px){
        justify-content: flex-start;

        gap: 1rem;
    }
`;

export const Partner = styled.img`
    object-fit: contain;

    max-width: calc(calc(100% / 5) - 2rem);

    @media (max-width: 774px){
        max-width: 90vw;
        width: 90vw;
    }
`;