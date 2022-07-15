//https://youtu.be/AmIdY1Eb8tY?list=PLI-Q5Sma0ilc3ytGLoWj51Ra0wBEk8gTw
// a partir del min 25 para armar el carrito y colocar los productos
import React from "react";

function Cart(props) {
  const { cartItems, onAdd } = props;
  return (
    <aside>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.title}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            {/* <button onClick={() => onRemove(item)} className="remove">-</button> */}
          </div>
          <div className="col-2 text-right">
            {item.qty} x {item.price.toFixed(2)}€
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Cart;
