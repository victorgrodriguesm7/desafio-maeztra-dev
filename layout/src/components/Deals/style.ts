import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
`;

export const Title = styled.span`
    font-weight: 700;

    color: #353535;
`;

export const DealsList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    margin-top: .5rem;

    @media (max-width: 774px){
        justify-content: center;
        align-items: center;
    }
`;

export const Deal = styled.div`
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    background: #EFEFEF;
    border-radius: 4px;

    @media (max-width: 774px){
        &:not(:first-child) {
            display: none;
        }
    }
`;

export const DealsContent = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: space-around;

    margin-left: .5rem;
    width: 100%;
`;

export const DealsTitle = styled.strong`
    color: #353535;
    font-size: .875rem;
    width: 100%;

    @media (max-width: 1280px){
        font-size: .75rem;
    }

    @media (max-width: 774px){
    
    }
`;

export const DealsSubTitle = styled.span`
    font-size: .75rem;
    width: 100%;

    @media (max-width: 1280px){
        font-size: .65rem;
    }
`;