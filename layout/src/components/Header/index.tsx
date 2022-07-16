import BagIcon from "../../icons/BagIcon";
import HeartIcon from "../../icons/HeartIcon";
import PersonIcon from "../../icons/PersonIcon";
import CategoryMenu from "../CategoryMenu";
import { Action, Actions, Container, HeaderContainer, Input, InputButton, InputContainer, Logo } from "./style";

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Logo src="/assets/logo.png"/>
        <InputContainer>
          <Input placeholder="O Que Você Busca?"/>
          <InputButton>
            Buscar
          </InputButton>
        </InputContainer>
        <Actions>
          <Action>
            <PersonIcon/>
            Minha Conta
          </Action>
          <Action>
            <HeartIcon/>
            Lista de Desejos
          </Action>
          <Action active>
            <BagIcon/>
            Meu Carrinho
          </Action>
        </Actions>
      </HeaderContainer>
      <CategoryMenu/>
    </Container>
  )
}
