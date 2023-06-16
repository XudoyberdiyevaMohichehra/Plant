import {
    Container, Wrapper, Section, Text,
    Header, Title, Icon,
    Div, Div2,
} from "./style";

function About() {
    return (
        <Container >
            <Wrapper>
                <Section>
                    <Header>Plant</Header>
                    <Title>Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh posuere duis eu non sit integer at placerat amet.</Title>
                    <div style={{display:'flex', gap:'16px'}}>
                        <Div2 href="https://www.facebook.com/profile.php?id=100093196613992">
                            <Icon.Facebook />
                        </Div2>
                        <Div2 href="https://www.instagram.com/">
                            <Icon.Instagram />
                        </Div2>
                        <Div2 href="https://twitter.com/">
                            <Icon.Twitter />
                        </Div2>
                    </div>
                </Section>

                <Div>
                    <div>
                      <Header>Navigation</Header>
                        <Text>Home</Text>
                        <Text>About</Text>
                        <Text>Help & Support</Text>
                        <Text>Product</Text>
                    </div>
                    <div>
                     <Header>Contact</Header>
                        <Text>Address</Text>
                        <Text>Blog</Text>
                        <Text>About  Us</Text>
                        <Text>Product</Text>
                    </div>
                    <div>
                     <Header>Customers Services</Header>
                        <Text>FAQs</Text>
                        <Text>About</Text>
                        <Text>We are hiring</Text>
                        <Text>Returns</Text>
                    </div>
                </Div>
                
            </Wrapper>
        </Container>
    );
}

export default About;