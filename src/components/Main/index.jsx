// import NormalButton from "../Button";
import {
    Container, Wrapper, Section,
    Header, Title, PlusBoxes, PlusBox, Number,
    NumberTitle,
    Img, Div, ImgDiv, Button, Line,
    Div2, Div3, Line3, NormalButton1,
} from "./style";

import Aloe from "../../assets/imgs/bigAloe3.png";
import Leaf from "../../assets/imgs/leaf.png";
import { ReactComponent as Frame } from "../../assets/icons/Frame.svg";


function Main() {
    return (
        <Container >
            <Wrapper>
                <Section>
                    <div className="button">
                    <Header>Growing Beautiful Plants at Home</Header>
                    <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</Title>
                        <NormalButton1>Learn More</NormalButton1>
                    </div>
                    <PlusBoxes>
                        <PlusBox>
                            <Number>2000+</Number>
                            <NumberTitle>Delivery</NumberTitle>
                        </PlusBox>
                        <PlusBox>
                            <Number>1200+</Number>
                            <NumberTitle>Customers</NumberTitle>
                        </PlusBox>
                        <PlusBox>
                            <Number>1000+</Number>
                            <NumberTitle>Product</NumberTitle>
                        </PlusBox>
                    </PlusBoxes>
                </Section>
                <ImgDiv>
                <img className="leaf" src={Leaf} alt="rasm" />
                </ImgDiv>

                <Img src={Aloe} alt="Aloe" />
                <Div>
                    <Frame />
                    <Line></Line>
                    <Button background>Cactus Thorn</Button>
                </Div>
                <Div2>
                    <Button>Cactus Stem</Button>
                    <Line></Line>
                    <Frame />
                </Div2>
                <Div3>
                    <Frame />
                    <Line3></Line3>
                    <Button>Plant Media</Button>
                </Div3>
                
            </Wrapper>
        </Container>
    );
}

export default Main;