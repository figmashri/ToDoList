import React, { useState } from 'react'

function Input(props) {
    const [inputText,setInputText] = useState('');
    return (
        <div className="input-conatiner">
            <input type="text" 
            className='input-box-todo' 
            placeholder='Entre your todo' 
            value={inputText}
            onChange={e=>
            setInputText(e.target.value)}/>
            <button className='add-btn'
            onClick={()=>{
                props.addList(inputText)
                    setInputText("")
            }}>+</button>
           
        </div>
    );
}

export default Input;