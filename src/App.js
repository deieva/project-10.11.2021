import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Footer from './Components/Footer';
import WhoWeAre from './Views/WhoWeAre';
import Header from './Components/Header';
import HowWeCanHelp from './Views/HowWeCanHelp';
import Projects from './Views/Projects';

function App() {
  return (
    <div>
       <Router>
                <Header />
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/whoweare" element={<WhoWeAre />} />
                <Route path="/howwecanhelp" element={<HowWeCanHelp />} />
                <Route path="/projects" element={<Projects />} />

                </Routes>
                <Footer />
            </Router>
    </div>
  );
}

export default App;
