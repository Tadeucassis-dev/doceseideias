import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";

function Home() {
  return (
    <Box>
      <Header />
      <Flex
        justifyContent="center"
        alignItems="center"
        fontSize={40}
        height="90vh"
        direction="column"
        textAlign="center" 
      >
        <p>Pagina Home!</p>
      </Flex>
      <Footer />
    </Box>
  );
}

export default Home;