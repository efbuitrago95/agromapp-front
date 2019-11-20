import React, { Component } from "react";
import { Session } from "../../../state/utils/session";
import { AppUI } from "../../../assets/js/app";

class HeaderNavbarLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      session: new Session(),
      div: <></>
    };

    this.logout = this.logout.bind(this);
    this.switchClient = this.switchClient.bind(this);
  }

  logout() {
    this.state.session.removeSession();
  }

  switchClient() {
    this.state.session.removeClientSession();
  }

  render() {
    AppUI.init();
    return (
      <>
        <header id="header-navbar" className="content-mini content-mini-full">
          {/* Header Navigation Right */}
          <ul className="nav-header pull-right">
            <li>
              <div className="btn-group">
                <button
                  className="btn btn-default btn-image dropdown-toggle"
                  data-toggle="dropdown"
                  type="button"
                >
                  <img
                    style={{ borderRadius: "50%" }}
                    src={
                      "data:image/jpeg;base64,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"
                    }
                    alt="Avatar"
                  />
                  <span className="hidden-xs hidden-sm">
                    {"Admin"} &nbsp;&nbsp;
                  </span>
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li className="dropdown-header">Actions</li>
                  <li>
                    <button
                      tabIndex="-1"
                      className="cursor-pointer"
                      onClick={this.logout}
                    >
                      <i className="fas fa-sign-out-alt"></i>
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          {/* END Header Navigation Right */}

          {/* Header Navigation Left */}
          <ul className="nav-header pull-left">
            <li className="hidden-md hidden-lg">
              {/* Layout API, functionality initialized in App() -> uiLayoutApi() */}
              <button
                className="btn btn-default"
                data-toggle="layout"
                data-action="sidebar_toggle"
                type="button"
              >
                <i className="fa fa-navicon" />
              </button>
            </li>
            <li className="hidden-xs hidden-sm">
              {/* Layout API, functionality initialized in App() -> uiLayoutApi() */}
              <button
                className="btn btn-default"
                data-toggle="layout"
                data-action="sidebar_mini_toggle"
                type="button"
              >
                <i className="fa fa-ellipsis-v" />
              </button>
            </li>
          </ul>
          {/* END Header Navigation Left */}
        </header>
      </>
    );
  }
}

HeaderNavbarLayout.defaultProps = {
  showNavbarClientOptions: false
};

export { HeaderNavbarLayout };
