import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Tasks } from './components/Tasks/Tasks';
import { Profile } from './components/Profile/Profile';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { NewTask } from './components/NewTask/NewTask';
import { useEffect, useState } from 'react';
import * as taskService from './services/taskService';

function App() {

  const [tasks, setTasks] = useState([]);

useEffect(()=> {
    taskService.getAll()
      .then(result => {
          console.log(result);
          setTasks(result)
      })
},[])

  return (
    <div className="App">
        <Navigation />
          <div className='main-content'>
              <Routes>
                  <Route path ="/" element={<Home />} />
                  <Route path ="/login" element={<Login />} />
                  <Route path ="/register" element={<Register />} />
                  <Route path ="/logout" element={<Logout />} />
                  <Route path ="/tasks" element={<Tasks tasks={tasks} />} />
                  <Route path ="/profile" element={<Profile />} />
                  <Route path ="/about" element={<About />} />
                  <Route path ="/new-task" element={<NewTask />} />
              </Routes>
          </div>
          <Footer />
    </div>
  );
}

export default App;
