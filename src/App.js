import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Footer from './Components/Footer';
import WhoWeAre from './Views/WhoWeAre';

function App() {
  return (
    <div>
       <Router>
                {/* <Header /> */}
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/whoweare" element={<WhoWeAre />} />

                </Routes>
                <Footer />
            </Router>
    </div>
  );
}

export default App;
