import { useState } from "react";
import useMobile from "../../hooks/useMobile";
import BagIcon from "../../icons/BagIcon";
import DrawerIcon from "../../icons/DrawerIcon";
import HeartIcon from "../../icons/HeartIcon";
import PersonIcon from "../../icons/PersonIcon";
import SearchIcon from "../../icons/SearchIcon";
import CategoryMenu from "../CategoryMenu";
import Modal from "../Modal";
import { Action, Actions, Container, HeaderContainer, Input, InputButton, InputContainer, Logo } from "./style";

export default function Header() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const { isMobile } = useMobile();

  if (isMobile){
    return (
      <Container>
        <HeaderContainer>
          <DrawerIcon/>
          <Logo src="/assets/logo.png"/>
          <Actions>
            <Action onClick={() => setIsModalOpen((state) => !state)}>
              <SearchIcon/>
            </Action>
            <Action>
              <BagIcon width={20} height={24}/>
            </Action>
          </Actions>
        </HeaderContainer>
        <CategoryMenu/>
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}/>}
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
          <Action onClick={() => setIsModalOpen((state) => !state)}>
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
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}/>}
    </Container>
  );
}
