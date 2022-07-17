import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: space-evenly;

    width: 80%;
    margin: 0 auto 2rem;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;


export const ColumnTitle = styled.h5`
    font-size: 1rem;
    color: #353535;
`;

export const ColumnItem = styled.a`
    text-decoration: none;
    font-size: .75rem;
    color: #353535;

    &:not(:first-child){
        margin-top: 1rem;
    }
`;