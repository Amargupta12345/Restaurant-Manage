import React from "react";

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1 style={{ fontSize: 34 }}>
            Restaurant Management{" "}
            <span style={{ fontSize: 20 , color : "black"}}>
              Offer !!!!!!!!!!! Above $2000  Order Table Price is Free{" "}
            </span>
          </h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
      </div>
    </header>
  );
}
