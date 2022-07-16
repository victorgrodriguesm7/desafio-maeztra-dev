import LeftArrowIcon from "../../icons/LeftArrowIcon";
import RightArrowIcon from "../../icons/RightArrowIcon";
import { Background, Container, Content, CustomButton, LeftArrow, RightArrow, Slider, SliderContent, SliderContentDescription, SliderContentTitle } from "./style";

export default function MainBanner() {
  return (
    <Container>
        <Background src="/assets/home/banner-background-desktop.png"/>
        <Content>
            <Slider>
              <LeftArrow>
                <LeftArrowIcon/>
              </LeftArrow>
              <SliderContent>
                <SliderContentTitle>Promoções de Outono</SliderContentTitle>
                <SliderContentDescription>Confira os melhores looks para combinar<br/> com você nesse Outono</SliderContentDescription>
                <CustomButton
                  weight={700}
                  customFamily="Montserrat"
                  >
                  Conferir
                </CustomButton>
              </SliderContent>
              <RightArrow>
                <RightArrowIcon/>
              </RightArrow>
            </Slider>
        </Content>
    </Container>
  )
}
