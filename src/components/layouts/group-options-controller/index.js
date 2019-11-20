import React, { Component } from "react";
import { Session } from "../../../state/utils/session";

class GroupOptionsControllerLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      session: new Session()
    };
  }

  render() {
    return (
      <>
        {this.props.validFor.includes(this.state.session.getSelectedGroup())
          ? this.props.children
          : null}
      </>
    );
  }
}

// Default Props
GroupOptionsControllerLayout.defaultProps = {
  validFor: []
};

export { GroupOptionsControllerLayout };
