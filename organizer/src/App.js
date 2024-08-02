import { Router } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation />
        </Router>
    </div>
  );
}

export default App;
