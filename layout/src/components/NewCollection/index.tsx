import useMobile from "../../hooks/useMobile";
import { CollectionImage, Container, Content, Description, Title } from "./style";

export default function NewCollection() {
  const { isMobile } = useMobile();

  const image = isMobile ? "/assets/home/banner-collection-mobile.png" : "/assets/home/banner-collection.png"
  return (
    <Container>
        <Content>
            <Title>Lorem ipsum</Title>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
            </Description>
        </Content>
        <CollectionImage src={image}/>
    </Container>
  )
}
