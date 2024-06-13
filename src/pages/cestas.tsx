import { Box, Text, Flex } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";

const Cestas = () => {
  return (
    <>
      <Flex direction="column" minH="100vh">
        <Header />
        <Box flex="1" bgColor={'yellow'}>
          <Text>CESTAS</Text>
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Cestas;
