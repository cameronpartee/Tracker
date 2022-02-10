import * as React from "react";
import IntroGreeting from "./components/IntroGreeting";
import Chart from "./components/Chart";
import style from "./style/app.module.css";
import { useState } from "react";
import { weekly, annual } from "./helpers/constants";
import {
  getWeeklyChartTimeWindow,
  getAnnualChartTimeWindow,
} from "./helpers/helper";
import ChartSwitch from "./components/ChartSwitch";

function App() {
  const [axis, setAxis] = useState("x");
  const [chartSwitch, setChartSwitch] = useState(true);

  const switchAxis = () => {
    setAxis((prevAxis) => (prevAxis === "x" ? "y" : "x"));
  };

  return (
    <div className={style.Container}>
      <IntroGreeting />
      <div className={style.WeeklyChart}>
        <Chart
          axis={axis}
          chartType={weekly}
          chartSwitch={chartSwitch}
          timeWindow={getWeeklyChartTimeWindow()}
        />
      </div>
      <div className={style.ControlsPannel}>
        <button onClick={switchAxis}>Switch chart axis</button>
        <ChartSwitch setChartSwitch={setChartSwitch} />
      </div>
      <div className={style.AnnualChart}>
        <Chart
          axis={"x"}
          chartType={annual}
          chartSwitch={chartSwitch}
          timeWindow={getAnnualChartTimeWindow()}
        />
      </div>
    </div>
  );
}

export default App;
