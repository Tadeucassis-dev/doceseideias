import { Box, Flex, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      justifyContent={"space-between"}
      alignItems={"center"}
      fontSize={20}
      height={"60px"}
      backgroundColor={"pink"}
      paddingX={10} // Adiciona padding horizontal
    >
      <Box fontSize={40}>Doces e idéias</Box>
      <Flex gap={6}>
        <Link href="home" fontSize={20}>Home</Link>
        <Link href="servicos" fontSize={20}>Serviços</Link>
        <Link href="temas" fontSize={20}>Temas</Link>
        <Link href="festas" fontSize={20}>Festas</Link>
        <Link href="contatos" fontSize={20}>Contatos</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
