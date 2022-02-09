import * as React from "react";
import IntroGreeting from "./components/IntroGreeting";
import Chart from "./components/Chart";
import style from "./style/app.module.css";
import { useState } from "react";

function App() {
  const [axis, setAxis] = useState("x");

  const switchAxis = () => {
    setAxis((prevAxis) => (prevAxis === "x" ? "y" : "x"));
  };

  return (
    <div className={style.Container}>
      <IntroGreeting />
      <Chart axis={axis} />
      <button onClick={switchAxis}>Switch chart axis</button>
    </div>
  );
}

export default App;
