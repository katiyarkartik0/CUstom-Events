import React from "react";
import "./OrderSummary.css"
let OrderSummary = (props) => {
  console.log(props.data);
  let bill = [];
  props.data.forEach((value, key) => {
    bill = [...bill, `${key.name} X ${value} - cost:${key.price * value}`];
  });
  console.log(bill);

  return (
    <>
      <div className={bill.length===0?"":"orderSummary"}>
          {bill.length!==0?<div>ORDER SUMMARY</div>:<div></div>}
        <ol>
          {bill.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      </div>
    </>
  );
};

export default OrderSummary;
