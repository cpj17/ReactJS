import React, { useState } from "react";

function List() {
    
    const [list, setList] = useState(["item1", "item2"])
    
    function addItem_Clicked() {
        setList((prevList) =>
            {return [...prevList, "item3"]}
        )
    }

    return(
        <>
            <h1> List items </h1>
            <button onClick={addItem_Clicked}> Add Item </button>
            <ul>
                {
                    list.map((item, index) =>
                        <li key={index}> {item} </li>
                    )
                }
            </ul>
        </>
    )
}

export default List