import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, MyFooter, MyNavbar, Movies, Search, TvShows } from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div data-bs-theme="dark" className="bg-dark background-image">
        <header>
          <MyNavbar />
        </header>
        <body>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-shows" element={<TvShows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </body>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App