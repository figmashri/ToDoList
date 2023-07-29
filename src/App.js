import React, { useState } from 'react';
import "./App.css";
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  const [listTodo,SetlistTodo] =useState([]);
  let addList =(inputText)=>{
    if(inputText!=='')
    SetlistTodo([...listTodo,inputText]);
  }
    const deleteItem = (key)=>{
      let newListTodo=[...listTodo];
      newListTodo.splice(key,1)
      SetlistTodo([...newListTodo ])
    
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <Input addList={addList  }/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return(
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteItem}/>   
          )
        })}
      </div>
    </div>
  );
}

export default App