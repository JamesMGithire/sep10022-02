import './App.css';
import WindowTracker from './WindowTracker'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>Toggle Window Tracking</button>
        <WindowTracker/>
      </header>
    </div>
  );
}

export default App;
