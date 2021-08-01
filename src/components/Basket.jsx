import React, { useState } from "react";
import { Button,  TextField } from "@material-ui/core";
import { Link } from "react-router-dom";


export default function Basket(props) {
  const { cartItems, onAdd, onRemove, name } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const tip = itemsPrice / 10;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + tip + shippingPrice;

  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const getData = (e) => {
    setData(e.target.value);
    setPrint(false);
  };

  return (
    <aside className="block col-1">
        <h1 style ={{textAlign : "center" , padding : "1rem" }}> Genrated Bill</h1>
      <TextField
        label="Customer Name"
        type="text"
        onChange={getData}
        variant="outlined"
      />
      <Button
        onClick={() => setPrint(true)}
        variant="contained"
        color="primary"
        style={{ width: "10%", padding: "15px" }}
      >
        Submit{" "}
      </Button>
      <h2>Customer Name : {print ? <span>{data}</span> : null}</h2>
      <div></div>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tip 10%</div>
              <div className="col-1 text-right">${tip.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Table Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
              >
                Print
              </Button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
