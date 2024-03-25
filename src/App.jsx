import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, MyFooter, MyNavbar, Movies, Search, TvShows, NotFound, DetailComponent } from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <div data-bs-theme="dark" className="bg-dark">
        <header>
          <MyNavbar />
        </header>
        <body className='bg-dark'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-shows" element={<TvShows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie-details/:id" element={<DetailComponent />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <MyFooter />
        </body>
      </div>
    </BrowserRouter>
  )
}

export default App