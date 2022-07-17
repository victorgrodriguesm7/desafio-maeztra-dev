import { Container, CustomButton, Form, FormTitle, Input, InputContainer } from "./style";

export default function NewsLetter() {
  return (
    <Container>
        <Form>
            <FormTitle>
                Receba Nossa Newsletter
            </FormTitle>
            <InputContainer>
                <Input placeholder="Digite seu e-mail"/>
                <CustomButton
                    size="normal"
                    weight={700}
                    borderRadius={0}>
                    Enviar
                </CustomButton>
            </InputContainer>
        </Form>
    </Container>
  )
}
