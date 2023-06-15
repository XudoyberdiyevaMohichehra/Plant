import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Collection from "../components/Collection";
import About from "../components/About";
import { Container } from "./style";

function Root() {
  return (
    <Container >
     <Navbar/>
      <Main />
      <Collection />
      <About />
    </Container>
  );
}

export default Root;
