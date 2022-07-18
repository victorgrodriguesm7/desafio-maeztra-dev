import styled from "styled-components";
import Button from "../Button";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin: 0 auto 2rem;
`;

export const SliderTitle = styled.h2`
    font-size: 2rem;
    color: #353535;

    margin-bottom: .75rem;
`;

export const Slider = styled.div`
    flex: 1;
    position: relative;

    display: flex;
    justify-content: stretch;

    gap: 1rem;
`;

export const LeftArrow = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    background: transparent;
    transform: translateX(-150%);

    @media (max-width: 774px){
        display: none;
    }
`;

export const RightArrow = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    background: transparent;

    transform: translateX(150%);

    @media (max-width: 774px){
        display: none;
    }
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 308px;

    @media (max-width: 1440px){
        &:nth-last-child(2) {
            display: none;
        }
    }

    @media (max-width: 1024px){
        &:nth-last-child(3) {
            display: none;
        }
    }

    @media (max-width: 774px){
        &:not(:nth-child(2)){
            display: none;
        }
    }
`;

export const ProductImage = styled.img`
    height: 381px;
    object-fit: contain;
`;

export const ProductPrice = styled.span`
    color: #353535;
    font-weight: 700;
    font-size: 1.25rem;
`;
export const ProductTitle = styled.span`
    font-size: 1rem;
`;

export const ProductDescription = styled.p`
    color: rgba(0, 0, 0, 0.5);
    font-size: .75rem;
`;

export const AddToCart = styled(Button)`
    margin-top: .5rem;
`;

export const Spacer = styled.div`
    height: 100%;
`;

export const SkuSelectorContainer = styled.div`
    display: flex;

    gap: .5rem;
    margin: .5rem 0;
`;

interface SkuSelectorProps {
    active?: boolean;
    color: string;
}

export const SkuSelector = styled.button<SkuSelectorProps>`
    background: ${({ color }) => color};
    width: 27px;
    height: 27px;

    ${({ active }) => active ? "border: 1px solid #353535;" : ""}
    border-radius: 4px;
`;