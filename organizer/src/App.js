import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';

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
