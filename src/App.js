import './App.css';
import SolStructure from './pages/SolStructure';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solution" element={<SolStructure />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
