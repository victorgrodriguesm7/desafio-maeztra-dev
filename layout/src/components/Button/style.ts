import styled from "styled-components";

export interface CustomButtonProps {
    weight?: 400 | 700;
    size?: "small" | "normal";
    customFamily?: string;
}

export const CustomButton = styled.button<CustomButtonProps>`
    background: #FAA500;
    border-radius: 8px;
    color: #FFF;

    font-size: ${({ size }) => size === "small" ? ".875" : "1"}rem;
    font-weight: ${({ weight }) => weight};
    ${({ customFamily }) => customFamily ? `font-family: ${customFamily}, sans-serif;` : ""}
    padding: .5rem 1.5rem;
`;