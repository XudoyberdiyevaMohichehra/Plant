import Navbar from "../components/Navbar";
import Main from "../components/Main";
import { Container } from "./style";

function Root() {
  return (
    <Container >
     <Navbar/>
      <Main/>
    </Container>
  );
}

export default Root;
