import {
    Container,
    Wrapper, 
    Header, 
    Title, 
    ImgWrapper, 
    ImgBox, 
    Img, 
} from "./style";

import Follow1 from "../../assets/imgs/follow-1.png";
import Follow2 from "../../assets/imgs/follow-2.png";
import Follow3 from "../../assets/imgs/follow-3.png";
import Follow4 from "../../assets/imgs/follow-4.png";

import { ReactComponent as BigIns } from "../../assets/icons/big-instagram.svg";


function Follow() {
    return (
        <Container >
            <Wrapper>
                <Header>Follow Us on Instagram</Header>
                <Title >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accu msan sit amet nunc cursus. Nec tristique at in erat lectus</Title>
                   
                <ImgWrapper>
                    <ImgBox>
                        <BigIns/>
                    </ImgBox>
                    
                    <Img src={Follow1} alt="rasm"/>
                    <Img src={Follow2} alt="rasm"/>
                    <Img src={Follow3} alt="rasm"/>
                    <Img src={Follow4} alt="rasm"/>   
                </ImgWrapper> 
                
            </Wrapper>
        </Container>
    );
}

export default Follow;