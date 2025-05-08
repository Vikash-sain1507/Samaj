import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Carousel from './component/Carousel';
import Cours from './component/Cours';
import Footer from './component/Footer';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Home from './component/Home'; 
import Hindi from './component/Hindi';
import LayOut from './component/LayOut';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Carousel />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Cours />} />
      </Routes>
      <Routes>
        <Route path='/' element={<LayOut />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
      {/* Sidebar should be inside BrowserRouter */}
      <Sidebar open={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Correct Routes Setup */}
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/hindi" element={<Hindi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

