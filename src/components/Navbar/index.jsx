import { Container, Wrapper, Section,
     LogoTitle, 
    Ul, Li, Img, Button
} from "./style";
import { navbar } from "../../utils/navbar";
import Menu from "../../assets/imgs/menu.png";

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
                    <Button padding fontsize>Sign Up</Button>
           </Section>
           {/* <Section> */}
                    <Img src={Menu} alt="menu"/>
           {/* </Section> */}
          </Wrapper>
        </Container>
    );
}

export default Navbar;