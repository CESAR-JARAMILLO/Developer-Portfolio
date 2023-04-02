import { Box, Container, Image, Link, Heading, Text, Stack, Center } from '@chakra-ui/react'
import cesar from '../assets/cesar.png'

const Hero = () => {
  return (
    <Container>
      <Box position="relative">
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.5)"
        />

        <Image src={cesar} />
      </Box>

      <Box color="white" padding="8" textAlign="center">
        <Heading size="2xl" pb="6">Nice to meet you! I'm Cesar.</Heading>

        <Text pb='6'>Based in Los Angeles, CA. I'm a full-stack developer passionate about building accessible web apps that users love.</Text>

        <Stack direction="column" spacing="2">
          <Link>Contact Me</Link>
          <Link>Download Resume</Link>
        </Stack>
      </Box>
    </Container>
  )
}

export default Hero
