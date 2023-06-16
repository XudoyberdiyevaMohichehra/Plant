import {
    Container,
    Wrapper, 
    Section,
    Header, 
    Title,
    Input,
    Div, 
    Button,
    ImgBox, 
    Img, 
} from "./style";

import Flower from "../../assets/imgs/uniqui-plant.png";


function Subscribe() {
    return (
        <Container >
            <Wrapper>
                <Section>
                <div style={{width:'60%'}} >
                    <Header>Subscribe Our Newsletter</Header>
                    <Title >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at tempor, accumsan sit amet nunc cursus. </Title>
                       <div style={{display:'flex'}}>
                        <Input type="text" placeholder="Enter mail"></Input>
                        <Div>
                        <Button fontsize padding>Subscribe</Button>
                        </Div>
                       </div>
                    </div>
                    <ImgBox>
                      <Img src={Flower} alt="Flower" />
                    </ImgBox>

                </Section>
                {/* <ImgWrapper>
                    <ImgBox>
                        <Img src={col1}/>
                    </ImgBox>
                    <ImgBox style={{background:"var(--lightPurple)"}}>
                        <Img src={col2} />
                    </ImgBox>
                    <ImgBox>
                        <Img src={col3} />
                    </ImgBox>
                </ImgWrapper>                */}
            </Wrapper>
        </Container>
    );
}

export default Subscribe;