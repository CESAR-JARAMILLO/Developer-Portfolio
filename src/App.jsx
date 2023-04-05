import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <Box bg="black">
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </Box>
  );
}

export default App;
