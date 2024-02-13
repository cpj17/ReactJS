import React, { useState } from 'react'
import * as utill from './shared/util'

const T1Component1 = () => {
    // utill.test("ddd")
    // utill.func1("ghghg")
    // utill.func2("fff222")
    //utill.alterArrayOfValues("name1", "modi")

    const [name, setName] = useState("")
    utill.alterArrayOfValues("name1", name)
    
    return (
    <div>
        {utill.add(9,3)}
        <br />
        {utill.arrOfValues["name1"]}
        <br />
        <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default T1Component1