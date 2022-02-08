import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Footer from './Components/Footer';
import WhoWeAre from './Views/WhoWeAre';
import Header from './Components/Header';
import HowWeCanHelp from './Views/HowWeCanHelp';
import Projects from './Views/Projects';
import History from './Views/History';
import Testimonials from './Views/Testimonials';
import Getintouch from './Views/Getintouch';
import Page404 from './Views/Page404';
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
                <Route path="/history" element={<History />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/getintouch" element={<Getintouch />} />
                <Route path="*" element={<Page404 /> } />
                </Routes>
                <Footer />
            </Router>
    </div>
  );
}
export default App;
