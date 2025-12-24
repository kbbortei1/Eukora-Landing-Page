import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import WhoItsFor from './pages/WhoItsFor';
import Features from './pages/Features';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CursorEffect />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/features" element={<Features />} />
            <Route path="/who-its-for" element={<WhoItsFor />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
