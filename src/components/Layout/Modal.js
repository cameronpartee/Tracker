import React from "react";
import style from "../../style/modal.module.css";
import AddChartLabel from "../AddChartLabel";

export default class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={style.Modal} id="modal">
        <AddChartLabel hide={this.props.hide} />
      </div>
    );
  }
}
