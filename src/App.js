import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import DisplayQuote from './components/Quote';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<DisplayQuote />} />
      </Routes>
    </>
  );
}

export default App;
