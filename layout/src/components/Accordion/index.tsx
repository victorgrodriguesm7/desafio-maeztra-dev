import { useState } from "react";
import { Container, Item, ItemContent, ItemTrigger, ItemTriggerIcon } from "./style";

interface Props {
    items: AccordionItem[];
}

export interface AccordionItem {
    title: string | JSX.Element;
    content: any;
}

export default function Accordion({ items }: Props) {
    const [active, setActive] = useState<number>();

    function toggleAccordion(index: number){
        return () => {
            setActive((state) => {
                return state === index ? undefined : index
            });
        }
    }
    return (
        <Container>
            {items.map((item, i) => {
                const { title, content } = item;
                const isActive = active === i;
                return (
                    <Item>
                        <ItemTrigger onClick={toggleAccordion(i)}>
                            {title}
                            <ItemTriggerIcon active={isActive}>
                                +
                            </ItemTriggerIcon>
                        </ItemTrigger>
                        <ItemContent active={isActive}>{content}</ItemContent>
                    </Item>
                );
            })}
        </Container>
    )
}
