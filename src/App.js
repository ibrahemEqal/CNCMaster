import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home'; 
import CallUs from './components/Callus'; 
import TqCard from './components/TaleeqatCards'; 
import ProductCard from './components/ProductCard'; 
import TwCard from './components/TawzeeatCard';
import StCard from './components/StandatCard';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callus" element={<CallUs />} />
        <Route path="/tqcard" element={<TqCard />} />
        <Route path="/twcard" element={<TwCard />} />
        <Route path='/stcard' element={<StCard/>}/>
        <Route path="/product" element={<ProductCard />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
