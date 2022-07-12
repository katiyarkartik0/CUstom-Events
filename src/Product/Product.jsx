import React from "react";
import "./Product.css"

let Product = (props)=>{
    return(
        <>
        <div className="box">
            {props.item.name}
            {props.item.storage}<br/>
            <br/>
            {props.item.price}
        </div>

        </>
    )
}

export default Product;