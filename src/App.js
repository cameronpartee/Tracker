import * as React from "react";
import IntroGreeting from "./components/IntroGreeting";
import Chart from "./components/Chart";
import style from "./style/app.module.css";
import { useState, useEffect } from "react";
import {
  getWeeklyChartTimeWindow,
  getAnnualChartTimeWindow,
} from "./helpers/helper";
import ChartSwitch from "./components/ChartSwitch";
import Modal from "./components/Modal";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [axis, setAxis] = useState("x");
  const [chartSwitch, setChartSwitch] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const shouldShowModal = (e) => {
    setShowModal(true);
  };

  const switchAxis = React.useMemo(
    () => () => {
      setAxis((prevAxis) => (prevAxis === "x" ? "y" : "x"));
    },
    [axis]
  );

  return (
    <div className={style.Container}>
      <Modal show={showModal} hide={setShowModal} />
      <IntroGreeting />
      <div className={style.WeeklyChart}>
        <button
          className={style.AddButton}
          onClick={(e) => {
            shouldShowModal();
          }}
        >
          <AddIcon />
        </button>
        <Chart
          axis={axis}
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
          chartSwitch={null}
          timeWindow={getAnnualChartTimeWindow()}
        />
      </div>
    </div>
  );
}

export default App;
