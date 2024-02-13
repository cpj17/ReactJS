import React from 'react'

function Component1(props) {
  return (
    <div>
        Component1
        <br />
        <br />

        {props.children}

        <br />

        <h1>
            props from comp2 {props.name}
        </h1>
    </div>
  )
}

export default Component1