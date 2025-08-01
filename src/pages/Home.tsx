// pages/Home.tsx
import { Box } from '@mui/material';
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from '../components/Contact';

export default function Home() {
  return (
    <Box>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </Box>
  );
}

