import { Box, Flex, Heading, Spacer, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="pink.500" p={4} color="white">
      <Flex maxW="1200px" mx="auto" align="center">
        <Heading size="md">Doces e Ideias</Heading>
        <Spacer />
        <Flex gap={4}>
          <Link href="/bolos">Bolos</Link>
          <Link href="/doces">Doces</Link>
          <Link href="/temas">Temas de Festa</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
