import { useState, useEffect } from "react";
import React from "react";

function State() {
  const [contador, setContador] = useState(0);
  const [crono, setCrono] = useState(60);

  useEffect(() => {

    if (crono > 0) {

      setTimeout(() => {
        setCrono(() => crono - 1);
      }, [1000]);
    } else {
      setTimeout(() => {
        setCrono(0);
      }, [0]);
    }

  },[]);
  
  return (
    <>
      <div className="container-status1">
        <p>
          your clicks {contador} in {crono}
        </p>
        <button onClick={() => setContador(contador + 1)} className="btn">
          +1
        </button>
        <button
          onClick={() => {
            setContador(0);
            setCrono(60);
          }}
          className="btn"
        >
          RESET
        </button>
      </div>
    </>
  );
}

export default State;
