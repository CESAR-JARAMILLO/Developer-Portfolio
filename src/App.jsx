import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Experience from './components/Experience'
import Projects from './components/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import moduleName from './components/Contact';
import Contact from "./components/Contact";

function App() {
  return (
    <Box bg="black">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
