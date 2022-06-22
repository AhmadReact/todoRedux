import React from "react";



function Item(props){


    return  <li><button onClick={()=>{props.onSelect(props.id)}}>X</button> {props.text}   </li>



}

export default Item;