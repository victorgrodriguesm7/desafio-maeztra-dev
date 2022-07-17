import { Container, Partner, PartnersList, Title } from "./style";

export default function Partners() {
  return (
    <Container>
      <Title>Marcas Parceiras</Title>
      <PartnersList>
          <Partner src="/assets/home/Partner-1.png"/>
          <Partner src="/assets/home/Partner-2.png"/>
          <Partner src="/assets/home/Partner-3.png"/>
          <Partner src="/assets/home/Partner-4.png"/>
          <Partner src="/assets/home/Partner-5.png"/>
      </PartnersList>
    </Container>
  )
}
