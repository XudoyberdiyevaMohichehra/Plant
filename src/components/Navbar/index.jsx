import NormalButton from "../Button";
import { Container, Section, LogoTitle, Title } from "./style";
import { navbar } from "../../utils/navbar";


function Navbar() {
    return (
        <Container >
           <Section>
                <LogoTitle>Plant</LogoTitle>
           </Section>
           <Section>
            {navbar.map(({id, title})=>
                <Title key={id}>{title}</Title>
            )}
           </Section>
           <Section> 
                <Title>Login</Title>
                <NormalButton padding fontsize>Sign Up</NormalButton>
           </Section>
        </Container>
    );
}

export default Navbar;