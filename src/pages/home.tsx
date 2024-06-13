import { Box, Flex, Spacer, Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody, PopoverCloseButton, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (text) => {
    setSelectedOption(text);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      <Header />
      <Flex direction="row" minHeight="100vh" marginTop={10} width="full">
        <Flex
          width="full"
          height="60px"
          bgColor="gray.600"
          alignItems="center"
          justifyContent="space-between"
          padding={6}
          color="white"
          fontSize="large"
        >
          <Popover
            placement="bottom"
            isOpen={isOpen && selectedOption === "Festas"}
            onClose={handleClose}
          >
            <PopoverTrigger>
              <Button
                variant="link"
                color="white"
                _hover={{ color: "blue.300" }}
                onClick={() => handleOpen("Festas")}
              >
                Festas
              </Button>
            </PopoverTrigger>
            {selectedOption === "Festas" && (
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <List color={'#000'}>
                    <ListItem>Opção 1 para Festas</ListItem>
                    <ListItem>Opção 2 para Festas</ListItem>
                    <ListItem>Opção 3 para Festas</ListItem>
                  </List>
                </PopoverBody>
              </PopoverContent>
            )}
          </Popover>
          <Spacer />
          <Popover
            placement="bottom"
            isOpen={isOpen && selectedOption === "salgados"}
            onClose={handleClose}
          >
            <PopoverTrigger>
              <Button
                variant="link"
                color="white"
                _hover={{ color: "blue.300" }}
                onClick={() => handleOpen("salgados")}
              >
                Salgados
              </Button>
            </PopoverTrigger>
            {selectedOption === "salgados" && (
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                <List color={'#000'}>
                    <ListItem>Opção 1 para Salgados</ListItem>
                    <ListItem>Opção 2 para Salgados</ListItem>
                    <ListItem>Opção 3 para Salgados</ListItem>
                  </List>
                </PopoverBody>
              </PopoverContent>
            )}
          </Popover>
          <Spacer />
          <Popover
            placement="bottom"
            isOpen={isOpen && selectedOption === "Casamentos"}
            onClose={handleClose}
          >
            <PopoverTrigger>
              <Button
                variant="link"
                color="white"
                _hover={{ color: "blue.300" }}
                onClick={() => handleOpen("Casamentos")}
              >
                Casamentos
              </Button>
            </PopoverTrigger>
            {selectedOption === "Casamentos" && (
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <List color={'#000'}>
                    <ListItem>Opção 1 para Casamentos</ListItem>
                    <ListItem>Opção 2 para Casamentos</ListItem>
                    <ListItem>Opção 3 para Casamentos</ListItem>
                  </List>
                </PopoverBody>
              </PopoverContent>
            )}
          </Popover>
          <Spacer />
          <Popover
            placement="bottom"
            isOpen={isOpen && selectedOption === "Bolos"}
            onClose={handleClose}
          >
            <PopoverTrigger>
              <Button
                variant="link"
                color="white"
                _hover={{ color: "blue.300" }}
                onClick={() => handleOpen("Bolos")}
              >
                Bolos
              </Button>
            </PopoverTrigger>
            {selectedOption === "Bolos" && (
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <List color={'#000'}>
                    <ListItem>Opção 1 para Bolos</ListItem>
                    <ListItem>Opção 2 para Bolos</ListItem>
                    <ListItem>Opção 3 para Bolos</ListItem>
                  </List>
                </PopoverBody>
              </PopoverContent>
            )}
          </Popover>
          <Spacer />
          <Popover
            placement="bottom"
            isOpen={isOpen && selectedOption === "Outros"}
            onClose={handleClose}
          >
            <PopoverTrigger>
              <Button
                variant="link"
                color="white"
                _hover={{ color: "blue.300" }}
                onClick={() => handleOpen("Outros")}
              >
                Outros
              </Button>
            </PopoverTrigger>
            {selectedOption === "Outros" && (
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <List color={'#000'}>
                    <ListItem>Opção 1 para Outros</ListItem>
                    <ListItem>Opção 2 para Outros</ListItem>
                    <ListItem>Opção 3 para Outros</ListItem>
                  </List>
                </PopoverBody>
              </PopoverContent>
            )}
          </Popover>
          <Spacer />
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Home;