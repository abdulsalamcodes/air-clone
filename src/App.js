import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Dashboard from './containers/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
