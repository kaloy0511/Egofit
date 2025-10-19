import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomescreenTailwind from './components/HomescreenTailwind';
import Shopscreen from './components/Shopscreen';
import Cartscreen from './components/Cartscreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomescreenTailwind />} />
          <Route path="/shop" element={<Shopscreen />} />
          <Route path="/cart" element={<Cartscreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
