import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
