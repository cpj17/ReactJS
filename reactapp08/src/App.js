import './App.css';
import config from './Data/config.json'
import T1ChildA from './Test1/T1ChildA';

function App() {
  return (
    <div className="App">
      
      <h3> value from config {config["APP_ID"]} </h3>

      <T1ChildA />
    </div>
  );
}

export default App;
