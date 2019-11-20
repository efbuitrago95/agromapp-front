import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { HashRouter, Route, Switch } from "react-router-dom";
import { history } from "./History";
// import {PrivateRoute} from "./PrivateRoute";
import * as PATHS from "./Paths";
// Pages dashboard
import { ADMIN_DASHBOARD_PAGES } from "../components/admin-dashboard";

class Routes extends Component {
  render() {
    return (
      <>
        <HashRouter history={history}>
          <Switch>
            {/* GENERAL PATHS */}
            <Route
              exact
              path={PATHS.ROOT_PATH}
              component={ADMIN_DASHBOARD_PAGES.HomePage}
            />
            {/* END GENERAL PATHS */}
            {/* CROPS PATH */}
            <Route
              exact
              path={PATHS.LANGUAGES_PATH}
              component={ADMIN_DASHBOARD_PAGES.LanguagesPage}
            />
            {/* END CROPS PATH */}
            <Route path="*" component={ADMIN_DASHBOARD_PAGES.HomePage} />
          </Switch>
        </HashRouter>
        <ToastContainer />
      </>
    );
  }
}

const mapStateToProps = store => {
  return { store };
};

const _Routes = connect(mapStateToProps)(Routes);

export { _Routes as Routes };
