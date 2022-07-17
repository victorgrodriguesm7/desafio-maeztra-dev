import styled from "styled-components";

export const Container = styled.ul`
    list-style: none;
    width: 100%;
`;

export const Item = styled.li`
    width: 100%;
`;

export const ItemTrigger = styled.button`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: transparent;

    color: #353535;
    font-weight: 700;
    font-size: 1rem;
`;

interface ItemContentProps {
    active?: boolean;
}

export const ItemContent = styled.div<ItemContentProps>`
    overflow: hidden;
    height: ${({ active }) => active ? "auto": "0"};

    will-change: height;
    transition: all 0.2s ease;
`;

interface ItemTriggerIconProps {
    active?: boolean;
}

export const ItemTriggerIcon = styled.span<ItemTriggerIconProps>`
    will-change: transform;
    transition: all 0.2 ease;
    transform: ${({ active }) => active ? "rotate(45deg)" : "none"};
`;