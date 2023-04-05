import React, { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  HStack,
  VStack,
  IconButton,
  useDisclosure,
  Collapse,
  Link,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.800" color="white" boxShadow="md">
        <Flex alignItems="center" padding="2">
          <Box>
            <Link href="/">Cesar Jaramillo</Link>
          </Box>
          <Spacer />
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              variant="ghost"
              aria-label="Toggle Navigation"
            />
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <HStack spacing="4">
              <Link href="/projects">Projects</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/contact">Contact</Link>
            </HStack>
          </Box>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <VStack
            bg="gray.700"
            padding="2"
            spacing="4"
            alignItems="stretch"
          >
            <Link href="/projects">Projects</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/contact">Contact</Link>
          </VStack>
        </Collapse>
      </Box>
    </ChakraProvider>
  );
};

export default Header;
