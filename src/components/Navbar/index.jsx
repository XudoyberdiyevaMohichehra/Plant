import NormalButton from "../Button";
import { Container, Wrapper, Section,
     LogoTitle, 
    Ul, Li } from "./style";
import { navbar } from "../../utils/navbar";


function Navbar() {
    return (
        <Container >
          <Wrapper>
           <Section>
                <LogoTitle>Plant</LogoTitle>
           </Section>
           <Section>
            <Ul>

            {navbar.map(({id, title})=>
                <Li className="li" key={id}>{title}</Li>
                )}
                </Ul>
           </Section>
           <Section> 
                    <Li className="li" >Login</Li>
                    <NormalButton padding fontsize>Sign Up</NormalButton>
           </Section>
          </Wrapper>
        </Container>
    );
}

export default Navbar;