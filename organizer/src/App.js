import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Tasks } from './components/Tasks/Tasks';
import { Profile } from './components/Profile/Profile';
import { About } from './components/About/About';

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
                  <Route path ="/tasks" element={<Tasks />} />
                  <Route path ="/profile" element={<Profile />} />
                  <Route path ="/about" element={<About />} />
              </Routes>
          </div>
    </div>
  );
}

export default App;
