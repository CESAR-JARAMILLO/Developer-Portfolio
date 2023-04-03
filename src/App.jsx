import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <Box bg="black">
      <Hero />
      <Experience />
      <Projects />
    </Box>
  );
}

export default App;
