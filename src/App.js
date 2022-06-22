import React, { useState } from "react";
import Item from "./Item";
import { addTodo,deleteToDo,removeTodo } from "./aciton/index";
import {useSelector,useDispatch} from "react-redux";
function App() {

    const [inputItem,setInput ]= useState("");

    const [arrayItem , setArray] = useState([])
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.todoReducer.list)
  const updateInput =(event)=>
  {

    setInput(event.target.value)




  }
  
  


  const updateArray = ()=>
  {

    if(inputItem===""){
      return false;

    }

    setArray((olditem)=>{

      return [...olditem,inputItem]

      
    })

    setInput("");


  }

const checkEnter = (event) =>{


  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    updateArray();
  }



}

const Delete = (id) =>{
console.log(id);
dispatch(deleteToDo(id));


}




  return (
    <div className="container">
     
     <div className="header">
    <h1>ToDo List</h1>
</div>

    <div className="inputdiv">
    <input type="text"  placeholder="Add a item"  value={inputItem} onKeyUp={checkEnter} onChange={updateInput}/> <button onClick={()=>dispatch(addTodo(inputItem),setInput(""))}>+</button>
    </div>
    <ol>
  {
    list.map( (elem,i) => {

      return <Item text={elem.data} key={i}  id={elem.id} onSelect={Delete}/>
   
    }



    )
    }   
    </ol>


    <button className="btn" onClick={()=>dispatch(removeTodo())}>Remove All</button>
    </div>
  );
}

export default App;
