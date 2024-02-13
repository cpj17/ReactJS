import { useState } from 'react';
import './App.css';
import { FaTrashAlt } from "react-icons/fa";

function App() {

  const [arrOfItems, setItem] = useState(
    [
      {
        id: 1,
        name: "value 1",
        checked: true
      },
      {
        id: 2,
        name: "value 2",
        checked: false
      },
      {
        id: 3,
        name: "value 3",
        checked: false
      }
    ]
  )

  function id_Changed(id) {
    const updateArr = arrOfItems.map((item) =>
      item.id === id ? {...item, checked: !item.checked} : item
    )

    setItem(updateArr)
  }

  function deleteBtn_Clicked(id) {
    const updateArr = arrOfItems.filter((item) => item.id !== id)
    
    setItem(updateArr)
  }

  return (
    <div className="App">
      {arrOfItems.length > 0 ? (
      <ul>
        {arrOfItems.map((item) =>
          <li className='item' key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={() => id_Changed(item.id)} />
            <label style={(item.checked) ? {textDecoration: 'line-through'} : null}> {item.name} </label>
            <FaTrashAlt role='button' onClick={() => deleteBtn_Clicked(item.id)} />
          </li>
        )}
      </ul>
      ) : <p> Your list is empty </p>
      }
    </div>
  );
}

export default App;
