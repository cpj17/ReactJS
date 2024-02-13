import React from 'react'
import T1Header from './T1Header'
import * as CommonData from './CommonFiles/MenuJson'

function T1ChildA() {
    let objMenu = CommonData.objMenu
    objMenu = objMenu.map(item => ({
        ...item,
        isActive: item.id === 2 && true
    }))
    console.log(objMenu);
    return (
    <div>
        <T1Header objMenu={objMenu} />
        <br />
        T1ChildA
    </div>
  )
}

export default T1ChildA