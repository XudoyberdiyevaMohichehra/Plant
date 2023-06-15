import {
    Container,
    Wrapper, 
    Section,
    Header, 
    Title, 
    ImgWrapper, 
    ImgBox, 
    Img, 
} from "./style";

import col1 from "../../assets/imgs/col-1.png";
import col2 from "../../assets/imgs/col-2.png";
import col3 from "../../assets/imgs/col-3.png";
import { ReactComponent as Arrow } from "../../assets/icons/Arrow-col.svg";


function Collection() {
    return (
        <Container >
            <Wrapper>
                <Section>
                    <Header>We have lots of plants collection for you and your family</Header>
                    <Title >See all collection <Arrow/></Title>
                </Section>
                <ImgWrapper>
                    <ImgBox>
                        <Img src={col1}/>
                    </ImgBox>
                    <ImgBox style={{background:"var(--lightPurple)"}}>
                        <Img src={col2} />
                    </ImgBox>
                    <ImgBox>
                        <Img src={col3} />
                    </ImgBox>
                </ImgWrapper>               
            </Wrapper>
        </Container>
    );
}

export default Collection;