import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Collection from "../components/Collection";
import About from "../components/About";
import Best from "../components/Best";
import Customer from "../components/Customer";
import Subscribe from "../components/Subscribe";
import Follow from "../components/Follow";
import Footer from "../components/Footer";
import { Container } from "./style";

function Root() {
  return (
    <Container >
     <Navbar/>
      <Main />
      {/* <Collection />
      <About />
      <Best/>
      <Customer/>
      <Subscribe />
      <Follow />
      <Footer /> */}
    </Container>
  );
}

export default Root;
// Follow