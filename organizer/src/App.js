import { Router, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

function App() {
  return (
    <div className="App">
        <Navigation />
          <div className='main-content'>
              <Routes>
                  <Route path ="/home" element={<Home />} />
              </Routes>
          </div>
    </div>
  );
}

export default App;
