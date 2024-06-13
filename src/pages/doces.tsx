import { Box, Text, Flex } from "@chakra-ui/react";
import Footer from "../components/footer";
import Header from "../components/header";

const Doces = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box flex="1" backgroundColor={'green'}>
        <Text>DOCES</Text>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Doces;
