import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Listbeers from './pages/Listbeers';
import Newbeer from './pages/Newbeer';
import Randombeer from './pages/Randombeer';
import Singlebeer from './pages/Singlebeer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listbeers" element={<Listbeers />} />
          <Route path="/listbeers/:id" element={<Singlebeer />} />
          <Route path="/randombeer" element={<Randombeer />} />
          <Route path="/newbeer" element={<Newbeer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
