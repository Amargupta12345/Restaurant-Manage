import React from 'react';
import {Button} from "@material-ui/core"

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <Button
          onClick={() => onAdd(product)}
          variant="contained"
          color="primary"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
 