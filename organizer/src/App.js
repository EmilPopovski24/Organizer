import { Route, Routes, useNavigate } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Tasks } from './components/Tasks/Tasks';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { NewTask } from './components/NewTask/NewTask';
import { useEffect, useState } from 'react';
import * as taskService from './services/taskService';

function App() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

useEffect(()=> {
    taskService.getAll()
      .then(result => {
          console.log(result);
          setTasks(result)
      })
},[])

const onNewTaskSubmit = async (taskData) => {
    const newTask = await taskService.addTask(taskData);
    setTasks(state => [...state, newTask]);
    navigate('/tasks')
}

  return (
    <div className="App">
        <Navigation />
          <div className='main-content'>
              <Routes>
                  <Route path ="/" element={<Home />} />
                  <Route path ="/login" element={<Login />} />
                  <Route path ="/register" element={<Register />} />
                  <Route path ="/logout" element={<Logout />} />
                  <Route path ="/tasks" element={<Tasks tasks={tasks} />} />>
                  <Route path ="/about" element={<About />} />
                  <Route path ="/new-task" element={<NewTask onNewTaskSubmit={onNewTaskSubmit} />} />
              </Routes>
          </div>
          <Footer />
    </div>
  );
}

export default App;
