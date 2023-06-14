import NormalButton from "../Button";
import { Container, Wrapper, Section,
     Header, Title, PlusBoxes, PlusBox, Number,
    NumberTitle, Img, Div, Button, Line, Div2, Div3, Line3 } from "./style";

import Aloe from "../../assets/imgs/bigAloe3.png";
import { ReactComponent as Frame  } from "../../assets/icons/Frame.svg";


function Main() {
    return (
        <Container >
            <Wrapper>   
            <Section>
                <Header>Growing Beautiful Plants at Home</Header>
                <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</Title>
                <NormalButton>Learn More</NormalButton>
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
         
           <Img src={Aloe} alt="Aloe" />
                    <Div>
                       <Frame/>
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