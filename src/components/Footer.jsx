import { Box, Container, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py="6">
      <Container display="flex" alignItems="center" justifyContent="space-between">
        <Text>&copy; 2023 Cesar Jaramillo</Text>
        <Box>
          <Link mx="2" href="https://www.linkedin.com/in/cesarjara/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
          <Link mx="2" href="https://github.com/cesarjara" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
