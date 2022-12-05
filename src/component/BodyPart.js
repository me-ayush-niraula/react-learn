import React, { useState } from "react";

const HeadingPart = () => {
  const [variablewala, setwala] = useState("change me");

  const clickHandlerr = () => {
    setwala("did it mate");
  };
  return (
    <div>
      <h1>Body Part</h1>
      <h2>{variablewala}</h2>
      <div>
        <button onClick={clickHandlerr}>Click</button>
      </div>
    </div>
  );
};

export default HeadingPart;
