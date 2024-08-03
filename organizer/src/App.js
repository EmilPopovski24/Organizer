import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';

function App() {
  return (
    <div className="App">
        <Navigation />
          <div className='main-content'>
              <Routes>
                  <Route path ="/login" element={<Login />} />
                  <Route path ="/register" element={<Register />} />
                  <Route path ="/logout" element={<Logout />} />
              </Routes>
          </div>
    </div>
  );
}

export default App;
