import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, MyFooter, MyNavbar, Movies, Search, TvShows } from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
            <Route path="/movies" element={<Movies />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App