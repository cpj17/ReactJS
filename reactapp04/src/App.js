import './App.css';
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

function App() {

  const [listItems, setItems] = useState(
    [
      {
        id: 1,
        name: "item 1",
        checked: true
      },
      {
        id: 2,
        name: "item 2",
        checked: true
      },
      {
        id: 3,
        name: "item 3",
        checked: true
      }
    ]
  )

  function handleChange(id) {
    const updatedItem = listItems.map((item) => 
      item.id === id ? {...item, checked: !item.checked} : item
    )
    setItems(updatedItem)

    // const objRow = listItems.filter((item) => item.id === id)
    // objRow[0].checked = !objRow[0].checked
    // setItems(objRow)
  }
  function handleDelete(id) {
    const updatedItem = listItems.filter((item) => item.id !== id)
    setItems(updatedItem)
  }
  function handleSubmit(e) {
    e.preventDefault()
    const itemValue = document.getElementById("txtItem").value
    let id = listItems.length + 1
    const newItem = [...listItems, {
      id, checked: false, name: itemValue
    }]
    // const addedItem = [...listItems, newItem]
    setItems(newItem)
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Add item' id='txtItem' autoFocus required />
        <button type='submit'> Submit </button>
    </form>
      {
        listItems.length > 0 ?
        (
          <ul>
            {
              listItems.map((item) => 
                <li key={item.id} className='item'>
                  <input type="checkbox" checked={item.checked} onChange={() => handleChange(item.id)} />
                  <label htmlFor=""> {item.name} </label>
                  <FaTrashAlt onClick={() => handleDelete(item.id)} />
                </li>
              )
            }
          </ul>
        ) :
        <p> No records </p>
      }
    </div>
  );
}

export default App;
