import { useState } from "react";



import React from 'react'

function Todo() {
    const [item, setItem] = useState(" ");
    const [list, setList] = useState([
        "A", "B", "C"
    ])


  return (
    <div>

        <div>
        <label>
            Text
            <input  onChange={(e) => {setItem(e.target.value)}} value={item} />
        </label>
         <button onClick={() => {setList([...list, item]); setItem("")}} >Add</button>  
        </div> 

        <div>
            
                {list.map((item) => {
                    return <div key={item}> {item} </div>
                } )}
            
        </div>

    </div>
  )
}

export default Todo
