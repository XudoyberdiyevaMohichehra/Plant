import NormalButton from "../Button";
import {
    Container, Wrapper, Section, Text,
    Header, Title,
    Img, Div, Div2,
} from "./style";

import Tree from "../../assets/imgs/tree.png";

function About() {
    return (
        <Container >
            <Wrapper>
                <Div>
                    <Div2>
                        <Img src={Tree} alt="Aloe" />
                    </Div2>
                </Div>


                <Section>
                    <Text>About Us</Text>
                    <Header>Continue to Develop to Became Global Company</Header>
                    <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at. </Title>
                    <Title style={{ paddingBottom: '45px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</Title>
                    <NormalButton >Learn More</NormalButton>

                </Section>
            </Wrapper>
        </Container>
    );
}

export default About;