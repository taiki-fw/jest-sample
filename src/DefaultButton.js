import React from "react";

class DefaultButton extends React.Component {
  render() {
    return (
      <button
        type="button"
        onClick={this.props.onClick.bind(this)}
        className={this.props.label.length > 10 ? "long" : "small"}
      >
        {this.props.label}
      </button>
    );
  }
}

export default DefaultButton;
