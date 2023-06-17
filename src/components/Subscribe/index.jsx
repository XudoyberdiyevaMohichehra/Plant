import {
    Container,
    Wrapper, 
    Section,
    Header, 
    Title,
    Input,
    Div, 
    Div2,
    Button,
    ImgBox, 
    Img, 
    Div3
} from "./style";

import Flower from "../../assets/imgs/uniqui-plant.png";


function Subscribe() {
    return (
        <Container >
            <Wrapper>
                <Section>
                    <Div2  >
                    <Header>Subscribe Our Newsletter</Header>
                    <Title >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at tempor, accumsan sit amet nunc cursus. </Title>
                        <Div3  >
                        <Input type="text" placeholder="Enter mail"></Input>
                        <Div>
                        <Button fontsize padding>Subscribe</Button>
                        </Div>
                        </Div3>
                    </Div2>
                    <ImgBox>
                      <Img src={Flower} alt="Flower" />
                    </ImgBox>

                </Section>
              
            </Wrapper>
        </Container>
    );
}

export default Subscribe;