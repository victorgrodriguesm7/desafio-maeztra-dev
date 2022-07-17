import useMobile from "../../hooks/useMobile";
import BagIcon from "../../icons/BagIcon";
import DrawerIcon from "../../icons/DrawerIcon";
import HeartIcon from "../../icons/HeartIcon";
import PersonIcon from "../../icons/PersonIcon";
import SearchIcon from "../../icons/SearchIcon";
import CategoryMenu from "../CategoryMenu";
import { Action, Actions, Container, HeaderContainer, Input, InputButton, InputContainer, Logo } from "./style";

export default function Header() {
  const { isMobile } = useMobile();

  if (isMobile){
    return (
      <Container>
        <HeaderContainer>
          <DrawerIcon/>
          <Logo src="/assets/logo.png"/>
          <Actions>
            <Action>
              <SearchIcon/>
            </Action>
            <Action>
              <BagIcon width={20} height={24}/>
            </Action>
          </Actions>
        </HeaderContainer>
        <CategoryMenu/>
      </Container>
    );
  }
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
  );
}
