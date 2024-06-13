import { Box, Flex, Text } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";

const Temas = () => {
  return (
    <>
      <Flex direction="column" minH="100vh">
        <Header />
        <Box flex={1} backgroundColor='blue'>
          <Text>TEMAS</Text>
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Temas;
