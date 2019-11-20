import { history } from "../../routing/History";
// import * as PATHS from "../../routing/Paths";
import jwt_decode from "jwt-decode";

export class Session {
  constructor() {
    this.sessionName = "ss"; // Company session
    this.clientSessionName = "scs"; // Company client session
    this.selectedGroupName = "ssg"; // Company selected group
    this.session = this.getSession();
    this.clientSession = this.getClientSession();
    this.selectedGroup = this.getSelectedGroup();
  }

  setSession = token => {
    localStorage.setItem(this.sessionName, token);
    this.setSelectedGroup(this.getSession().groups[0]);
    this.applyRedirects();
  };

  applyRedirects() {
    this.session = this.getSession();
    if (this.session.required_action) {
      history
        .push
        // PATHS.LOGIN_ACTION_REQUIRED_PATH.replace(':action', this.session.required_action)
        ();
    } else if (
      !this.session.required_admin_dashboard &&
      this.session.default_client
    ) {
      this.setClientSession(this.session.default_client);
      history
        .push
        // PATHS.CLIENT_DASHBOARD_HOME_PATH.replace(':client_id', this.session.default_client)
        ();
    } else {
      // history.push(PATHS.HOME_PATH);
    }
  }

  setClientSession = client_id => {
    localStorage.setItem(this.clientSessionName, client_id);
    this.clientSession = this.getClientSession();
  };

  getSession = () => {
    const token = localStorage.getItem(this.sessionName);
    return token ? this.jwtDecode(token) : null;
  };

  jwtDecode(token) {
    try {
      if (token) {
        return jwt_decode(token);
      }
    } catch (e) {
      console.log("jwtDecode Exception:", e);
    }
  }

  getClientSession = () => {
    const client = localStorage.getItem(this.clientSessionName);
    return client ? client : null;
  };

  setSelectedGroup = group_code => {
    localStorage.setItem(this.selectedGroupName, group_code);
    this.clientSession = this.getSelectedGroup();
  };

  getSelectedGroup = () => {
    const selectedGroupName = localStorage.getItem(this.selectedGroupName);
    if (selectedGroupName && this.getSession()) {
      if (this.getSession().groups) {
        if (this.getSession().groups.includes(selectedGroupName)) {
          return selectedGroupName;
        } else {
          this.removeSelectedGroup();
          return this.getSession().groups[0];
        }
      } else {
        this.removeSelectedGroup();
        return "";
      }
    }
    if (this.getSession()) {
      console.log(getSelection());
      return this.getSession().groups[0];
    } else {
      return "";
    }
  };

  removeSelectedGroup() {
    localStorage.removeItem(this.selectedGroupName);
  }

  removeSession = () => {
    localStorage.removeItem(this.sessionName);
    this.removeSelectedGroup();
    this.removeClientSession();
    // history.push(PATHS.LOGIN_PATH);
  };

  removeClientSession = () => {
    localStorage.removeItem(this.clientSessionName);
    // history.push(PATHS.CLIENTS_PATH);
  };

  tokenExpired() {
    if (this.utcSecondsToDatetime(this.session.exp) <= new Date()) {
      this.removeSession();
      return true;
    }
    return false;
  }

  allowedActionFor = (groups = []) => {
    let is_authorized = false;
    groups.forEach(g => {
      if (this.getSession().groups.includes(g)) {
        is_authorized = true;
      }
    });
    return is_authorized;
  };

  checkSession = () => {
    const session = this.getSession();
    if (session) {
      if (this.utcSecondsToDatetime(session.exp) >= new Date()) {
        history.push("/home");
      } else {
        this.removeSession();
      }
    }
  };

  utcSecondsToDatetime = utcSeconds => {
    if (utcSeconds) {
      const date = new Date(0); // The 0 there is the key, which sets the date to the epoch
      date.setUTCSeconds(utcSeconds);
      return date;
    } else {
      return null;
    }
  };
}
