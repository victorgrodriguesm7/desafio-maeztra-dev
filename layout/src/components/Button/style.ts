import styled from "styled-components";

export interface CustomButtonProps {
    weight?: 400 | 700;
    size?: "small" | "normal";
    customFamily?: string;
    borderRadius?: number;
}

export const CustomButton = styled.button<CustomButtonProps>`
    background: #FAA500;
    border-radius: ${({ borderRadius }) => borderRadius != undefined ? borderRadius : 8}px;
    color: #FFF;

    font-size: ${({ size }) => size === "small" ? ".875" : "1"}rem;
    font-weight: ${({ weight }) => weight};
    ${({ customFamily }) => customFamily ? `font-family: ${customFamily}, sans-serif;` : ""}
    padding: .5rem 1.5rem;
`;