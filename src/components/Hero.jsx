import { Box, Container, Image, Link } from '@chakra-ui/react'
import cesar from '../assets/cesar.png'

const Hero = () => {
  return (
    <Container>
      <Image src={cesar} />
      <Box>
        <h1>Nice to meet you! I'm Cesar</h1>

        <p>Based in Los Angeles, CA. I'm a full-stack developer passionate about building accessible web apps that users love.</p>

        <Box>
          <Link>Contact Me</Link>
          <Link>Download Resume</Link>
        </Box>
      </Box>
    </Container>
  )
}

export default Hero