import React from "react";
import style from "../../style/modal.module.css";

export default class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={style.Modal} id="modal">
        <h2 className={style.ModalTitle}>Add category</h2>
        <div className={style.Content}>{this.props.children}</div>
        <div className={style.Actions}>
          <button
            onClick={(e) => {
              this.props.hide(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
