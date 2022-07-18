import styled from "styled-components";
import Button from "../Button";

export const Container = styled.div`
    position: relative;

    display: flex;
    align-items: stretch;
    height: 530.71px;
    width: 60vw;

    @media (max-width: 774px){
        width: 85vw;
        height: 50vh;
    }
`;

export const Close = styled.button`
    text-transform: uppercase;

    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-100%);
    color: #FFF;
    background: transparent;
`;

export const Image = styled.img`
    object-fit: contain;

    @media (max-width: 774px){
        display: none;
    }
`;

export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #FFF;
    height: 100%;

    padding: 0 2rem;
`;

export const Title = styled.span`
    text-transform: uppercase;
    font-size: .75rem;

    margin: 1rem 0;
`;

export const SubTitle = styled.span`
    text-align: center;
    font-size: 1.25rem;
    color: #787D83;

    strong {
        display: block;
    }
    
    @media (max-width: 774px){
        font-size: 1rem;
    }
    
`;

export const Input = styled.input`
    padding: .5rem;
    color: #787D83;
    border: 1px solid #C4C4C4;
    border-radius: 10px;

    width: 100%;

    margin-top: 1.25rem;
    margin-bottom: .75rem;
`;

export const CustomButton = styled(Button)`
    width: 100%;

    svg {
        margin-left: .5rem;
    }
`;