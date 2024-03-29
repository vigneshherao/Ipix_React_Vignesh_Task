import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="w-[80%] m-auto">
      <h2 className="text-center font-extralight text-2xl tracking-widest m-2">
        Total Items - {cartItems.length}
      </h2>
      <div>
        {cartItems.map((item) => (
          <CartItems key={item.id} data={item} />
        ))}
      </div>
      <div className="mt-5">
        {cartItems.length == 0 ? (
          <h2 className="text-center text-2xl tracking-widest m-2 font-bold">
            Please Add Something Into Your Cart!
          </h2>
        ) : (
          <button
            className="w-full bg-black text-white text-center p-1 font-semibold"
            onClick={() => {
              dispatch(clearItem());
            }}
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
