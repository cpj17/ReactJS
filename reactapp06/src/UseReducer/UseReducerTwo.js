import React, { useEffect } from 'react'

function UseReducerTwo() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then (res => {
      return res.json()
    })
    .then (result => {
      console.log(result);
    })
  })
  return (
    <div>
        
    </div>
  )
}

export default UseReducerTwo