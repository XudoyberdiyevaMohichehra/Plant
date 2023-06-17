import {
    Container, Wrapper, Section,
    Header, Title, Title2,
    Img, Div, Div2, 
    Text, Text2, ArrowWrapper,
    ArrowDiv
} from "./style";

import Boy from "../../assets/imgs/boy.png";
import Girl from "../../assets/imgs/girl.png";
import { ReactComponent as Sign } from "../../assets/icons/sign6.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/Arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/Arrow-right.svg";


function Customer() {
    return (
        <Container >
            <Wrapper>
                <Section>
                    <Header>What Our Customers Says</Header>
                    <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</Title>
                    
                    <Div>
                       <Div2>
                        <div style={{width:'100%', display:'flex', justifyContent: 'space-between'}}>
                                <div style={{  display: 'flex', justifyContent: 'space-between', gap:'15px'}}>
                                    <img src={Boy} />
                                  <div>
                                        <Text>Hasanul Islam</Text>
                                        <Text2>Marketing CEO</Text2>
                                  </div>
                            </div>
                        <div><Sign /> <Sign /></div>
                        </div>
                       </Div2> 

                        <Title style={{ color: "#ECECEC", paddingTop: '16px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</Title>
                        <Title2>Lorem ipsum dolor sit amet.....</Title2>
                        <ArrowWrapper>
                            <ArrowDiv><ArrowLeft/></ArrowDiv>
                            <ArrowDiv style={{ background: 'white' }}><ArrowRight/></ArrowDiv>
                        </ArrowWrapper>
                    </Div>
                </Section>

               

                <Img src={Girl} alt="Aloe" />
                
                
            </Wrapper>
        </Container>
    );
}

export default Customer;