import React from 'react';
import Header from './Header.jsx';
import Card from './Card.jsx';
import About from './About.jsx';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/about');
  };

  return (
    <div className="subzi-container">
      <Card img="https://hackclub.com/stickers/In-N-Out.png" text="In N Out Hack Club Sticker" onClick={handleCardClick} />
      <Card img="https://hackclub.com/stickers/HackHackClub.png" text="Duck Duck Go Orpheus" onClick={handleCardClick} />
      <Card img="https://hackclub.com/stickers/MRT.png" text="Hack Club MRT" onClick={handleCardClick} />
      <br />
      <br />
      <Card img="https://hackclub.com/stickers/drake.svg" text="Orpheus Drake Meme" onClick={handleCardClick} />
      <Card className="macintosh" img="https://hackclub.com/stickers/macintosh.svg" text="Hack Club Macintosh" onClick={handleCardClick} />
      <Card img="https://hackclub.com/stickers/orpheus-having-boba.png" text="Orpheus Boba" onClick={handleCardClick} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
