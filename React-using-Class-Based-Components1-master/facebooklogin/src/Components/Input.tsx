import React, { createRef } from "react";

class Input extends React.Component {
  private inputRef = createRef<HTMLInputElement>();

  onFocus = (): void => {
    if (!this.inputRef.current) return;
    this.inputRef.current.blur();
  };

  render() {
    console.log(this.inputRef,"Ref properties")
    return (
      <input
        onFocus={this.onFocus}
        ref={this.inputRef}
      />
    );
  }
}
export default Input;
// Portals
// Http Request
// HOC
// Render Props

