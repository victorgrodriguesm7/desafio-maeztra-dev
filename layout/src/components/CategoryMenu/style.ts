import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    
    padding: .75rem 0;
`;

interface MenuItemProps {
    active?: boolean;
}

export const MenuItem = styled.button<MenuItemProps>`
    display: flex;
    align-items: center;

    background: transparent;

    color: ${({ active }) => active ? "#FAA500": "#353535"};
    font-weight: ${({ active }) => active ? "700": "400"};
`;

export const MenuTitle = styled.span`
    font-size: .875rem;
    color: inherit;
    font-weight: inherit;

    svg + & {
        margin-left: .25rem;
    }
`;