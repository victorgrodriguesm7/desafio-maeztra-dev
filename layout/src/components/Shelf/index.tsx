import LeftArrowIcon from "../../icons/LeftArrowIcon";
import RightArrowIcon from "../../icons/RightArrowIcon";
import { AddToCart, Container, LeftArrow, ProductContainer, ProductDescription, ProductImage, ProductPrice, ProductTitle, RightArrow, SkuSelector, SkuSelectorContainer, Slider, SliderTitle, Spacer } from "./style";
import products from "./products";

export default function Shelf() {
  return (
    <Container>
      <SliderTitle>As Mais Pedidas</SliderTitle>
      <Slider>
        <LeftArrow>
          <LeftArrowIcon/>
        </LeftArrow>
        {products.map((product) => {
          const { title, image, price, description, skus } = product;
          return (
            <ProductContainer>
              <ProductImage src={image}/>
              <SkuSelectorContainer>
                {
                  skus.map(({ color }, i) => (
                    <SkuSelector color={color} active={i === 0}/>
                  ))
                }
              </SkuSelectorContainer>
              <ProductPrice>R$ {price}</ProductPrice>
              <ProductTitle>{title}</ProductTitle>
              <ProductDescription>{description}</ProductDescription>
              <Spacer/>
              <AddToCart>Adicionar</AddToCart>
            </ProductContainer>
          )
        })}
        <RightArrow>
          <RightArrowIcon/>
        </RightArrow>
      </Slider>
    </Container>
  )
}
