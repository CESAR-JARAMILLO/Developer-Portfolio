import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  Text,
  Textarea,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  const toast = useToast();
  const width = useBreakpointValue({ base: "100%", md: "400px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting me. I'll get back to you as soon as I can!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box bg="gray.800" color="white" py={12}>
      <Container>
        <Heading textAlign="center" mb={4}>Get In Touch</Heading>
        <Text textAlign="center" mb={8} mr={{ base: 0, md: 4 }}>
          If you want to talk to me about a project, or if you have a question,fill out the form below and I'll get back to you as soon
          as possible.
        </Text>
        <Flex justifyContent="center" alignItems="center">        
          <form onSubmit={handleSubmit}>
            <Box
              mr={{ base: 0, md: 4 }}
              mb={{ base: 4, md: 0 }}
              width={width}
            >
              <Input
                type="text"
                placeholder="Name"
                mb={4}
                required
                bg="white"
                color="gray.800"
                _placeholder={{ color: "gray.400" }}
              />
              <Input
                type="email"
                placeholder="Email"
                mb={4}
                required
                bg="white"
                color="gray.800"
                _placeholder={{ color: "gray.400" }}
              />
              <Input
                type="text"
                placeholder="Subject"
                mb={4}
                required
                bg="white"
                color="gray.800"
                _placeholder={{ color: "gray.400" }}
              />
              <Textarea
                placeholder="Message"
                rows="6"
                required
                bg="white"
                color="gray.800"
                _placeholder={{ color: "gray.400" }}
              />
            </Box>
            <Box width="%100">
              <IconButton
                type="submit"
                icon={<AiOutlineSend />}
                aria-label="Send message"
                bg="white"
                color="gray.800"
                size="lg"
                width={width}
              />
            </Box>
          </form>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
