// App.tsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'; 
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Menu />
      <Header />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;


