import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar/MyNavbar';
import MyFooter from './components/Footer/MyFooter';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import TvShows from './components/TvShows/TvShows';

function App() {
  return (
    <BrowserRouter>
      <div data-bs-theme="dark" className="bg-dark">
        <header>
          <MyNavbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TvShows />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App