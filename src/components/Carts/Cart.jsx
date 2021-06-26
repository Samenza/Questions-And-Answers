import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ data }) => {
  const [btn, setBtn] = useState("+");
  const [minimize, setMinimize] = useState(false);

  const cartMimizeHandle = () => {
    if (btn === "+") {
      setBtn("-");
      setMinimize(true);
    } else {
      setBtn("+");
      setMinimize(false);
    }
  };

  return (
    <div className="  border border-1 m-2 d-flex  p-2 ">
      <div className="d-flex flex-column col ">
        <h5 className="CartTitle ">{data.question}</h5>
        {minimize && <p>{data.answer}</p>}
      </div>
      <button
        onClick={cartMimizeHandle}
        className="border border-0 btnMinimize "
      >
        {btn}
      </button>
    </div>
  );
};

export default Cart;
