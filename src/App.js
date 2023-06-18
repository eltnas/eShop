import './App.css';
import Home from './pages/home';
import Contact from './pages/contact';
import SobrePage from './pages/SobrePage'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
