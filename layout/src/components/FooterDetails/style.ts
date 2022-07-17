import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: .5rem 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #353535;

    @media (max-width: 774px){
        flex-direction: column;
        align-items: stretch;

        padding: 1rem 5%;
    }
`;

export const Items = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 774px){
        justify-content: center;

        &:not(:first-child){
            margin-top: .5rem;
        }
    }

    & > *:not(:first-child){
        margin-left: 1rem;

        @media (max-width: 774px){
            margin-left: 2rem;
        }
    }
`;

export const SocialMedia = styled.a`
    text-decoration: none;
    color: #FFF;
`;

export const PaymentMethod = styled.div``;

export const PoweredBy = styled.div``;