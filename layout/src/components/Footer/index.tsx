import useMobile from "../../hooks/useMobile";
import Accordion, { AccordionItem } from "../Accordion";
import { AccordionColumn, Column, ColumnItem, ColumnTitle, Container } from "./style";

const items = [
  {
    title: "Informações",
    links: [
      { text: "Quem Somos", url: "#"},
      { text: "Prazo de Envio", url: "#"},
      { text: "Trocas e Devoluções", url: "#"},
      { text: "Promoções e Cupons", url: "#"}
    ]
  },
  {
    title: "Minha Conta",
    links: [
      { text: "Minha Conta", url: "#"},
      { text: "Meus Pedidos", url: "#"},
      { text: "Cadastre-se", url: "#"}
    ]
  },
  {
    title: "Onde nos Encontrar",
    links: [
      { text: "Lojas", url: "#"},
      { text: "Endereço", url: "#"}
    ]
  }
]
export default function Footer() {
  const { isMobile } = useMobile();

  function getAccordionItems(rawItems: typeof items): AccordionItem[]{
    return rawItems
      .map(({ title, links}) => {
        return {
          title,
          content: (
            <AccordionColumn>
              {links.map(({ text, url}) => (
                <ColumnItem href={url}>{text}</ColumnItem>
              ))}
            </AccordionColumn>
          )
        }
      })
  }

  if (isMobile){
    return (
      <Container>
        <Accordion
              items={getAccordionItems(items)}/>
      </Container>
    )
  }
  return (
    <Container>
        {
          items.map((item) => {
            const { title, links } = item;
            return (
              <Column>
                <ColumnTitle>{title}</ColumnTitle>
                {links.map(({ text, url}) => (
                  <ColumnItem href={url}>{text}</ColumnItem>
                ))}
              </Column>
            )
          })
        }
    </Container>
  );
}
