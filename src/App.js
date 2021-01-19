import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Dashboard from './containers/Dashboard/Dashboard';
import CollectionContextProvider from './contexts/CollectionContext';
function App() {
  return (
    <div className="App">
      <Router>
        <CollectionContextProvider>
          <Dashboard />
        </CollectionContextProvider>
      </Router>
    </div>
  );
}

export default App;
