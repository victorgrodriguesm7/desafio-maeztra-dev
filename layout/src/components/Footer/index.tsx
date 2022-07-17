import { Column, ColumnItem, ColumnTitle, Container } from "./style";

export default function Footer() {
  return (
    <Container>
      <Column>
        <ColumnTitle>Informações</ColumnTitle>
        <ColumnItem href="#">Quem Somos</ColumnItem>
        <ColumnItem href="#">Prazo de Envio</ColumnItem>
        <ColumnItem href="#">Trocas e Devoluções</ColumnItem>
        <ColumnItem href="#">Promoções e Cupons</ColumnItem>
      </Column>
      <Column>
        <ColumnTitle>Minha Conta</ColumnTitle>
        <ColumnItem href="#">Minha Conta</ColumnItem>
        <ColumnItem href="#">Meus Pedidos</ColumnItem>
        <ColumnItem href="#">Cadastre-se</ColumnItem>
      </Column>
      <Column>
        <ColumnTitle>Onde nos Encontrar</ColumnTitle>
        <ColumnItem href="#">Lojas</ColumnItem>
        <ColumnItem href="#">Endereço</ColumnItem>
      </Column>
    </Container>
  );
}
