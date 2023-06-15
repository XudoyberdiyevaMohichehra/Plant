import {
    Container,
    Wrapper, 
    Section,
    Header, 
    Title, 
    ImgWrapper, 
    ImgBox, 
    Img, 
    Text,
    Cost,
    Box
} from "./style";

import Best1 from "../../assets/imgs/best-1.png";
import Best2 from "../../assets/imgs/best-2.png";
import Best3 from "../../assets/imgs/best-3.png";
import Best4 from "../../assets/imgs/best-4.png";
import { ReactComponent as Star } from "../../assets/icons/star5.svg";
import NormalButton from "../Button";


function Best() {
    return (
        <Container >
            <Wrapper>
                    <Header>Our Best Product</Header>
                <Section>
                    <Title >New Plants</Title>
                    <Title >New Arrivals</Title>
                    <Title >Sale</Title>
                </Section>
                <ImgWrapper>
                    <ImgBox>
                        <Box>
                        <Img src={Best1}/>
                        </Box>
                        <Text>Outdoor Plant</Text>
                        <Star/>
                        <Cost>$50.00</Cost>
                    </ImgBox>
                    <ImgBox style={{background:"var(--lightPurple)"}}>
                        <Box>
                            <Img src={Best2} />
                        </Box>
                        <Text>Outdoor Plant</Text>
                        <Star />
                        <Cost>$50.00</Cost>
                    </ImgBox>
                    <ImgBox>
                        <Box>
                            <Img src={Best3} />
                        </Box>
                        <Text>Outdoor Plant</Text>
                        <Star />
                        <Cost>$50.00</Cost>
                    </ImgBox>
                    <ImgBox>
                        <Box>
                            <Img src={Best4} />
                        </Box>
                        <Text>Outdoor Plant</Text>
                        <Star />
                        <Cost>$50.00</Cost>
                    </ImgBox>
                </ImgWrapper> 
                <Section>

                <NormalButton>View All</NormalButton>              
                </Section>
            </Wrapper>
        </Container>
    );
}

export default Best;