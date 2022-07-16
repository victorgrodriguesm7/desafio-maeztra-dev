import DressIcon from "../../icons/DressIcon";
import { Container, MenuItem, MenuTitle } from "./style";

export default function CategoryMenu() {
  return (
    <Container>
      <MenuItem active>
        <DressIcon/>
        <MenuTitle>Novidades</MenuTitle>
      </MenuItem>
      <MenuItem>
        <MenuTitle>Vestidos</MenuTitle>
      </MenuItem>
      <MenuItem>
        <MenuTitle>Roupas</MenuTitle>
      </MenuItem>
      <MenuItem>
        <MenuTitle>Sapatos</MenuTitle>
      </MenuItem>
      <MenuItem>
        <MenuTitle>Lingerie</MenuTitle>
      </MenuItem>
      <MenuItem>
        <MenuTitle>Acessórios</MenuTitle>
      </MenuItem>
      <MenuItem>
        <MenuTitle>OUTLET</MenuTitle>
      </MenuItem>
    </Container>
  );
}
