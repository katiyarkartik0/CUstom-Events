import React, { useState } from "react";
import Cart from "../Cart/Cart.jsx";
import Data from "../Data.js";
import OrderSummary from "../OrderSummary/OrderSummary.jsx";
import Product from "../Product/Product.jsx";
import "./Shop.css";
let Shop = () => {
  let [commodity, setCommodity] = useState([]);

  let handleRemove = (id) => {
    setCommodity(
      commodity.filter((item, index) => {
        return index !== id;
      }),
    );
  };
  let obj = new Map();

  let [orderSummary, setOrderSummary] = useState([]);

  //console.log(orderSummary);

  return (
    <>
      <div className="shop">
        <div className="shoppingArea">
          {Data.map((item, index) => {
            return (
              <div className="commodity">
                <Product key={index} item={item} />
                <button
                  onClick={() => {
                    setCommodity((commodity = [...commodity, item]));
                  }}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <div className="cartArea">
            CART
            <Cart item={commodity} handleRemove={handleRemove} />
          </div>
          <br />
          <button
            onClick={() => {
              commodity.forEach((item) => {
                if (obj.has(item) === false) {
                  obj.set(item, 1);
                } else {
                  obj.set(item, obj.get(item) + 1);
                }
              });
              setOrderSummary(obj);
            }}
          >
            PRINT ORDER SUMMARY
          </button>
        </div>
        <div className="orderSummaryArea">
          <OrderSummary data={orderSummary}/>
        </div>
      </div>
    </>
  );
};

export default Shop;
