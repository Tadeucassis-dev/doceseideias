import { Box, Flex, Input, InputGroup, InputLeftElement, Spacer, Text, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaSearch, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <Box p={4} color="white" height="200px">
      <Flex maxW="1200px" mx="auto" alignItems="center" height="100%">
      <Image
          src="../../public/kisspng-logo-party-service-event-management-birthday-multi-layer-birthday-cake-5b3e31acb3fbc1.2897779015308026047372-removebg-preview.png"
          alt="Logo Doces e Ideias"
          boxSize="240px"marginTop={8}
        />
        <Spacer />
        
        <InputGroup width="500px" mx="auto" borderRadius={50}>
          <InputLeftElement
            pointerEvents="none"
            children={<FaSearch color="gray" />}
          />
          <Input
            placeholder="O que você procura..."
            borderRadius={50}
            pl="40px" 
          />
        </InputGroup>
        
        <Spacer />
        <Flex direction="column" align="center" color="black">
          <Text mb={2}>Acesse nossas redes sociais</Text>
          <Flex>
            <Box 
              as="a" 
              href="https://www.instagram.com" 
              target="_blank" 
              mx={2} 
              _hover={{ color: "pink.500", transform: "scale(1.2)" }} 
              transition="transform 0.2s" 
            >
              <FaInstagram size="24px" color="black"/>
            </Box>
            <Box 
              as="a" 
              href="https://www.whatsapp.com" 
              target="_blank" 
              mx={2} 
              _hover={{ color: "green.500", transform: "scale(1.2)" }} 
              transition="transform 0.2s" 
            >
              <FaWhatsapp size="24px" color="black"/>
            </Box>
            <Box 
              as="a" 
              href="https://www.facebook.com" 
              target="_blank" 
              mx={2} 
              _hover={{ color: "blue.500", transform: "scale(1.2)" }} 
              transition="transform 0.2s" 
            >
              <FaFacebook size="24px" color="black"/>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;