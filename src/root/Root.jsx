import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Collection from "../components/Collection";
import { Container } from "./style";

function Root() {
  return (
    <Container >
     <Navbar/>
      <Main />
      <Collection />
    </Container>
  );
}

export default Root;
