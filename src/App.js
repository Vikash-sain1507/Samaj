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
import English from './component/English';
import MyProfile from './component/MyProfile';
import Settings from './component/Settings';
import Blog from './component/Blog';
import ForgetPassword from './component/ForgetPassword';

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
      <Routes>
        <Route path="/english" element={<English />} />
      </Routes>
      <Routes>
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Routes>
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
      <Routes>
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

