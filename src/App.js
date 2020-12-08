import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // Console.log hallo om te checken
  // wanneer je component rerendert
  console.log("hallo");

  // Als je setCounter hier in je component neerzet
  // kom je in een infinite update cycle terecht
  // setCounter()

  useEffect(() => {
    // update the state 1 keer want lege dependency array []
    // als je de dependency array weglaat heb je weer een infinite update cycle
    setCounter(counter + 1);
  }, []);

  return (
    <div className="App">
      <h1>Hallo Wereld</h1>
      {counter}
      <br />
      {/* Een setter aanroepen zoals wanneer je op een knopje drukt */}
      {/* Start een update cycle, maar geen infinite loop, zo werkt het dus zoals het moet */}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
