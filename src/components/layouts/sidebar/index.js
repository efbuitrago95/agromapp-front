import React, { Component } from "react";
import "./styles.scss";
import { Link, NavLink } from "react-router-dom";
import * as PATHS from "../../../routing/Paths";
import { Session } from "../../../state/utils/session";

class SidebarLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      session: new Session()
    };
  }

  render() {
    return (
      <>
        <nav id="sidebar">
          {/* Sidebar Scroll Container */}
          <div id="sidebar-scroll">
            {/* Sidebar Content */}
            <div className="sidebar-content">
              {/* Side Header */}
              <div className="side-header side-content bg-white-op">
                {/* Layout API, functionality initialized in App() -> uiLayoutApi() */}
                <button
                  className="btn btn-link text-gray pull-right hidden-md hidden-lg"
                  type="button"
                  data-toggle="layout"
                  data-action="sidebar_close"
                >
                  <i className="fa fa-times" />
                </button>
                <Link className="h5 text-white" to={PATHS.ROOT_PATH}>
                  <img
                    className="sidebar-logo"
                    src={"/img/logos/logo_agromapp_icon.png"}
                    alt="Famosos"
                  />
                  <img
                    className="sidebar-complete-logo"
                    src={"/img/logos/logo_agromapp.png"}
                    alt="Famosos"
                  />
                </Link>
              </div>
              {/* END Side Header */}

              {/* Side Content */}
              <div className="side-content">
                <ul className="nav-main">
                  <li>
                    <NavLink activeClassName="active" to={PATHS.ROOT_PATH}>
                      <i className="fas fa-tachometer-alt"></i>
                      <span className="sidebar-mini-hide">Dashboard</span>
                    </NavLink>
                  </li>
                  <li className="nav-main-heading">
                    <span className="sidebar-mini-hide">Cultivos</span>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to={PATHS.LANGUAGES_PATH}>
                      <i className="fas fa-language"></i>
                      <span className="sidebar-mini-hide">Idiomas</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* END Side Content */}
            </div>
            {/* Sidebar Content */}
          </div>
          {/* END Sidebar Scroll Container */}
        </nav>
      </>
    );
  }
}
export { SidebarLayout };
