import React, { useContext } from "react";
import "./App.css";
import { Cards } from "./Components/Cards";
import { Spinner } from "./Components/Spinner";
import { CardContext } from "./Context/CardContext";

function App() {
  const { loading, error, result } = useContext(CardContext);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty Cards</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            {error && <p>{error.message}</p>}
            {result && <Cards />}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
