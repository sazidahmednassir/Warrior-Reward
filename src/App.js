import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import PointReward from './component/PointReward/PointReward';

function App() {
  return (
    <div className='App'>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/point-reward" element={<PointReward/>} />
        
      </Routes>
    </div>
    
  );
}

export default App;
