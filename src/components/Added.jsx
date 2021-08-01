import Header from "./Header";
import Main from "./Main";
import Basket from "./Basket";
import data from "../data";
import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@material-ui/core";
import {Link} from "react-router-dom";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          ref={componentRef}
        ></Basket>
      </div>
      <Button
        component={Link}
        to="/"
        onClick={handlePrint}
        variant="contained"
        color="primary"
        style={{ width: "25%", float: "right", marginRight: "70px" }}
      >
        Print
      </Button>
    </div>
  );
}

export default App;
