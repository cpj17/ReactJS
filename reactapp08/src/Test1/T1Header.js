import React from 'react'
import './Style.css'

function T1Header({objMenu}) {
    return (
    <div>
        {objMenu.map((item) => {
            return <h3 className={item.isActive ? 'activeTab' : ''} key={item.id}> {item.name} </h3>
        })}
    </div>
  )
}

export default T1Header