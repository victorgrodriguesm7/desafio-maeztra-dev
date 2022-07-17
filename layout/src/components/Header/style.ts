import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    
    background: #FFF;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.08);

    padding: 1rem 0;
    @media (max-width: 774px){
        padding: 1rem .5rem;
    }
`;

export const Logo = styled.img`
    object-fit: contain;

    @media (max-width: 774px){
        margin-right: auto;
        margin-left: 1rem;
    }
`;

export const InputContainer = styled.div`
    flex: 1;
    display: flex;

    max-width: 50vw;
    background: #EFEFEF;

    border-radius: 10px;
`;

export const Input = styled.input`
    flex: 1;
    font-size: .75rem;
    padding-left: .5rem;
    color: #353535;
    background: transparent;

    outline: 0;
    border: 0;
`;

export const InputButton = styled.button`
    background: #FAA500;
    border-radius: 8px;
    color: #FFF;

    font-size: .875rem;
    padding: .5rem 1.5rem;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 1rem;

    @media (max-width: 1024px){
        gap: .25rem;
    }
`;

interface ActionProps {
    active?: boolean;
}

export const Action = styled.button<ActionProps>`
    display: flex;
    align-items: center;
    gap: .25rem;
    
    background: transparent;
    color: #353535;
    border-radius: 8px;
    padding: .5rem .75rem;

    @media (max-width: 1024px){
        font-size: 0;
    }

    ${({ active }) => active ? "border: 1px solid #FAA500;" : "" }
`;