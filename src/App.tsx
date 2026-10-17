import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';  
import { About } from './pages/About'; 
import { Lumi } from './pages/Lumi';   
import { Lexi } from './pages/Lexi';
import { FitHub } from './pages/FitHub';
import { JobFinder } from './pages/JobFinder';
import { Design } from './pages/Design';
import { ScrollToTop } from './components/ScrollToTop' 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="portfolio-shell min-h-screen bg-[#050505] text-white selection:bg-white/20 overflow-x-hidden pb-28 lg:pb-0">

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Design />} />
          <Route path="/lumi" element={<Lumi />} />
          <Route path='/lexi' element={<Lexi />} />
          <Route path='/fithub' element={<FitHub />} />
          <Route path="/job-finder" element={<JobFinder />} />
        </Routes>
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;
