import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = () => {
  return (
    <Box>
      <Header />
      <Flex direction= 'column' minHeight='100vh'>
      <Box flex="1" mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          <Heading size="lg" mb={4}>Bolos</Heading>
          <Text>Deliciosos bolos feitos sob medida para qualquer ocasião. Aproveite nossos sabores exclusivos e surpreenda seus convidados!</Text>
        </Box>
        <Box flex="1">
          <Image src="../../public/images-removebg-preview.png" alt="Bolo 1" borderRadius="md" />
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Home;