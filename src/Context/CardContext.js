import React, { useState, useEffect } from "react";
import axios from "axios";

const CardContext = React.createContext();

const CardProvider = (props) => {
  const [number, setNumber] = useState(1);
  const [result, setResult] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const randompj = () => {
    const ramdom = parseInt(Math.random() * (825 - 1));
    setNumber(ramdom);
  };
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${number}`)
      .then((res) => {
        setResult(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [number]);

  return (
    <CardContext.Provider value={{ error, loading, result, randompj }}>
      {props.children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
