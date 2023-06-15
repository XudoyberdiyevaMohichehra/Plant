import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Collection from "../components/Collection";
import About from "../components/About";
import Best from "../components/Best";
import { Container } from "./style";

function Root() {
  return (
    <Container >
     <Navbar/>
      <Main />
      <Collection />
      <About />
      <Best/>
    </Container>
  );
}

export default Root;
