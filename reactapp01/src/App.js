import './App.css';
import Comp2 from './Component2';
import Comp1 from './component1';


function App() {
  return (
    <>
      <label htmlFor=""> type 1 </label>
      <br />
      <Comp1 />
      <br />
      <br />
      <label htmlFor=""> type 2 </label>
      <br />
      <Comp2 />
    </>
  );
}

export default App;
