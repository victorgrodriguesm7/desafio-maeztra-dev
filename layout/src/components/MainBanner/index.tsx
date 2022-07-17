import LeftArrowIcon from "../../icons/LeftArrowIcon";
import RightArrowIcon from "../../icons/RightArrowIcon";
import { Background, Container, Content, CustomButton, LeftArrow, RightArrow, Slider, SliderContent, SliderContentDescription, SliderContentTitle } from "./style";
import useMobile from "../../hooks/useMobile";

export default function MainBanner() {
  const { isMobile } = useMobile();

  return (
    <Container>
        <Background src={isMobile ? "/assets/home/banner-background-mobile.png" : "/assets/home/banner-background-desktop.png"}/>
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
