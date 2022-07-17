import FacebookIcon from "../../icons/FacebookIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import MasterCardIcon from "../../icons/MasterCardIcon";
import PoweredByMaeztraIcon from "../../icons/PoweredByMaeztraIcon";
import PoweredByVtexIcon from "../../icons/PoweredByVtexIcon";
import VisaCardIcon from "../../icons/VisaCardIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import { Container, Items, PaymentMethod, PoweredBy, SocialMedia } from "./style";

export default function FooterDetails() {
  return (
    <Container>
        <Items>
            <SocialMedia href="#"><FacebookIcon/></SocialMedia>
            <SocialMedia href="#"><LinkedinIcon/></SocialMedia>
            <SocialMedia href="#"><InstagramIcon/></SocialMedia>
            <SocialMedia href="#"><YoutubeIcon/></SocialMedia>
        </Items>
        <Items>
            <PaymentMethod><VisaCardIcon/></PaymentMethod>
            <PaymentMethod><MasterCardIcon/></PaymentMethod>
            <PaymentMethod><VisaCardIcon/></PaymentMethod>
            <PaymentMethod><MasterCardIcon/></PaymentMethod>
        </Items>
        <Items>
            <PoweredBy>
                <PoweredByVtexIcon/>
            </PoweredBy>
            <PoweredBy>
                <PoweredByMaeztraIcon/>
            </PoweredBy>
        </Items>
    </Container>
  )
}
