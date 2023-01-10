import "./App.css";
import React, { useState } from "react";
function App() {
  const [num, setNum] = useState(5);
  const randomNum = () => {
    setNum(Math.floor(Math.random() * (100 - 2 + 1) + 1));
  };
  return (
    <div className="flex justify-center items-center h-screen space-x-10">
      <header>
        <title>Random Number generator</title>
      </header>

      <div>
        <button onClick={randomNum} className="bg-lime-500 rounded-xl p-2">
          Generate Random Number between 0 to 100
        </button>
      </div>
      <div>
        <p>{num}</p>
      </div>
    </div>
  );
}

export default App;
