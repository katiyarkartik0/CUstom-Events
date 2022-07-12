import React from "react";
import "./Cart.css"

let Cart = (props) => {
  //console.log(props);
  return (<>
    <ol>
      {props.item.map((item, index) => {
        return (
          <div className="unit" id={index}>
            <li>{item.name}</li>
            <button onClick={()=>{
              props.handleRemove(index)
            }} className="removeButton">REMOVE</button>
          </div>
        );
      })}
    </ol>
            </>

  );
};

export default Cart;
