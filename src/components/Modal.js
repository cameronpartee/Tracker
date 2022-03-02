import React from "react";
import "./modal.css";

export default class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modal" id="modal">
        <h2 class="modal-title">Add category</h2>
        <div class="content">{this.props.children}</div>
        <div class="actions">
          <button
            class="toggle-button"
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
