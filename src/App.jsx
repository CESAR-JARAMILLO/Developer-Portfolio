import { Box, Divider } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Experience from './components/Experience'
import Projects from './components/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from "./components/Contact";

function App() {
  return (
    <Box bg="black">
      <Header />
      <Hero />
      <Divider bg="gray.500" height="2px" width="85%" mx="auto" my="8" />
      <Experience />
      <Divider bg="gray.500" height="2px" width="85%" mx="auto" my="8" />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
