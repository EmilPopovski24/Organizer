import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';

function App() {
  return (
    <div className="App">
        <Navigation />
          <div className='main-content'>
              <Routes>
                  <Route path ="/" element={<Home />} />
                  <Route path ="/login" element={<Login />} />
                  <Route path ="/register" element={<Register />} />
                  <Route path ="/logout" element={<Logout />} />
                  <Route path ="/tasks"/>
                  <Route path ="/profile"/>
              </Routes>
          </div>
    </div>
  );
}

export default App;
