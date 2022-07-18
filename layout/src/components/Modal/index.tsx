
import { createPortal } from 'react-dom';
import NewsletterIcon from '../../icons/NewsletterIcon';
import SendIcon from '../../icons/SendIcon';
import Overlay from "../Overlay";
import { Close, Container, CustomButton, Form, Image, Input, SubTitle, Title } from './style';

interface Props {
    onClose: () => void;
}

export default function Modal({ onClose }: Props) {
    return createPortal(
        <Overlay>
            <Container>
                <Close onClick={onClose}>Fechar</Close>
                <Image src="/assets/home/newsletter.jpg"/>
                <Form>
                    <NewsletterIcon/>
                    <Title>Bem vindo à Maeztra</Title>
                    <SubTitle>
                        Receba em Primeira não
                        <strong>desconto e ofertas exclusivas</strong>
                    </SubTitle>
                    <Input placeholder="Digite seu e-mail" type="email"/>
                    <CustomButton weight={700}>
                        Enviar <SendIcon/>
                    </CustomButton>
                </Form>
            </Container>
        </Overlay>,
        document.body
    );
}
