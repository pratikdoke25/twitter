import { Routes, Route } from 'react-router-dom';
import Authentication from './components/Authentication';
import Homepage from './components/Homepage';

function App() {
  const isLoggedIn = true; // Replace true with your actual authentication logic

  return (
    <div>
      
        <Routes>
          <Route path='/' element={isLoggedIn ? <Homepage /> : <Authentication />} />
        </Routes>
    </div>
  );
}

export default App;
