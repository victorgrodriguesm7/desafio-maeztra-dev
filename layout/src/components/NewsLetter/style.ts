import styled from "styled-components";
import Button from "../Button";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2rem 0;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;

    @media (max-width: 774px){
        width: 100%;
        flex-direction: column;
    }
`;

export const FormTitle = styled.h3`
    font-size: 1.5rem;
    margin-right: 2rem;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;

    background: #FFF;

    width: 100vw;
    max-width: 600px;
    border: 1px solid #353535;
    border-right: 0;
    border-radius: 4px 0 0 4px;

    @media (max-width: 1024px){
        max-width: 400px;
    }

    @media (max-width: 774px){
        width: 70%;
        justify-content: center;

        margin-top: .5rem;

        border: 0;
        background: transparent;
    }
`;

export const Input = styled.input`
    flex: 1;
    padding-left: .5rem;
    height: 100%;
    
    font-size: .875rem;
    color: #353535;
    
    background: transparent;
    outline: 0;
    border: 0;

    @media (max-width: 774px){
        font-size: .875rem;
        padding: calc(.25rem - 1px) 1rem;

        border: 1px solid #353535;
        border-radius: 4px;
    }
`;

export const CustomButton = styled(Button)`
    position: relative;

    @media (max-width: 774px){
        font-size: .875rem;

        padding: .25rem 1.5rem;
        border-radius: 4px;
        margin-left: 1rem;

        &:before, &:after {
            display: none;
        }
    }

    &:before, &:after {
        position: absolute;
        content: "";

        right: 0;
        left: 0;
        height: 1px;
        background: #FAA500;
    }

    &:before {
        top: -1px;
    }

    &:after {
        bottom: -1px;
    }
`;