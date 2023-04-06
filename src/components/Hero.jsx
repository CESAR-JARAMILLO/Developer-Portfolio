import { Box, Container, Image, Link, Heading, Text, Stack, Center, useBreakpointValue } from '@chakra-ui/react'
import cesar from '../assets/cesar.png'

const Hero = () => {
  const flexDirection = useBreakpointValue({ base: "column", md: "row-reverse" });
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl" });
  const textSize = useBreakpointValue({ base: "md", md: "lg" });
  const spacing = useBreakpointValue({ base: 4, md: 8 });

  return (
    <Container maxW="container.xl" px={0}>
      <Box display="flex" flexDirection={flexDirection} m="4">
        <Box flex="1" position="relative">
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundColor="rgba(0, 0, 0, 0.5)"
          />

          <Image src={cesar} borderRadius="full" />

        </Box>

        <Box flex="1" color="white" padding="8" textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box>
            <Heading size={headingSize} pb="6">Nice to meet you! I'm Cesar.</Heading>

            <Text pb='6' fontSize={textSize}>Based in Los Angeles, CA. I'm a full-stack developer passionate about building accessible web apps that users love.</Text>

            <Stack direction={flexDirection === "column" ? "column" : "row"} spacing={spacing} justifyContent="center">
              <Link>Contact Me</Link>
              <Link>Download Resume</Link>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Hero
