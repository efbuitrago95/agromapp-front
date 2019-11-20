import React, { Component } from "react";
import "./styles.scss";
import { HeaderNavbarLayout } from "../header-navbar";
import { FooterLayout } from "../footer";
import { SidebarLayout } from "../sidebar";
import { AppUI } from "../../../assets/js/app";

class PageContainerLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hola: ""
    };

    this.initialize = this.initialize.bind(this);
    this.initialize();
  }

  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.initialize();
  }

  initialize() {
    window.jQuery(function() {
      // Init page helpers (BS Notify Plugin)
      AppUI.init();
      AppUI.initHelpers(["appear", "appear-countTo", "notify"]);
    });
  }

  render() {
    return (
      <>
        <div
          id="page-container"
          className="sidebar-l sidebar-o side-scroll header-navbar-fixed"
        >
          <SidebarLayout />
          <HeaderNavbarLayout
            showNavbarClientOptions={this.props.showNavbarClientOptions}
          />
          {/* Main Container */}
          <main id="main-container">
            {/* Page Content */}
            {this.props.children}
            {/* END Page Content */}
          </main>
          {/* END Main Container */}
          <FooterLayout />
        </div>
      </>
    );
  }
}

export { PageContainerLayout };
