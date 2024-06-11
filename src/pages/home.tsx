import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = () => {
  return (
    <Box>
      <Header />
      
      <Flex  height={'100vh'} as="section" id="bolos" p={8} bg="gray.50" direction={{ base: "column", md: "row" }} align="center" justify="space-between">
      <Box flex="1" mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          <Heading size="lg" mb={4}>Bolos</Heading>
          <Text>Deliciosos bolos feitos sob medida para qualquer ocasião. Aproveite nossos sabores exclusivos e surpreenda seus convidados!</Text>
        </Box>
        <Box flex="1">
          <Image src="/public/png-transparent-chocolate-cake-cake-chocolate-dessert.png" alt="Bolo 1" borderRadius="md" />
        </Box>
      </Flex>
      
      <Flex as="section" id="doces" p={8} direction={{ base: "column", md: "row-reverse" }} align="center" justify="space-between">
        <Box flex="1" ml={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          <Heading size="lg" mb={4}>Doces</Heading>
          <Text>Uma variedade de doces para adoçar a vida. Experimente nossos brigadeiros, beijinhos e muito mais!</Text>
        </Box>
        <Box flex="1">
          <Image src="doce1.jpg" alt="Doce 1" borderRadius="md" />
        </Box>
      </Flex>
      
      <Flex as="section" id="temas" p={8} bg="gray.50" direction={{ base: "column", md: "row" }} align="center" justify="space-between">
        <Box flex="1" mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          <Heading size="lg" mb={4}>Temas de Festa</Heading>
          <Text>Crie a festa dos seus sonhos com nossos temas personalizados. Desde princesas até super-heróis, temos tudo para tornar sua festa inesquecível!</Text>
        </Box>
        <Box flex="1">
          <Image src="tema1.jpg" alt="Tema 1" borderRadius="md" />
        </Box>
      </Flex>
      
      <Footer />
    </Box>
  );
};

export default Home;