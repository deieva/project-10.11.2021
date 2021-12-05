import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
       <Router>
                <Header />
                <Routes>

                <Route path="/" element={<Home />} />
                   

                </Routes>
                <Footer />
            </Router>
    </div>
  );
}

export default App;
