import { Box, Flex, Heading, Spacer, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="pink.500" p={4} color="white">
      <Flex maxW="1200px" mx="auto" align="center">
        <Heading size="md">Doces e Ideias</Heading>
        <Spacer />
        <Flex gap={6} >
          <Link href="/">Inicio </Link>
          <Link href="/temas">temas </Link>
          <Link href="/cestas">cestas </Link>
          <Link href="/doces">doces </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
