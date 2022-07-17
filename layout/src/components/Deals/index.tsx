import DiscountIcon from "../../icons/DiscountIcon";
import ReturnIcon from "../../icons/ReturnIcon";
import ShippingIcon from "../../icons/ShippingIcon";
import WarehouseIcon from "../../icons/WareHouseIcon";
import WorldWideIcon from "../../icons/WorldWideIcon";
import { Container, DealsList, Deal, Title, DealsContent, DealsTitle, DealsSubTitle } from "./style";

export default function Deals() {
  return (
    <Container>
        <Title>Por que comprar na Maeztra?</Title>
        <DealsList>
            <Deal>
                <WorldWideIcon/>
                <DealsContent>
                    <DealsTitle>Produtos importados</DealsTitle>
                    <DealsSubTitle>Produto de Alta Qualidade</DealsSubTitle>
                </DealsContent>
            </Deal>
            <Deal>
                <WarehouseIcon/>
                <DealsContent>
                        <DealsTitle>Estoque no Brazil</DealsTitle>
                        <DealsSubTitle>Produtos mais perto de você!</DealsSubTitle>
                </DealsContent>
            </Deal>
            <Deal>
                <ReturnIcon/>
                <DealsContent>
                    <DealsTitle>Trocas Garantidas</DealsTitle>
                    <DealsSubTitle>Trocas em até 48 horas, vejas as regras</DealsSubTitle>
                </DealsContent>
            </Deal>
            <Deal>
                <DiscountIcon/>
                <DealsContent>
                    <DealsTitle>Ganhe 5% off</DealsTitle>
                    <DealsSubTitle>Pagando à vista no Cartão</DealsSubTitle>
                </DealsContent>
            </Deal>
            <Deal>
                <ShippingIcon/>
                <DealsContent>
                    <DealsTitle>Frete Grátis</DealsTitle>
                    <DealsSubTitle>Em compras acima de R$ 499,00</DealsSubTitle>
                </DealsContent>
            </Deal>
        </DealsList>
    </Container>
  )
}
