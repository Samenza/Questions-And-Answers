import React, { useState } from "react";
import Cart from "./../Carts/Cart";
import questionsData from "./../../services/question";

const MainBody = () => {
  const [questions] = useState(questionsData());

  return (
    <div className="d-flex flex-column flex-md-row ">
      <h3 className="col-2 m-3"> Questions And Answers About Login</h3>
      <div className=" col-9 d-flex flex-column m-3">
        {questions &&
          questions.map((item) => {
            return <Cart data={item} key={item.question.substr(4)} />;
          })}
      </div>
    </div>
  );
};

export default MainBody;
