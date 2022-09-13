import React from "react";

const UpdatedComponent = (OriginalComponent: any) => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent name="Aman" />;
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
